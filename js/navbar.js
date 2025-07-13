document.addEventListener("DOMContentLoaded", () => {
  fetch("./components/navbar.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;

      //
      const registerOpen = document.querySelectorAll(".register-open");
      const registerClose = document.getElementById("register-close");
      if (registerOpen && registerClose) {
        registerOpen.forEach((item) => {
          item.addEventListener("click", (e) => {
            document
              .getElementById("register-modal-wrapper")
              .classList.add("active");
            registerTabButton.forEach((btn) => {
              btn.classList.remove("active");

              if (
                btn.textContent.toLowerCase() ===
                e.currentTarget.getAttribute("data-modal-target").toLowerCase()
              ) {
                btn.classList.add("active");
              }
            });
            if (
              e.currentTarget
                .getAttribute("data-modal-target")
                .toLowerCase() === "register"
            ) {
              signup.classList.replace("d-none", "d-flex");
              login.classList.add("d-none");
              login.classList.remove("d-flex");
              registerModal.style.height = "600px";
            } else {
              login.classList.replace("d-none", "d-flex");
              signup.classList.add("d-none");
              signup.classList.remove("d-flex");
              registerModal.style.height = "450px";
            }
          });
        });

        registerClose.addEventListener("click", () => {
          document
            .getElementById("register-modal-wrapper")
            .classList.remove("active");
        });
      }

      //
      const registerModal = document.getElementById("register-modal");
      const signup = document.getElementById("signup");
      const login = document.getElementById("login");
      const registerTabButton = document.querySelectorAll(
        ".register-tab-button"
      );
      registerTabButton.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          registerTabButton.forEach((button) => {
            button.classList.remove("active");
          });
          e.target.classList.add("active");
          if (e.target.textContent.toLowerCase() === "register") {
            signup.classList.replace("d-none", "d-flex");
            login.classList.add("d-none");
            login.classList.remove("d-flex");
            registerModal.style.height = "600px";
          } else if (e.target.textContent.toLowerCase() === "login") {
            login.classList.replace("d-none", "d-flex");
            signup.classList.add("d-none");
            signup.classList.remove("d-flex");
            registerModal.style.height = "450px";
          }
        });
      });

      //
      const passwordInput = document.querySelectorAll(".password-input");
      const showPassword = document.querySelectorAll(".show-password");
      showPassword.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const targetInput = e.currentTarget.getAttribute("data-input-target");
          passwordInput.forEach((item) => {
            if (
              item.getAttribute("data-input").toLowerCase() ===
              targetInput.toLowerCase()
            ) {
              item.toggleAttribute(
                (item.type = item.type === "password" ? "text" : "password")
              );
            }
          });
        });
      });
    });
});
