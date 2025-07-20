document.addEventListener("DOMContentLoaded", () => {
  fetch("../json/bonus.json")
    .then((res) => res.json())
    .then((data) => {
      //
      data.slice(0, 3).forEach((item) => {
        const el = document.createElement("div");
        el.classList.add("top-bonus-card", "glass");
        el.style.border = `1px solid var(--${item.color})`;
        el.innerHTML = `
        <img src="${item.image}" alt="" />
            <div>
              <h2 class="${item.color}-text">${item.title}</h2>
              <p>${item.subtitle}</p>
            </div>
            <div
              class="d-flex flex-wrap align-items-center justify-content-center gap-2"
            >
              <button class="button glass icon-button">
                code: 7noir <i class="fa-solid fa-copy"></i>
              </button>
              <button class="button ${item.color}-button">claim now</button>
            </div>
        `;
        document.getElementById("top-bonus").appendChild(el);
      });
    });
});
