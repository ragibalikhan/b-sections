import {useState, useCallback} from "react";
import {
    Layout,
    Card,
    MediaCard,
    BlockStack,
    InlineGrid,
    Frame,
    Modal,
    Button,
    Text
  } from "@shopify/polaris";
  
  export default function Sections() {
    const [active, setActive] = useState(false);

    const handleChange = useCallback(() => setActive(!active), [active]);

    const activator = <Button onClick={handleChange}>Open</Button>;

    // Sample data for the media cards
    const mediaItems = Array(9).fill({
      title: "Turn your side-project into a business",
      description: "In this course, you’ll learn how the Kular family turned their mom’s recipe book into a global business.",
      imageSrc: "https://www.brandboostup.in/Shopify/2.png"
    });
  
    return (
      <BlockStack gap="500">
        <Layout>
          <Layout.Section>
            <InlineGrid columns={3} gap="400">
              {mediaItems.map((item, index) => (
                <Card key={index}>
                  <MediaCard
                    portrait
                    title={item.title}
                    primaryAction={{
                      content: 'Check',
                      onAction: () => {},
                    }}
                    description={item.description}
                    popoverActions={[{content: 'Dismiss', onAction: () => {}}]}
                  >
                    <img
                      alt=""
                      width="100%"
                      height="auto"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                      src={item.imageSrc}
                    />
                  </MediaCard>
                </Card>
              ))}
            </InlineGrid>
          </Layout.Section>
        </Layout>

        <div style={{height: '500px'}}>
      <Frame>
        <Modal
          activator={activator}
          open={active}
          onClose={handleChange}
          title="Reach more shoppers with Instagram product tags"
          primaryAction={{
            content: 'Add Instagram',
            onAction: handleChange,
          }}
          secondaryActions={[
            {
              content: 'Learn more',
              onAction: handleChange,
            },
          ]}
        >
          <Modal.Section>
            <Text>
              
                Use Instagram posts to share your products with millions of
                people. Let shoppers buy from your store without leaving
                Instagram.
              
            </Text>
          </Modal.Section>
        </Modal>
      </Frame>
    </div>
      </BlockStack>
    );
  }
  