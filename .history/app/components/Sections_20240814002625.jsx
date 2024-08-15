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

  const handleAddSection = useCallback(async () => {
    const isAppEnabled = await checkIfAppIsEnabled(); // Check if the app is enabled in the theme

    if (!isAppEnabled) {
      const enabled = await enableAppInTheme(); // Enable the app in the theme
      if (!enabled) {
        alert("Failed to enable the app in the theme.");
        return;
      }
    }

    setActive(true); // Open the modal to customize the FAQ section
  }, []);

  const handleSaveFaqSection = (data) => {
    setFaqSectionData(data);
    handleChange(); // Close the modal after saving
    // Here you would implement the logic to add the FAQ section to the store
    console.log("FAQ Section Data Saved:", data);
  };

  // Sample data for the media card
  const mediaItems = {
    title: "Add an FAQ Section",
    description:
      "Click here to add a customizable FAQ section to your store. Customize the questions, answers, and styles.",
    imageSrc: "https://www.brandboostup.in/Shopify/faq.png", // Replace with your FAQ section image
  };

  return (
    <BlockStack gap="500">
      <Layout>
        <Layout.Section>
          <InlineGrid columns={3} gap="400">
            <Card>
              <MediaCard
                portrait
                title={mediaItems.title}
                primaryAction={{
                  content: "Add",
                  onAction: handleAddSection,
                }}
                description={mediaItems.description}
                popoverActions={[{ content: "Dismiss", onAction: () => {} }]}
              >
                <img
                  alt="FAQ Section"
                  width="100%"
                  height="auto"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  src={mediaItems.imageSrc}
                />
              </MediaCard>
            </Card>
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

// Mock functions to simulate enabling the app in the theme
const checkIfAppIsEnabled = async () => {
  // Replace with your logic to check if the app is enabled in the theme
  return true;
};

const enableAppInTheme = async () => {
  // Replace with your logic to enable the app in the theme
  return true;
};
