const textArray = [
    "I am a Gamer",
    "I am a Web3 Enthusiast",
    "I am a Content Creator",
    "I am a Web Developer"
  ];
  
  let textIndex = 0;
  let charIndex = 0;
  let currentText = '';
  let typingSpeed = 100; // Speed of typing in milliseconds
  
  const typingEffectElement = document.getElementById('typing-effect');
  
  // Function to type the text one character at a time
  function typeText() {
    if (charIndex < textArray[textIndex].length) {
      currentText += textArray[textIndex].charAt(charIndex);
      typingEffectElement.textContent = currentText;
      charIndex++;
      setTimeout(typeText, typingSpeed);
    } else {
      // When the current text is typed, wait for a short period and then delete
      setTimeout(deleteText, 1000);
    }
  }
  
  // Function to delete the text one character at a time
  function deleteText() {
    if (charIndex > 0) {
      currentText = currentText.slice(0, -1);
      typingEffectElement.textContent = currentText;
      charIndex--;
      setTimeout(deleteText, typingSpeed);
    } else {
      // Move to the next sentence when finished deleting
      textIndex++;
      if (textIndex >= textArray.length) textIndex = 0;
      setTimeout(typeText, 500); // Start typing the next sentence after a brief pause
    }
  }
  
  // Start typing the first text
  typeText();
  