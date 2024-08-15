import {
  Page,
  Layout,
  Text,
  Card,
  Button,
  BlockStack,
  InlineStack,
  
 
} from "@shopify/polaris";
import { TitleBar, useAppBridge } from "@shopify/app-bridge-react";
import { authenticate } from "../shopify.server";
import SearchSection from "../components/Search";
import Sections from "../components/Sections";

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  return null;
};

export const action = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  
};

export default function Index() {
  
  

  return (
    <Page>
      <BlockStack gap="500">
        <Layout>
          <Layout.Section>
          <SearchSection/>
            <Card>
              <BlockStack gap="500">
                <BlockStack gap="200">
                  <Text as="h2" variant="headingMd">
                    Congrats now you can add Sections 🎉
                  </Text>
                </BlockStack>
                <BlockStack gap="200">
                  <Text as="h3" variant="headingMd">
                    Get started with Adding Section
                  </Text>
                </BlockStack>
                <InlineStack gap="300">
                  <Button onClick={""}>
                    Add Sections
                  </Button>
                </InlineStack>
              </BlockStack>
            </Card>
          </Layout.Section>
         
        </Layout>
      </BlockStack>
      <Sections/>
    </Page>
  );
}
