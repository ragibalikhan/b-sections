import React, { useState, useCallback } from 'react';
import {
  Card,
  TextField,
  Button,
  ResourceList,
  ResourceItem,
  Text,
  Popover,
  ActionList,
  Icon,
  HorizontalStack,
} from '@shopify/polaris';
import {
  SearchMinor,
  StarFilledMinor,
  FireFilledMinor,
  GiftCardFilledMinor,
  CollectionsMajor,
  NoteMinor,
  VideoMajor,
  ImagesMajor,
  TemplateMajor,
  QuestionMarkMajor,
} from '@shopify/polaris-icons';

function SearchSection() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [popoverActive, setPopoverActive] = useState(false);

  const handleSearchChange = useCallback((value) => setQuery(value), []);
  
  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

  const handleClearButton = useCallback(() => {
    setQuery('');
    setResults([]);
  }, []);

  const handleSearch = useCallback(() => {
    // Replace with your search logic
    const searchResults = [
      { id: 1, title: 'Testme' },
      { id: 2, title: 'Product 2' },
    ].filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));

    setResults(searchResults);
  }, [query]);

  return (
    <Card sectioned>
      <HorizontalStack gap="4" blockAlign="center">
        <TextField
          prefix={<Icon source={SearchMinor} />}
          value={query}
          labelHidden
          onChange={handleSearchChange}
          clearButton
          onClearButtonClick={handleClearButton}
          placeholder="Search for sections..."
          connectedRight={<Button onClick={handleSearch}>Categories</Button>}
        />
      </HorizontalStack>

      <HorizontalStack gap="4" align="center" spacing="extraLoose" wrap>
        <IconItem icon={StarFilledMinor} label="Popular" />
        <IconItem icon={FireFilledMinor} label="Trending" />
        <IconItem icon={GiftCardFilledMinor} label="Free" />
        <IconItem icon={CollectionsMajor} label="Features" />
        <IconItem icon={NoteMinor} label="Testimonial" />
        <IconItem icon={SearchMinor} label="Scrolling" />
        <IconItem icon={VideoMajor} label="Video" />
        <IconItem icon={ImagesMajor} label="Images" />
        <IconItem icon={TemplateMajor} label="Snippet" />
        <IconItem icon={QuestionMarkMajor} label="FAQ" />
      </HorizontalStack>

      {results.length > 0 && (
        <ResourceList
          resourceName={{ singular: 'product', plural: 'products' }}
          items={results}
          renderItem={(item) => {
            const { id, title } = item;
            return (
              <ResourceItem id={id} accessibilityLabel={`View details for ${title}`}>
                <Text>{title}</Text>
              </ResourceItem>
            );
          }}
        />
      )}
    </Card>
  );
}

function IconItem({ icon, label }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <Icon source={icon} color="base" />
      <Text>{label}</Text>
    </div>
  );
}

export default SearchSection;
