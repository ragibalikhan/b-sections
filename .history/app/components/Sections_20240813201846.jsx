import { useEffect } from "react";
import { json } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import {
  Layout,
  Text,
  Card,
  Button,
  BlockStack,
  Thumbnail
 
} from "@shopify/polaris";
import {
  SearchIcon
} from '@shopify/polaris-icons';

 
export default function Sections() {
  
  

  return (

   <BlockStack gap="500">
        <Layout>
          <Layout.Section>
            <Card>
            <Thumbnail
      source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
      alt="Black choker necklace"
    />
             <Text>
                Hey Section 1
             </Text>
            </Card>
          </Layout.Section>
         
        </Layout>
      </BlockStack>
    
  );
};
