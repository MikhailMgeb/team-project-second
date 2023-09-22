function renderWaitingMoveScreen() {
    const app = document.querySelector('.app');
    app.innerHTML = '';

    const titleLobby = document.createElement('h1');
    titleLobby.classList.add('app__main-tittle');
    titleLobby.textContent = 'WaItInG MoVe YoUr EnEmY - Rock Paper Scissors!!!!!!';
    
    const wrapperMainImage = document.createElement('div');
    wrapperMainImage.classList.add('wrapper-main-image');

    const content = document.createElement('div');
    content.classList.add('wrapper');

    const wraperList = document.createElement('div');
    wraperList.classList.add('wrapper-list');

    const wrapperFooterImage = document.createElement('div');
    wrapperFooterImage.classList.add('wrapper-footer-image');
    app.appendChild(titleLobby);
    content.appendChild(wrapperMainImage);
    app.appendChild(content);
    content.appendChild(wraperList);
    content.appendChild(wrapperFooterImage);

    window.application.renderBlock(
      'mainImage',
      document.querySelector('.wrapper-main-image')
    );

      refreshGameStatusWait = setInterval(() => {
      const params = {
        token: window.application.token,
        id: window.application.id,
      };
      request(
        `https://skypro-rock-scissors-paper.herokuapp.com/game-status`,
        params,
        SetgameStatus
      );
    }, 500);

    /*setTimeout(() => {
      if (window.application.status === "waiting-for-your-move") {
        clearInterval(refreshGameStatusWait)
        window.application.renderScreen('renderPlayScreen');
      }
      if (window.application.status === "lose") {
        clearInterval(refreshGameStatusWait)
        window.application.renderScreen('renderPlayLoserScreen');
      }
      if (window.application.status === "win") {
        clearInterval(refreshGameStatusWait)
        window.application.renderScreen('renderPlayWinScreen');
      }
    },000);*/
  /*loader*/
    window.application.renderBlock(
      'playLogotipButton',
      document.querySelector('.wrapper-footer-image')
    );
  }