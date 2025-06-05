function greetUser() {
  const nameInput = document.getElementById("username");
  const name = nameInput.value;

  if (name.trim() === "") {
    alert("Please enter a name.");
    return;
  }

  localStorage.setItem("username", name);
  alert(`Hello ${name}, welcome back! 🎉`);
}

// Auto-greet when the page loads
window.onload = function () {
  const savedName = localStorage.getItem("username");
  if (savedName) {
    document.body.innerHTML = `<h2>Welcome back, ${savedName}! 👋</h2>`;
  }
};
