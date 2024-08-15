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

  // Sample data for the media cards
  const mediaItems = Array(9).fill({
    title: "Turn your side-project into a business",
    description: "In this course, you’ll learn how the Kular family turned their mom’s recipe book into a global business.",
    imageSrc: "https://www.brandboostup.in/Shopify/2.png"
  });

  const activator = (
    <Button onClick={handleChange} plain>
      Check
    </Button>
  );

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
                    onAction: handleChange,
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
            <MediaCard
      title="Get closer to launching your store"
      primaryAction={{
        content: 'Add a product',
        onAction: () => {},
      }}
      secondaryAction={{
        content: 'Learn more',
        onAction: () => {},
      }}
      description="Start your business with eye-catching inventory."
      popoverActions={[{content: 'Dismiss', onAction: () => {}}]}
    >
      <img
        alt=""
        width="100%"
        height="100%"
        style={{objectFit: 'cover', objectPosition: 'center'}}
        src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
      />
    </MediaCard>
            </Modal.Section>
          </Modal>
        </Frame>
      </div>
    </BlockStack>
  );
}
