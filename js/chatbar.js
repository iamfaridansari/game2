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
    });
});
