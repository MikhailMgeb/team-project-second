function renderWaitingScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  const titleLobby = document.createElement('h1');
  titleLobby.classList.add('header-tittle');
  titleLobby.textContent = 'WaItInG PlAy - Rock Paper Scissors!!!!!!';

  const wrapperMainImage = document.createElement('div');
  wrapperMainImage.classList.add('wrapper-main-image');

  const content = document.createElement('div');
  content.classList.add('wrapper');

  const wrapperList = document.createElement('div');
  wrapperList.classList.add('wrapper__list');

  const wrapperFooterImage = document.createElement('footer');
  wrapperFooterImage.classList.add('wrapper__footer');

  app.appendChild(titleLobby);
  content.appendChild(wrapperMainImage);
  app.appendChild(content);
  content.appendChild(wrapperList);
  content.appendChild(wrapperFooterImage);

  window.application.renderBlock(
    'mainImage',
    document.querySelector('.wrapper-main-image')
  );

  refreshGameStatus = setInterval(() => {
    const params = {
      token: window.application.token,
      id: window.application.id,
    };

    const getGameStatusRequest = getGameStatus(params);
    getGameStatusRequest.then((gameStatus) => setGameStatus(gameStatus));

    if (window.application.status !== 'waiting-for-start') {
      window.application.renderScreen('renderPlayScreen');
    }
  }, 500);

  window.application.timers.push(refreshGameStatus);

  window.application.renderBlock(
    'renderFooterLogo',
    document.querySelector('.wrapper__footer')
  );
}
