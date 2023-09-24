function renderLobbyScreen() {
  const app = document.querySelector(".app");
  app.innerHTML = "";

  const titleLobby = document.createElement("h1");
  titleLobby.classList.add("wrapper__header-tittle");
  titleLobby.textContent = "LOBBY - Rock Paper Scissors!!!!!!";

  const containerHeader = document.createElement("div");
  containerHeader.classList.add("wrapper_header");
  containerHeader.appendChild(titleLobby);
  app.appendChild(containerHeader);

  const wrapperMainImage = document.createElement("div");
  wrapperMainImage.classList.add("wrapper__main-image");
  app.appendChild(wrapperMainImage);

  window.application.renderBlock(
    "mainImage",
    document.querySelector(".wrapper__main-image")
  );

  const wrapperList = document.createElement("div");
  wrapperList.classList.add("wrapper-list");
  app.appendChild(wrapperList);

  const wrapperFooter = document.createElement("div");
  wrapperFooter.classList.add("wrapper__footer");
  app.appendChild(wrapperFooter);

  const blockListPlayer = document.createElement("div");
  blockListPlayer.classList.add("blockListPlayer");

  const refreshPlayerList = setInterval(() => {
    const params = {
      token: window.application.token,
    };

    request(
      `https://skypro-rock-scissors-paper.herokuapp.com/player-list/`,
      params,
      setPlayerList
    );
  }, 1000);

  window.application.timers.push(refreshPlayerList);

  window.application.renderBlock(
    "playLobbyButton",
    document.querySelector(".wrapper__footer")
  );
  window.application.renderBlock(
    "playLogoButton",
    document.querySelector(".app")
  );
}
