function sendMessage() {
  const input = document.getElementById("message-input");
  const message = input.value.trim();
  if (!message) return;

  addMessage(message, "user");

  let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
  messages.push({ text: message, type: "user" });
  localStorage.setItem("chatMessages", JSON.stringify(messages));

  input.value = "";

  // Fake GPT response
  showThinking();
  setTimeout(() => {
    removeThinking();

    const reply = generateFakeReply(message);
    addMessage(reply, "gpt");

    messages.push({ text: reply, type: "gpt" });
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, 1000);
}
function showThinking() {
  const chatBox = document.getElementById("chat-box");
  const thinking = document.createElement("div");
  thinking.id = "thinking";
  thinking.classList.add("message", "gpt");
  thinking.textContent = "Thinking...";
  chatBox.appendChild(thinking);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function removeThinking() {
  const thinking = document.getElementById("thinking");
  if (thinking) thinking.remove();
}

function generateFakeReply(input) {
  // Simple hardcoded mock GPT
  const responses = [
    "That's interesting!",
    "Can you tell me more?",
    "I'm not sure I understand — could you rephrase?",
    "Absolutely! Let me explain...",
    `You said: "${input}" — cool!`,
    "Wow, I hadn't thought about it like that."
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}


// Render a message on screen
function addMessage(text, type) {
  const chatBox = document.getElementById("chat-box");
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", type);
  msgDiv.textContent = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Load previous messages on page load
window.onload = () => {
  const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
  messages.forEach((msg) => addMessage(msg.text, msg.type));
};
