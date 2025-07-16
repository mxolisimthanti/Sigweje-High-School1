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
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  // Dummy check (replace with real server logic)
  if (username === "student123" && password === "sigweje2025") {
    document.getElementById("login-message").textContent = "Login successful!";
  } else {
    document.getElementById("login-message").textContent = "Invalid login details.";
  }
});
const events = [
  { date: "2025-08-01", name: "First Term Exams Begin" },
  { date: "2025-09-12", name: "Sports Day" },
  { date: "2025-10-05", name: "Grade 12 Farewell" }
];

const eventList = document.getElementById("event-list");
events.forEach(event => {
  const item = document.createElement("li");
  item.textContent = `${event.date} – ${event.name}`;
  eventList.appendChild(item);
});
