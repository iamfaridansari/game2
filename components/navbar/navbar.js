document.addEventListener("DOMContentLoaded", () => {
  fetch("./components/navbar/navbar.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;

      //
      const registerOpen = document.getElementById("register-open");
      const registerClose = document.getElementById("register-close");
      if (registerOpen && registerClose) {
        registerOpen.addEventListener("click", () => {
          document
            .getElementById("register-modal-wrapper")
            .classList.add("active");
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
    });
});
