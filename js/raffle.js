document.addEventListener("DOMContentLoaded", () => {
  fetch("../json/raffle.json")
    .then((res) => res.json())
    .then((data) => {
      const activeRaffles = data.filter((item) => item.active);
      activeRaffles.forEach((item) => {
        const el = document.createElement("div");
        el.classList.add("raffle-card", "glass", "p-2");
        el.innerHTML = `
        <div class="timer glass p-1">
              <p>${item.days}D ${item.hours}H ${item.minutes}M ${item.seconds}S</p>
            </div>
            <div class="raffle-card-img">
              <img src="${item.image}" alt="" />
            </div>
            <p class="text-clamp">${item.title}</p>

            <div class="d-flex align-items-center justify-content-start gap-2">
              <p class="text-secondary text-clamp">Entries:</p>
              <p class="text-clamp">${item.entries}</p>
            </div>
            <button class="button yellow-button w-100">Join for $${item.price}</button>
        `;
        document.getElementById("active-raffle-grid").appendChild(el);
      });
      //
      const finishedRaffles = data.filter((item) => !item.active);
      finishedRaffles.forEach((item) => {
        const el = document.createElement("div");
        el.classList.add("raffle-card", "finished-raffle-card", "glass", "p-2");
        el.innerHTML = `
        <div class="timer glass p-1">
              <p>Finished</p>
            </div>
            <div class="raffle-card-img">
              <img src="${item.image}" alt="" />
            </div>
            <p class="text-clamp">${item.title}</p>

            <div class="d-flex align-items-center justify-content-start gap-2">
              <p class="text-secondary text-clamp">Entries:</p>
              <p class="text-clamp">${item.entries}</p>
            </div>
            <button class="button yellow-button w-100">View details</button>
        `;
        document.getElementById("finished-raffle-grid").appendChild(el);
      });
      //
      document.getElementById(
        "raffle-count"
      ).innerHTML = `${activeRaffles.length} total`;
      document.getElementById(
        "active-raffle-count"
      ).innerHTML = `${activeRaffles.length} total`;
      document.getElementById(
        "finished-raffle-count"
      ).innerHTML = `${finishedRaffles.length} total`;
    });
});
