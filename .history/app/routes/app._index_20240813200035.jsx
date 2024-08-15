import { useEffect } from "react";
import { json } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import {
  Page,
  Layout,
  Text,
  Card,
  Button,
  BlockStack,
  Box,
  List,
  Link,
  InlineStack,
  TextField,
  Select,
  ChoiceList,
  FormLayout,
  ResourceList,
   ResourceItem,
 
} from "@shopify/polaris";
import {
  SearchIcon
} from '@shopify/polaris-icons';
import { TitleBar, useAppBridge } from "@shopify/app-bridge-react";
import { authenticate } from "../shopify.server";
import SearchSection from "../components/Search";

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
      <TitleBar title="B-section">
        <button variant="primary" onClick={""}>
          Generate a product
        </button>
       
      </TitleBar>
      
      <FormLayout>
      <TextField
        label="search"
        autoComplete="off"
        connectedRight={
          <Select
            label="Categories"
            options={['months after purchase']}
          />
        }
      />
    </FormLayout>
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
    </Page>
  );
}
