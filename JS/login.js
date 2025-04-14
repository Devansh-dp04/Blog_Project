

// Auto-redirect if already logged in
if (window.location.pathname.includes("login.html") && localStorage.getItem("isLoggedIn") === "true") {
  window.location.href = "dashboard.html";
}

// Login logic
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (!loginForm) return;

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const messageEl = document.getElementById("message");

    const users = JSON.parse(localStorage.getItem("usersData")) || [];

    const matchedUser = users.find(
      user => user.email === email && user.password === password
    );
    
    if (matchedUser) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
      window.location.href = "dashboard.html";
    } else {
      messageEl.style.color = "red";
      messageEl.textContent = "Invalid email or password.";
    }
  });
});
