// CustomizableFaqSection.js
import { useState } from "react";
import { TextField, Button, Card, BlockStack } from "@shopify/polaris";

export default function CustomizableFaqSection({ onSave }) {
  const [questions, setQuestions] = useState([
    { question: "", answer: "" },
  ]);

  const handleQuestionChange = (value, index, field) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: "", answer: "" }]);
  };

  const handleSave = () => {
    onSave(questions); // Pass the customized data to the parent component
  };

  return (
    <Card sectioned>
      <BlockStack vertical>
        {questions.map((q, index) => (
          <BlockStack key={index}>
            <TextField
              label="Question"
              value={q.question}
              onChange={(value) => handleQuestionChange(value, index, "question")}
            />
            <TextField
              label="Answer"
              value={q.answer}
              onChange={(value) => handleQuestionChange(value, index, "answer")}
            />
          </BlockStack>
        ))}
        <Button onClick={handleAddQuestion}>Add Another Question</Button>
        <Button primary onClick={handleSave}>
          Save Section
        </Button>
      </BlockStack>
    </Card>
  );
}
