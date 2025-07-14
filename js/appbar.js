document.addEventListener("DOMContentLoaded", () => {
  fetch("./components/appbar.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("app-bar").innerHTML = data;
    });
});
