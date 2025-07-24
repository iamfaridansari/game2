document.addEventListener("DOMContentLoaded", () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        const el = document.createElement("div");
        el.classList.add("store-card", "glass");
        el.innerHTML = `
            <div class="p-2">
              <img src="${item.image}" alt="" />
            </div>
            <div class="glass p-2">
              <p>${item.title}</p>
              <p class="text-secondary">${item.description}</p>
              <div
                class="d-flex align-items-center justify-content-between mt-2"
              >
                <p class="icon-text">
                  <i class="fa-solid fa-dollar-sign yellow-text"></i>
                  ${item.price}
                </p>
                <button class="button yellow-button px-3 py-1">Buy</button>
              </div>
            </div>
            `;
        document.getElementById("store-grid").appendChild(el);
      });
    });
});
