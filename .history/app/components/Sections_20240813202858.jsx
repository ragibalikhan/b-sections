import { useEffect } from "react";
import { json } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import {
  Layout,
  Text,
  Card,
  Button,
  BlockStack,
  Thumbnail,
  MediaCard,
 
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
                <MediaCard
                portrait
                title="Turn your side-project into a business"
                primaryAction={{
                  content: 'Learn more',
                  onAction: () => {},
                }}
                description="In this course, you’ll learn how the Kular family turned their mom’s recipe book into a global business."
                popoverActions={[{content: 'Dismiss', onAction: () => {}}]}
              >
            <img
        alt=""
        width="30%"
        height="30%"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
            src="https://www.brandboostup.in/Shopify/2.png"
            
            />
            </MediaCard>
             <Text>
                Hey Section 1
             </Text>
            </Card>
          </Layout.Section>
         
        </Layout>
      </BlockStack>
    
  );
};
