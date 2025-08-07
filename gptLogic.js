// gptLogic.js

function getFallbackResponse(userInput) {
  const responses = [
    "That thought blooms uniquely—could you tell me more?",
    "Every word you speak adds to the rhythm of this moment.",
    "I may not have a poem for that, but your voice is verse enough.",
    "Let me ponder that in silence... or perhaps you already said it best.",
    "There is meaning in your message—I feel it echo."
  ];

  return responses[Math.floor(Math.random() * responses.length)];
}
