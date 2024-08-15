import React, { useState, useCallback } from 'react';
import { Card, TextField, Button, ResourceList, ResourceItem, Text } from '@shopify/polaris';

function SearchSection() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearchChange = useCallback((value) => setQuery(value), []);

  const handleClearButton = useCallback(() => {
    setQuery('');
    setResults([]);
  }, []);

  const handleSearch = useCallback(() => {
    // Replace with your search logic
    const searchResults = [
      { id: 1, title: 'Product 1' },
      { id: 2, title: 'Product 2' },
    ].filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));

    setResults(searchResults);
  }, [query]);

  return (
    <Card sectioned>
      <TextField
        label="Search"
        value={query}
        onChange={handleSearchChange}
        clearButton
        onClearButtonClick={handleClearButton}
        connectedRight={<Button onClick={handleSearch}>Search</Button>}
        placeholder="Search for products..."
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
