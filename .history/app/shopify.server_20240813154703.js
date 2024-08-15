import "@shopify/shopify-app-remix/adapters/node";
import {
  ApiVersion,
  AppDistribution,
  shopifyApp,
} from "@shopify/shopify-app-remix/server";
import { PrismaSessionStorage } from "@shopify/shopify-app-session-storage-prisma";
import { restResources } from "@shopify/shopify-api/rest/admin/2024-07";
import prisma from "./db.server";
import Shopify from "@shopify/shopify-api";

const shopify = shopifyApp({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET || "",
  apiVersion: ApiVersion.July24,
  scopes: process.env.SCOPES?.split(","),
  appUrl: process.env.SHOPIFY_APP_URL || "",
  authPathPrefix: "/auth",
  sessionStorage: new PrismaSessionStorage(prisma),
  distribution: AppDistribution.AppStore,
  restResources,
  future: {
    unstable_newEmbeddedAuthStrategy: true,
  },
  ...(process.env.SHOP_CUSTOM_DOMAIN
    ? { customShopDomains: [process.env.SHOP_CUSTOM_DOMAIN] }
    : {}),
});

// Function to create a recurring charge
const createRecurringCharge = async (session) => {
  const { shop, accessToken } = session;
  
  const chargeDetails = {
    recurring_application_charge: {
      name: "Your App Subscription",
      price: 10.0, // Monthly price in shop currency
      return_url: `${process.env.SHOPIFY_APP_URL}/billing/callback`,
      trial_days: 7, // Optional: trial days
      test: process.env.NODE_ENV !== "production", // true in development mode
    },
  };

  const client = new Shopify.Clients.Rest(shop, accessToken);
  const response = await client.post({
    path: 'recurring_application_charges',
    data: chargeDetails,
    type: 'application/json',
  });

  return response.body.recurring_application_charge;
};

// Function to check for an active charge
const checkActiveCharge = async (session) => {
  const client = new Shopify.Clients.Rest(session.shop, session.accessToken);
  const response = await client.get({
    path: 'recurring_application_charges',
  });

  const charges = response.body.recurring_application_charges;
  return charges.find(
    (charge) => charge.status === 'active' || charge.status === 'accepted'
  );
};

// Integrate billing logic with Shopify app authentication
shopify.authenticated(async (req, res, session) => {
  const activeCharge = await checkActiveCharge(session);

  if (!activeCharge) {
    const charge = await createRecurringCharge(session);
    return res.redirect(charge.confirmation_url);
  }

  // Proceed with normal app load if billing is active
  res.redirect('/');
});

// Handle billing callback after charge approval
shopify.unauthenticated(async (req, res) => {
  const session = await shopify.sessionStorage.load(req);

  if (!session) {
    res.redirect('/auth/login');
    return;
  }

  const { charge_id } = req.query;

  const client = new Shopify.Clients.Rest(session.shop, session.accessToken);
  await client.post({
    path: `recurring_application_charges/${charge_id}/activate`,
  });

  // Now the charge is active, grant access to premium features
  res.redirect('/');
});

export default shopify;
export const apiVersion = ApiVersion.July24;
export const addDocumentResponseHeaders = shopify.addDocumentResponseHeaders;
export const authenticate = shopify.authenticate;
export const unauthenticated = shopify.unauthenticated;
export const login = shopify.login;
export const registerWebhooks = shopify.registerWebhooks;
export const sessionStorage = shopify.sessionStorage;
