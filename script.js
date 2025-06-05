function sendMessage() {
  const input = document.getElementById("message-input");
  const message = input.value.trim();
  if (!message) return;

  // Display user's message
  addMessage(message, "user");

  // Save to local storage
  let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
  messages.push({ text: message, type: "user" });
  localStorage.setItem("chatMessages", JSON.stringify(messages));

  input.value = "";
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
