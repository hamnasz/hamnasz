const messages = [
  "Assalam o Alaikum, I'm Humna Imran! 👋",
  "السلام علیکم، میں حمنہ عمران ہوں! 👋",
  "こんにちは、私はフムナ・イムランです！👋",
  "नमस्ते, मैं हुमना इमरान हूँ! 👋"
];

let messageIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const span = document.getElementById("greeting");
  let currentText = messages[messageIndex];
  let displayText = currentText.substring(0, charIndex);

  span.innerHTML = displayText;

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      messageIndex = (messageIndex + 1) % messages.length;
    }
    setTimeout(typeEffect, 1000);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
