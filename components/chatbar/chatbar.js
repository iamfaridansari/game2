document.addEventListener("DOMContentLoaded", () => {
  fetch("./components/chatbar/chatbar.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("chat-bar").innerHTML = data;
    });
});
