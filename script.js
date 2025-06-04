function greetUser() {
  const name = document.getElementById("username").value;

  if (name.trim() === "") {
    alert("Hey! Type something before clicking 😅");
  } else {
    alert(`Hello ${name}! How's your day 🧙‍♂️⚡`);
  }
}
