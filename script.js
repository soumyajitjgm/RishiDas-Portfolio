const words = ["MLOps Engineer...", "ML Engineer...", "Data Scientist...", "Backend Developer..."];
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 100; // default typing speed in ms

const typingText = document.getElementById("typing-text");

function typeEffect() {
  const currentWord = words[currentWordIndex];

  if (isDeleting) {
    currentCharIndex--;
    typingSpeed = 50; // faster when deleting
  } else {
    currentCharIndex++;
    typingSpeed = (Math.random() * 40) + 80; // random typing speed
  }

  typingText.textContent = currentWord.substring(0, currentCharIndex);

  if (!isDeleting && currentCharIndex === currentWord.length) {
    typingSpeed = 1500; // pause at end of word
    isDeleting = true;
  } else if (isDeleting && currentCharIndex === 0) {
    isDeleting = false;
    currentWordIndex = (currentWordIndex + 1) % words.length;
    typingSpeed = 500; // pause before next word
  }

  setTimeout(typeEffect, typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);
