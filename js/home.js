document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("home-promotion-carousel");

  fetch("..//json/home.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        const el = document.createElement("a");
        el.href = item.link;
        el.innerHTML = `
          <img src="${item.image}" alt="${item.title}" />
          <p>${item.title}</p>
        `;
        container.appendChild(el);
      });
    })
    .catch((err) => {
      console.error("Failed to load carousel data:", err);
    });
});
