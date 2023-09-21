function renderWaitingScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';
  const titleLobby = document.createElement('h1');
  titleLobby.classList.add('app__main-tittle');
  titleLobby.textContent = 'WaItInG PlAy - Rock Paper Scissors!!!!!!';
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

  const refreshGameStatus = setInterval(function () {
    const params = {
      token: window.application.token,
      id: window.application.id,
    };

    request(
      `https://skypro-rock-scissors-paper.herokuapp.com/game-status`,
      params,
      SetgameStatus
    );

    if (window.application.status !== 'waiting-for-start') {
      window.application.timers.push(refreshGameStatus);
      clearInterval(refreshGameStatus)// РАЗОБРАТЬСЯ ПОЧЕМУ ТАК?
      window.application.renderScreen('renderPlayScreen');
    }
  }, 500);

  // window.application.timers.push(refreshGameStatus);

  /*loader*/
  window.application.renderBlock(
    'playLogotipButton',
    document.querySelector('.wrapper-footer-image')
  );
}