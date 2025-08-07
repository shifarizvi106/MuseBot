// script.js
const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");

let conversationHistory = [];

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  appendMessage("user", message);
  userInput.value = "";

  // First check for known keywords in poems.js
  const response = getPoeticResponse(message.toLowerCase()) || getGPTStyleResponse(message);
  simulateTyping(response, "bot");
  conversationHistory.push({ user: message, bot: response });
}

function appendMessage(sender, text) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add(sender);
  messageDiv.textContent = text;
  chatbox.appendChild(messageDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function simulateTyping(text, sender) {
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      const current = document.querySelector(`.${sender}:last-child`);
      if (current) current.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, 40);
  const messageDiv = document.createElement("div");
  messageDiv.classList.add(sender);
  messageDiv.textContent = ""; // Start blank for animation
  chatbox.appendChild(messageDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function downloadConversation() {
  let content = "";
  conversationHistory.forEach((entry, idx) => {
    content += `You: ${entry.user}\nMuseBot: ${entry.bot}\n\n`;
  });

  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "MuseBot_Conversation.txt";
  link.click();
}

function startVoiceInput() {
  if (!('webkitSpeechRecognition' in window)) {
    alert("Voice recognition not supported in this browser.");
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = function (event) {
    const voiceText = event.results[0][0].transcript;
    userInput.value = voiceText;
    sendMessage();
  };

  recognition.start();
}
