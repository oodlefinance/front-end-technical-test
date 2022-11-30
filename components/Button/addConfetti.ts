const emojis = ["🌈", "⚡️", "💥", "✨", "🎉", "🌸", "🦄"];

const createConfetti = () => {
  const confetti = document.createElement("span");

  confetti.style.position = "absolute";
  confetti.style.top = `${Math.random() * (window.innerHeight - 80) + 20}px`;
  confetti.style.left = `${Math.random() * (window.innerWidth - 80) + 20}px`;
  confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  document.body.appendChild(confetti);

  const animation = confetti.animate([{ opacity: 0 }], {
    duration: 1000,
    iterations: 1,
  });

  animation.addEventListener("finish", () => {
    document.body.removeChild(confetti);
  });
};

const addConfetti = () => {
  for (let i = 0; i < 20; i++) {
    createConfetti();
  }
};

export default addConfetti;
