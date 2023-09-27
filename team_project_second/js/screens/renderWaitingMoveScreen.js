function renderWaitingMoveScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  const titleLobby = document.createElement('h1');
  titleLobby.classList.add('app__main-tittle');
  titleLobby.textContent = 'WaItInG MoVe YoUr EnEmY - Rock Paper Scissors!!!!!!';

  const wrapperMainImage = document.createElement('div');
  wrapperMainImage.classList.add('wrapper-main-image');

  const loader = document.createElement('div');
  loader.classList.add('loader');

  const face = document.createElement('div');
  face.classList.add('face');

  const circle = document.createElement('div');
  circle.classList.add('circle');

  const faceTwo = document.createElement('div');
  faceTwo.classList.add('face');

  const circleTwo = document.createElement('div');
  circleTwo.classList.add('circle');

  const content = document.createElement('div');
  content.classList.add('wrapper');

  const wrapperList = document.createElement('div');
  wrapperList.classList.add('wrapper__list');

  const wrapperFooterImage = document.createElement('div');
  wrapperFooterImage.classList.add('wrapper-footer-image');
  app.appendChild(titleLobby);
  content.appendChild(wrapperMainImage);
  content.appendChild(loader);
  loader.appendChild(face);
  face.appendChild(circle);
  loader.appendChild(faceTwo);
  faceTwo.appendChild(circleTwo);
  app.appendChild(content);
  content.appendChild(wrapperList);
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

    const getGameStatusRequest = getGameStatus(params);
    getGameStatusRequest.then((gameStatus) => setGameStatus(gameStatus));
  }, 500);

  window.application.timers.push(refreshPlayerList);

  window.application.renderBlock(
    'playLogoButton',
    document.querySelector('.wrapper-footer-image')
  );
}
