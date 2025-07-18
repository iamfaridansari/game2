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
      const test = document.querySelectorAll(".promotions-tabs li");
      test[0].classList.add("active");
    });
});
