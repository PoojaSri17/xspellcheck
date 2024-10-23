import React, { useState } from "react";

// Custom dictionary for spell-checking
const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

const XSpellCheck = () => {
  // State to store the user's input and the current suggestion
  const [inputText, setInputText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  // Function to handle input changes and update the suggestion
  const handleInputChange = (event) => {
    const userInput = event.target.value;
    setInputText(userInput);
    checkSpelling(userInput);
  };

  // Function to check for spelling mistakes based on custom dictionary
  const checkSpelling = (text) => {
    // Convert input to lowercase and split it into words
    const words = text.toLowerCase().split(" ");

    // Find the first misspelled word in the input
    for (let word of words) {
      if (customDictionary[word]) {
        // If the word is found in the dictionary, show the correction suggestion
        setSuggestion(`Did you mean: ${customDictionary[word]}?`);
        return; // Stop checking after the first misspelled word
      }
    }

    // If no misspelled word is found, clear the suggestion
    setSuggestion("");
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1>XSpellCheck</h1>

      {/* Textarea for user input */}
      <textarea
        rows="4"
        cols="50"
        placeholder="Type something..."
        value={inputText}
        onChange={handleInputChange}
        style={{ padding: "10px", fontSize: "16px", width: "100%" }}
      />

      {/* Suggestion section */}
      {suggestion && (
        <div style={{ marginTop: "10px", color: "red", fontWeight: "bold" }}>
          {suggestion}
        </div>
      )}
    </div>
  );
};

export default XSpellCheck;
