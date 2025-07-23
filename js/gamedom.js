document.addEventListener("DOMContentLoaded", () => {
  fetch("../json/gamedom.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        const el = document.createElement("div");
        el.classList.add("gamedom-parallel-flex", "my-5");
        el.innerHTML = `
            <div>
            <h3>${item.title}</h3>
            <h2 class="green-text">${item.subtitle}</h2>
            <p class="text-secondary">
            ${item.description}
            </p>
            </div>
            <div>
            <img src="${item.image}" alt="" />
            </div>
            `;
        document.getElementById("gamedom-parallel-wrapper").appendChild(el);
      });
    });
});
