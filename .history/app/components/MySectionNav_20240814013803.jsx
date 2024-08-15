// MySectionNav.js
import { useEffect, useState } from "react";
import { Card, Button, Layout, Text } from "@shopify/polaris";
import CustomizeSection from "./CustomizeSection";

export default function MySectionNav() {
  const [themes, setThemes] = useState([]);
  const [selectedThemeId, setSelectedThemeId] = useState(null);

  useEffect(() => {
    fetchThemes();
  }, []);

  const fetchThemes = async () => {
    try {
      const response = await fetch('/api/themes'); // Use your API endpoint here
      const data = await response.json();
      setThemes(data.themes);
    } catch (error) {
      console.error("Error fetching themes:", error);
    }
  };

  const handleAddSectionToTheme = (themeId) => {
    setSelectedThemeId(themeId); // Set the selected theme ID for customization
  };

  return (
    <Layout>
      <Layout.Section>
        {themes.map((theme) => (
          <Card title={theme.name} sectioned key={theme.id}>
            <Text>
              <p>{theme.role}</p>
            </Text>
            <Button onClick={() => handleAddSectionToTheme(theme.id)}>
              Add Section to Theme
            </Button>
          </Card>
        ))}
      </Layout.Section>
      {selectedThemeId && (
        <CustomizeSection themeId={selectedThemeId} />
      )}
    </Layout>
  );
}
