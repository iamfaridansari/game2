document.addEventListener("DOMContentLoaded", () => {
  fetch("../json/promotions.json")
    .then((res) => res.json())
    .then((data) => {
      const tabs = data.tabs;

      tabs.forEach((item) => {
        const tab = document.createElement("li");
        tab.classList.add("icon-text");
        tab.innerHTML = `
            <i class="fa-solid ${item.icon}"></i>
            ${item.title}
        `;
        document.getElementById("promotions-tabs").appendChild(tab);
      });
      const promotionTabs = document.querySelectorAll(".promotions-tabs li");
      promotionTabs[0].classList.add("active");

      //
      const promotionsGrid = document.getElementById("promotions-grid");
      promotionsGrid.innerHTML = "";

      const promotionCardsData = data.promotion_cards;

      promotionCardsData.forEach((card) => {
        const el = document.createElement("a");
        el.href = card.link;
        el.classList.add("promotion-card");

        const tagsContainer = document.createElement("div");
        tagsContainer.classList.add("promotions-tags-div");

        card.tags.forEach((tag) => {
          const tagDiv = document.createElement("div");
          tagDiv.classList.add("promotion-pill");

          const specificClass = `${tag}-pill`;
          tagDiv.classList.add(specificClass);

          const tagText = document.createElement("p");
          tagText.textContent = tag;

          tagDiv.appendChild(tagText);
          tagsContainer.appendChild(tagDiv);
        });

        el.innerHTML = `
    <img src="${card.image}" alt="" />
    <p class="mt-2">${card.title}</p>
  `;

        el.appendChild(tagsContainer);
        promotionsGrid.appendChild(el);
      });

      //
      promotionTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          promotionTabs.forEach((t) => t.classList.remove("active"));
          tab.classList.add("active");

          //
          const selectedTag = tab.textContent.trim();
          const allCards = document.querySelectorAll(".promotion-card");

          allCards.forEach((card) => {
            const tagDivs = card.querySelectorAll(".promotion-pill p");
            const cardTags = Array.from(tagDivs).map((p) =>
              p.textContent.trim()
            );

            if (selectedTag === "All" || cardTags.includes(selectedTag)) {
              card.style.display = "block";
            } else {
              card.style.display = "none";
            }
          });
        });
      });
    });
});
