document.addEventListener("DOMContentLoaded", () => {
  const homePromotionCarousel = document.getElementById(
    "home-promotion-carousel"
  );
  const liveWinsCarousel = document.getElementById("live-wins-carousel");
  const goldenGrid = document.getElementById("golden-grid");
  const originalsCarousel = document.getElementById("originals-carousel");
  const latestContestCarousel = document.getElementById(
    "latest-contest-carousel"
  );

  //
  homePromotionCarousel.innerHTML = "";
  liveWinsCarousel.innerHTML = "";
  goldenGrid.innerHTML = "";
  originalsCarousel.innerHTML = "";
  latestContestCarousel.innerHTML = "";
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
              <p class="text-clamp">${item.name}</p>
              <p class="yellow-text dollar-para">
                <i class="fa-solid fa-sack-dollar"></i>${item.price}
              </p>
        `;
        liveWinsCarousel.appendChild(el);
      });

      //
      const goldenGridData = data.golden_grid;
      goldenGridData.forEach((item) => {
        const el = document.createElement("a");
        el.href = item.link;
        el.innerHTML = `
        <video src="../images/golden-grid-video.webm" muted playsinline></video>
            <div class="golden-title glass">
              <p>${item.title}</p>
            </div>
        `;
        goldenGrid.appendChild(el);
      });

      //
      document.querySelectorAll(".golden-grid a").forEach((item) => {
        item.addEventListener("mouseenter", (e) => {
          const currentTarget = e.currentTarget;
          const video = currentTarget.querySelector("video");
          video.play();
        });
      });

      //
      const originalsData = data.originals;
      originalsData.forEach((item) => {
        const el = document.createElement("a");
        el.href = item.link;
        el.classList.add("originals-item");
        el.setAttribute("data-aos", "fade-right");
        el.setAttribute("data-aos-duration", "2000");
        el.style.border = `2px solid ${item.color}`;
        el.innerHTML = `
        <img src="${item.image}" alt="" />
        `;
        originalsCarousel.appendChild(el);
      });

      //
      const latestContestData = data.latest_contest;
      latestContestData.forEach((item) => {
        const el = document.createElement("a");
        el.href = item.link;
        el.classList.add("latest-contest-item");
        el.setAttribute("data-aos", "fade-right");
        el.setAttribute("data-aos-duration", "2000");
        el.innerHTML = `
          <img src="${item.image}" alt="" />
                <p class="fw-bold">${item.title}</p>
                <p class="text-secondary">${item.date}</p>
        `;
        latestContestCarousel.appendChild(el);
      });

      //
      fetch("../components/homeAccordion.html")
        .then((res) => res.text())
        .then((data) => {
          document.getElementById("home-accordion").innerHTML = data;

          document.querySelectorAll(".home-accordion-head").forEach((item) => {
            item.addEventListener("click", (e) => {
              document.querySelectorAll(".home-accordion-wrapper");

              const currentWrapper = e.currentTarget.parentElement;
              const body = currentWrapper.querySelector(".home-accordion-body");

              if (currentWrapper.classList.contains("active")) {
                currentWrapper.classList.remove("active");
                body.style.maxHeight = null;
              } else {
                currentWrapper.classList.add("active");
                body.style.maxHeight = body.scrollHeight + "px";
              }
            });
          });
        });
    })
    .catch((err) => {
      console.error("Failed to load carousel data:", err);
    });
});
