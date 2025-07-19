document.addEventListener("DOMContentLoaded", () => {
  fetch("./components/appbar.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("app-bar-section").innerHTML = data;

      const menu = document.querySelectorAll(".menu-btn");
      const appBarDiv = document.getElementById("app-bar");

      menu.forEach((btn) => {
        btn.addEventListener("click", () => {
          appBarDiv.classList.toggle("active");
          if (window.innerWidth <= 576) {
            document.getElementById("chat-bar-div").classList.remove("active");
            document
              .querySelector(".chat-bar-button i")
              .classList.remove("fa-times");
            document
              .querySelector(".chat-bar-button i")
              .classList.add("fa-message");
          }

          //
          const winnerStageAB = document.getElementById("winner-stage");
          const winnersAB = winnerStageAB.querySelectorAll(
            ".winner-card-wrapper"
          );
          winnersAB.forEach((winner, index) => {
            winnerStageAB.style.flexDirection = "unset";
            if (index === 0) {
              winner.classList.toggle("order-2");
            } else if (index === 1) {
              winner.classList.toggle("order-1");
            } else if (index === 2) {
              winner.classList.toggle("order-3");
            }
          });
        });
      });

      //
      const rewards = document.getElementById("rewards");
      rewards.addEventListener("click", () => {
        rewards.classList.toggle("hide");
      });
    });
});
