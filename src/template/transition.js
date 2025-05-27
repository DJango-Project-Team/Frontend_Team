// transition.js

function navigateTo(url, boxSelector) {
  const box = document.querySelector(boxSelector);
  if (box) {
    box.classList.add("box-slide-out");
    setTimeout(() => {
      window.location.href = url;
    }, 200);
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

document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password");

  if (passwordInput) {
    passwordInput.addEventListener("focus", () => {
      if (passwordInput.value === "비밀번호") {
        passwordInput.value = "";
        passwordInput.type = "password";
      }
    });

    passwordInput.addEventListener("blur", () => {
      if (passwordInput.value === "") {
        passwordInput.type = "text";
        passwordInput.value = "비밀번호";
      }
    });
  }
});
