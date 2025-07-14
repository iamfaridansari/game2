document.addEventListener("DOMContentLoaded", () => {
  fetch("./components/chatbar.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("chat-bar-section").innerHTML = data;

      //
      fetch("../json/chatbar.json")
        .then((res) => res.json())
        .then((chatData) => {
          const chatBar = document.getElementById("chat-bar");
          chatBar.innerHTML = "";

          chatData.forEach((item) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <div class="profile-picture">
                  <img src="${item.img}" alt="${item.name}" />
                </div>
                <div>
                  <p class="fw-bold yellow-text">${item.name}</p>
                  <p>${item.message}</p>
                </div>
      `;
            chatBar.appendChild(li);
          });
        })
        .catch((err) => {
          console.error("Failed to load chat data:", err);
        });

      //
      const chatBarButton = document.querySelectorAll(".chat-bar-button");
      const chatBarDiv = document.getElementById("chat-bar-div");
      const chatBarIcon = document.querySelector(".chat-bar-button i");
      chatBarButton.forEach((btn) => {
        btn.addEventListener("click", () => {
          chatBarDiv.classList.toggle("active");
          if (chatBarIcon.classList.contains("fa-message")) {
            chatBarIcon.classList.remove("fa-message");
            chatBarIcon.classList.add("fa-times");
          } else {
            chatBarIcon.classList.remove("fa-times");
            chatBarIcon.classList.add("fa-message");
          }
        });
      });
    });
});
