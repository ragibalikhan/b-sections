import React, { useState, useCallback } from 'react';
import { Card, TextField, Button, ResourceList, ResourceItem, Text, ChoiceList, Select } from '@shopify/polaris';

function SearchSection() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearchChange = useCallback((value) => setQuery(value), []);
  const [selected, setSelected] = useState('today');

  const handleSelectChange = useCallback(
    (value) => setSelected(value),
    [],
  );

  const options = [
    {label: 'Today', value: 'today'},
    {label: 'Yesterday', value: 'yesterday'},
    {label: 'Last 7 days', value: 'lastWeek'},
  ];

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
        onChange={handleSearchChange}
        clearButton
        onClearButtonClick={handleClearButton}
        connectedRight={<Button onClick={handleSearch}>Search</Button>}
        placeholder="Search for products..."
        connectedLeft={
            <Select
      label="Date range"
      options={options}
      onChange={handleSelectChange}
      value={selected}
    />
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
