document.addEventListener("DOMContentLoaded", () => {
  const homePromotionCarousel = document.getElementById(
    "home-promotion-carousel"
  );
  const liveWinsCarousel = document.getElementById("live-wins-carousel");

  //
  homePromotionCarousel.innerHTML = "";
  liveWinsCarousel.innerHTML = "";
  //

  fetch("../json/home.json")
    .then((res) => res.json())
    .then((data) => {
      const homePromotioncarouselData = data.home_promotion_carousel;
      homePromotioncarouselData.forEach((item) => {
        const el = document.createElement("a");
        el.href = item.link;
        el.innerHTML = `
          <img src="${item.image}" alt="${item.title}" />
          <p>${item.title}</p>
        `;
        homePromotionCarousel.appendChild(el);
      });

      //
      const liveWinsData = data.live_wins;
      liveWinsData.forEach((item) => {
        const el = document.createElement("div");
        el.classList.add("live-wins-carousel-item");
        el.innerHTML = `
          <img src=${item.image} alt="" />
              <p>${item.name}</p>
              <p class="yellow-text">
                <i class="fa-solid fa-sack-dollar"></i>${item.price}
              </p>
        `;
        liveWinsCarousel.appendChild(el);
      });
    })
    .catch((err) => {
      console.error("Failed to load carousel data:", err);
    });
});
