document.addEventListener("DOMContentLoaded", () => {
  fetch("../json/blackjack.json")
    .then((res) => res.json())
    .then((data) => {
      const bigWins = data.bigWins;
      const luckyWins = data.luckyWins;
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
                    <p>${item.bet}</p>
                  </div>
                  <div>
                    <p>${item.multiplier}x</p>
                  </div>
                  <div>
                    <p>${item.win}</p>
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
                    <p>${item.bet}</p>
                  </div>
                  <div>
                    <p>${item.multiplier}x</p>
                  </div>
                  <div>
                    <p>${item.win}</p>
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
    });
});
