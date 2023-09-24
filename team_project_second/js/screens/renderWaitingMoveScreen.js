function renderWaitingMoveScreen() {
  const app = document.querySelector(".app");
  app.innerHTML = "";

  const titleLobby = document.createElement("h1");
  titleLobby.classList.add("wrapper__header-tittle");
  titleLobby.textContent =
    "WaItInG MoVe YoUr EnEmY - Rock Paper Scissors!!!!!!";

  const wrapperMainImage = document.createElement("div");
  wrapperMainImage.classList.add("wrapper-main-image");

  const content = document.createElement("div");
  content.classList.add("wrapper");

  const wrapperList = document.createElement("div");
  wrapperList.classList.add("wrapper-list");

  const wrapperFooterImage = document.createElement("div");
  wrapperFooterImage.classList.add("wrapper-footer-image");
  app.appendChild(titleLobby);
  content.appendChild(wrapperMainImage);
  app.appendChild(content);
  content.appendChild(wrapperList);
  content.appendChild(wrapperFooterImage);

  window.application.renderBlock(
    "mainImage",
    document.querySelector(".wrapper-main-image")
  );

  refreshGameStatusWait = setInterval(() => {
    const params = {
      token: window.application.token,
      id: window.application.id,
    };
    request(
      `https://skypro-rock-scissors-paper.herokuapp.com/game-status`,
      params,
      SetGameStatus
    );
  }, 500);

  window.application.timers.push(refreshGameStatusWait)

  setTimeout(() => {
    if (window.application.status === "waiting-for-your-move") {
      window.application.renderScreen("renderPlayScreen");
    }
    if (window.application.status === "lose") {
      window.application.renderScreen("renderPlayLoserScreen");
    }
    if (window.application.status === "win") {
      window.application.renderScreen("renderPlayWinScreen");
    }
  }, 1000);

  /*loader*/
  window.application.renderBlock(
    "playLogoButton",
    document.querySelector(".wrapper-footer-image")
  );
}
