document.addEventListener("DOMContentLoaded", () => {
  let totalSeconds = 90 * 24 * 60 * 60 + 21 * 60 * 60 + 53 * 60 + 18;

  const daysEl = document.getElementById("leaderboard-days");
  const hoursEl = document.getElementById("leaderboard-hours");
  const minutesEl = document.getElementById("leaderboard-minutes");
  const secondsEl = document.getElementById("leaderboard-seconds");

  function updateTimer() {
    if (totalSeconds < 0) return;

    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    daysEl.textContent = days.toString().padStart(2, "0");
    hoursEl.textContent = hours.toString().padStart(2, "0");
    minutesEl.textContent = minutes.toString().padStart(2, "0");
    secondsEl.textContent = seconds.toString().padStart(2, "0");

    totalSeconds--;
  }

  updateTimer();
  setInterval(updateTimer, 1000);

  //
  fetch("../json/leaderboard.json")
    .then((res) => res.json())
    .then((data) => {
      const winners = data.slice(0, 3);
      const winnerStage = document.getElementById("winner-stage");
      winnerStage.innerHTML = "";

      winners.forEach((winner, index) => {
        const el = document.createElement("div");
        el.classList.add("winner-card-wrapper");
        if (winnerStage.clientWidth >= 500) {
          if (index === 0) {
            el.classList.add("order-2");
          } else if (index === 1) {
            el.classList.add("order-1");
            el.style.transform = `translateY(40px)`;
          } else if (index === 2) {
            el.classList.add("order-3");
            el.style.transform = `translateY(40px)`;
          }
        }

        el.innerHTML = `
        <div class="winner-card">
              <i class="fa-solid fa-trophy"></i>
              <img src="${winner.image}" alt="" />
              <h3>${winner.name}</h3>
              <div class="my-2">
                <p class="text-secondary">Ticket No</p>
                <p>${winner.ticket}</p>
              </div>
              <div class="my-2">
                <p class="text-secondary">Reward</p>
                <h3>$${winner.reward}</h3>
              </div>
            </div>
        `;
        winnerStage.appendChild(el);
      });

      //
      window.addEventListener("resize", () => {
        const winnerStage = document.getElementById("winner-stage");
        const winners = winnerStage.querySelectorAll(".winner-card-wrapper");
        if (winnerStage.clientWidth <= 500) {
          winnerStage.style.flexDirection = "column";
          winners.forEach((winner, index) => {
            if (index === 0) {
              winner.classList.remove("order-2");
            } else if (index === 1) {
              winner.classList.remove("order-1");
              winner.style.transform = `translateY(0)`;
            } else if (index === 2) {
              winner.classList.remove("order-3");
              winner.style.transform = `translateY(0)`;
            }
          });
        } else {
          winners.forEach((winner, index) => {
            winnerStage.style.flexDirection = "unset";
            if (index === 0) {
              winner.classList.add("order-2");
            } else if (index === 1) {
              winner.classList.add("order-1");
              winner.style.transform = `translateY(40px)`;
            } else if (index === 2) {
              winner.classList.add("order-3");
              winner.style.transform = `translateY(40px)`;
            }
          });
        }
      });
    });
});
