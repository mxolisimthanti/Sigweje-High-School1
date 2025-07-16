function showGreeting() {
  const now = new Date();
  const hour = now.getHours();
  let message = "Hello!";

  if (hour < 12) {
    message = "Good morning!";
  } else if (hour < 18) {
    message = "Good afternoon!";
  } else {
    message = "Good evening!";
  }

  document.getElementById("greeting").textContent = message;
}
