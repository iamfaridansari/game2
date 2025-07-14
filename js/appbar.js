document.addEventListener("DOMContentLoaded", () => {
  fetch("./components/appbar.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("app-bar").innerHTML = data;

      const menu = document.querySelectorAll(".menu-btn");
      const appBarDiv = document.getElementById("app-bar-div");

      menu.forEach((btn) => {
        btn.addEventListener("click", () => {
          appBarDiv.classList.toggle("active");
        });
      });
    });
});
