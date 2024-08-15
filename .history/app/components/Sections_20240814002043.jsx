import { useState, useCallback } from "react";
import {
  Layout,
  Card,
  MediaCard,
  BlockStack,
  InlineGrid,
  Frame,
  Modal,
  Button,
  Text,
} from "@shopify/polaris";
import CustomizableFaqSection from "../Sections/CustomizableFaqSection"; // Import the customizable FAQ section component

export default function Sections() {
  const [active, setActive] = useState(false);
  const [faqSectionData, setFaqSectionData] = useState(null);

  const handleChange = useCallback(() => setActive(!active), [active]);

  const handleSaveFaqSection = (data) => {
    setFaqSectionData(data);
    handleChange(); // Close the modal after saving
    // Here you can handle saving the FAQ data to the Shopify theme
    console.log("FAQ Section Data Saved:", data);
  };

  // Sample data for the media cards
  const mediaItems = Array(9).fill({
    title: "Turn your side-project into a business",
    description:
      "In this course, you’ll learn how the Kular family turned their mom’s recipe book into a global business.",
    imageSrc: "https://www.brandboostup.in/Shopify/2.png",
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
                    content: "Check",
                    onAction: handleChange,
                  }}
                  description={item.description}
                  popoverActions={[{ content: "Dismiss", onAction: () => {} }]}
                >
                  <img
                    alt=""
                    width="100%"
                    height="auto"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    src={item.imageSrc}
                  />
                </MediaCard>
              </Card>
            ))}
          </InlineGrid>
        </Layout.Section>
      </Layout>

      <div style={{ height: "500px" }}>
        <Frame>
          <Modal
            open={active}
            onClose={handleChange}
            title="Customize and Add FAQ Section"
            primaryAction={{
              content: "Add to Theme",
              onAction: handleSaveFaqSection,
            }}
            secondaryActions={[
              {
                content: "Close",
                onAction: handleChange,
              },
            ]}
          >
            <Modal.Section>
              <CustomizableFaqSection onSave={handleSaveFaqSection} />
            </Modal.Section>
          </Modal>
        </Frame>
      </div>
    </BlockStack>
  );
}
