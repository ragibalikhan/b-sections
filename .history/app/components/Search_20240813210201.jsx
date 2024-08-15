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
} from '@shopify/polaris';
import {
  SearchIcon,
  StarFilledIcon,
  FileFilledIcon,
  GiftCardIcon,
  CollectionListIcon,
   NoteIcon,
  PlayCircleIcon,
  ImageIcon,
  ThemeTemplateIcon,
  QuestionCircleIcon,
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
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <TextField
          prefix={<Icon source={SearchIcon} />}
          value={query}
          labelHidden
          onChange={handleSearchChange}
          clearButton
          onClearButtonClick={handleClearButton}
          placeholder="Search for sections..."
          connectedRight={<Button onClick={handleSearch}>Categories</Button>}
        />
      </div>

      <div style={{ display: 'flex', gap: '24px', justifyContent: 'space-around', marginTop: '16px', flexWrap: 'wrap' }}>
        <IconItem icon={StarFilledIcon} label="Popular" />
        <IconItem icon={FileFilledIcon} label="Trending" />
        <IconItem icon={GiftCardIcon} label="Free" />
        <IconItem icon={CollectionListIcon} label="Features" />
        <IconItem icon={ NoteIcon} label="Testimonial" />
        <IconItem icon={SearchIcon} label="Scrolling" />
        <IconItem icon={PlayCircleIcon} label="Video" />
        <IconItem icon={ImageIcon} label="Images" />
        <IconItem icon={ThemeTemplateIcon} label="Snippet" />
        <IconItem icon={  QuestionCircleIcon} label="FAQ" />
      </div>

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
