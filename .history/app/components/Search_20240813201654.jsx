import React, { useState, useCallback } from 'react';
import { Card, TextField, Button, ResourceList, ResourceItem, Text, Popover, ActionList } from '@shopify/polaris';

function SearchSection() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearchChange = useCallback((value) => setQuery(value), []);
  const [popoverActive, setPopoverActive] = useState(true);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
      More actions
    </Button>
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
      <TextField
        label="Search"
        value={query}
        labelHidden
        onChange={handleSearchChange}
        clearButton
        onClearButtonClick={handleClearButton}
        connectedRight={<Button onClick={handleSearch}>Search</Button>}
        placeholder="Search for products..."
        connectedLeft={
            <Popover
        active={popoverActive}
        activator={activator}
        autofocusTarget="first-node"
        onClose={togglePopoverActive}
      >
        <ActionList
          actionRole="menuitem"
          items={[{content: 'Import'}, {content: 'Export'}]}
        />
      </Popover>
        }
      />

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

export default SearchSection;
