import {
    Layout,
    Card,
    MediaCard,
    BlockStack,
    InlineGrid
  } from "@shopify/polaris";
  
  export default function Sections() {
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
                      content: 'Learn more',
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
      </BlockStack>
    );
  }
  