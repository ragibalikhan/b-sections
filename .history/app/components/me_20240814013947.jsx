// CustomizeSection.js
import { useState } from "react";
import { Modal, Button, Frame } from "@shopify/polaris";
import CustomizableFaqSection from "../Sections/CustomizableFaqSection"; // Import your custom FAQ section component

export default function CustomizeSection({ themeId }) {
  const [active, setActive] = useState(false);
  const [sectionData, setSectionData] = useState({});

  const handleChange = () => setActive(!active);

  const handleSaveSection = (data) => {
    setSectionData(data);
    saveSectionToTheme(themeId, data);
    handleChange(); // Close modal
  };

  const saveSectionToTheme = async (themeId, data) => {
    try {
      const response = await fetch(`/api/themes/${themeId}/add-section`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Section added successfully to the theme.");
      } else {
        console.error("Failed to add section to the theme.");
      }
    } catch (error) {
      console.error("Error adding section to the theme:", error);
    }
  };

  return (
    <div>
      <Button onClick={handleChange}>Customize Section</Button>
      <Frame>
        <Modal
          open={active}
          onClose={handleChange}
          title="Customize Your Section"
          primaryAction={{
            content: "Save and Add",
            onAction: () => handleSaveSection(sectionData),
          }}
          secondaryActions={[
            {
              content: "Close",
              onAction: handleChange,
            },
          ]}
        >
          <Modal.Section>
            <CustomizableFaqSection onSave={setSectionData} />
          </Modal.Section>
        </Modal>
      </Frame>
    </div>
  );
}
