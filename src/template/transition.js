// transition.js

function navigateTo(url, boxSelector) {
  const box = document.querySelector(boxSelector);
  if (box) {
    box.classList.add("box-slide-out");
    setTimeout(() => {
      window.location.href = url;
    }, 600);
  } else {
    window.location.href = url;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const box =
    document.querySelector(".signup-box") ||
    document.querySelector(".login-box");
  if (box) {
    box.classList.add("box-slide-in");
  }

  const toLogin = document.getElementById("to-login");
  if (toLogin) {
    toLogin.addEventListener("click", () => {
      navigateTo("login.html", ".signup-box");
    });
  }

  const toSignup = document.getElementById("to-signup");
  if (toSignup) {
    toSignup.addEventListener("click", () => {
      navigateTo("signup.html", ".login-box");
    });
  }
});
