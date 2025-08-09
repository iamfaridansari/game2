document.addEventListener("DOMContentLoaded", () => {
  fetch("../json/roulette.json")
    .then((res) => res.json())
    .then((data) => {
      const bigWins = data.bigWins;
      const luckyWins = data.luckyWins;
      const bets = data.bets;
      bigWins.forEach((item) => {
        const el = document.createElement("div");
        el.classList.add("big-wins-body");
        el.innerHTML = `
                  <div>
                    <img src="${item.rank}" class="rank" />
                  </div>
                  <div>
                    <p>${item.name}</p>
                  </div>
                  <div>
                    <p>${item.date}</p>
                  </div>
                  <div>
                    <p class="icon-text">${item.bet} <i class="fa-solid fa-sack-dollar yellow-text"></i></p>
                  </div>
                  <div>
                    <p>${item.multiplier}x</p>
                  </div>
                  <div>
                    <p class="icon-text">${item.win} <i class="fa-solid fa-sack-dollar yellow-text"></i></p>
                  </div>
        `;
        document.getElementById("big-wins-body").appendChild(el);
      });
      //
      luckyWins.forEach((item) => {
        const el = document.createElement("div");
        el.classList.add("big-wins-body");
        el.innerHTML = `
                  <div>
                    <img src="${item.rank}" class="rank" />
                  </div>
                  <div>
                    <p>${item.name}</p>
                  </div>
                  <div>
                    <p>${item.date}</p>
                  </div>
                  <div>
                    <p class="icon-text">${item.bet}<i class="fa-solid fa-sack-dollar yellow-text"></i></p>
                  </div>
                  <div>
                    <p>${item.multiplier}x</p>
                  </div>
                  <div>
                    <p class="icon-text">${item.win}<i class="fa-solid fa-sack-dollar yellow-text"></i></p>
                  </div>
        `;
        document.getElementById("lucky-wins-body").appendChild(el);
      });
      //
      const blackjackOriginalButtons = document.querySelectorAll(
        ".blackjack-original-tab .button"
      );
      const blackjackSection = document.querySelectorAll(
        ".blackjack-original-section"
      );
      blackjackOriginalButtons.forEach((item) => {
        item.addEventListener("click", (e) => {
          const currentTab = item.getAttribute("data-blackjack-tab");
          blackjackOriginalButtons.forEach((btn) => {
            btn.classList.remove("yellow-button");
          });
          blackjackSection.forEach((item) => {
            const itemID = item.id;
            item.classList.add("d-none");
            if (itemID === currentTab) {
              item.classList.remove("d-none");
            }
          });
          e.target.classList.add("yellow-button");
        });
      });
      //
      const betsTab = document.querySelectorAll(".bets-tab .button");
      betsTab.forEach((item) => {
        item.addEventListener("click", (e) => {
          betsTab.forEach((btn) => btn.classList.remove("yellow-button"));
          e.target.classList.add("yellow-button");

          if (e.target.textContent.trim() === "All bets") {
            renderBets(bets);
          } else if (e.target.textContent.trim() === "High rollers") {
            renderBets(highBets);
          }
        });
      });
      //

      const highBets = bets.filter((item) => {
        return item.win >= 1000;
      });
      function renderBets(betsArray) {
        const container = document.getElementById("bets-body");
        container.innerHTML = "";

        betsArray.forEach((item) => {
          const el = document.createElement("div");
          el.classList.add("bets-body");
          el.innerHTML = `
      <div><p>${item.game}</p></div>
      <div><p>${item.player}</p></div>
      <div><p>${item.time}</p></div>
      <div><p class="icon-text">${item.bet}<i class="fa-solid fa-sack-dollar yellow-text"></i></p></div>
      <div><p>${item.multiplier}x</p></div>
      <div><p class="icon-text">${item.win}<i class="fa-solid fa-sack-dollar yellow-text"></i></p></div>
    `;
          container.appendChild(el);
        });
      }
      renderBets(bets);
    });
});
