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
            source="https://www.brandboostup.in/Shopify/2.png"
            size="extraLarge"
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
