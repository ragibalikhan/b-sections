import React, { useState } from 'react';
import 
{Card, Collapsible, Text, Button, TextField, ColorPicker, BlockStack} from '@shopify/polaris';

const CustomizableFaqSection = ({ onSave }) => {
  const [faqs, setFaqs] = useState([{ question: '', answer: '' }]);
  const [open, setOpen] = useState(Array(1).fill(false)); // Initial state for collapsible items
  const [backgroundColor, setBackgroundColor] = useState({
    hue: 120,
    brightness: 1,
    saturation: 1,
  });
  const [textColor, setTextColor] = useState({
    hue: 0,
    brightness: 0,
    saturation: 0,
  });

  const handleAddFaq = () => {
    setFaqs([...faqs, { question: '', answer: '' }]);
    setOpen([...open, false]);
  };

  const handleRemoveFaq = (index) => {
    setFaqs(faqs.filter((_, i) => i !== index));
    setOpen(open.filter((_, i) => i !== index));
  };

  const handleToggle = (index) => {
    setOpen((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  const handleFaqChange = (index, key, value) => {
    const updatedFaqs = faqs.map((faq, i) =>
      i === index ? { ...faq, [key]: value } : faq
    );
    setFaqs(updatedFaqs);
  };

  const handleSave = () => {
    onSave({ faqs, backgroundColor, textColor });
  };

  return (
    <Card title="Customize FAQ Section" sectioned>
      <BlockStack vertical>
        {faqs.map((faq, index) => (
          <div key={index}>
            <TextField
              label="Question"
              value={faq.question}
              onChange={(value) => handleFaqChange(index, 'question', value)}
              autoComplete="off"
            />
            <TextField
              label="Answer"
              value={faq.answer}
              onChange={(value) => handleFaqChange(index, 'answer', value)}
              multiline={3}
              autoComplete="off"
            />
            <Button destructive onClick={() => handleRemoveFaq(index)}>
              Remove FAQ
            </Button>
            <Button
              plain
              onClick={() => handleToggle(index)}
              ariaExpanded={open[index]}
              ariaControls={`faq-content-${index}`}
            >
              {faq.question || 'FAQ'} 
            </Button>
            <Collapsible
              open={open[index]}
              id={`faq-content-${index}`}
              transition={{ duration: '150ms', timingFunction: 'ease' }}
            >
              <Text>
                {faq.answer}
              </Text>
            </Collapsible>
          </div>
        ))}
        <Button onClick={handleAddFaq}>Add FAQ</Button>

        <Card sectioned title="Customize Styling">
          <BlockStack vertical>
            <div>
              <Text>Background Color</Text>
              <ColorPicker onChange={setBackgroundColor} color={backgroundColor} />
            </div>
            <div>
              <Text>Text Color</Text>
              <ColorPicker onChange={setTextColor} color={textColor} />
            </div>
          </BlockStack>
        </Card>

        <Button primary onClick={handleSave}>Save FAQ Section</Button>
      </BlockStack>
    </Card>
  );
};

export default CustomizableFaqSection;
