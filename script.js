function firstNonRepeatingCharacter(inputString) {
  const charFrequencies = {};

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    charFrequencies[char] = (charFrequencies[char] || 0) + 1;
  }

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    if (charFrequencies[char] === 1) {
      return char;
    }
  }

  return null;
}

// Prompt the user for input and call the function
const inputString = prompt("Enter a string:");
const result = firstNonRepeatingCharacter(inputString);

// Display the result using alert
alert(result);
