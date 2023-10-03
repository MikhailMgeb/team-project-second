function renderWaitingMoveScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  const title = document.createElement('h1');
  title.classList.add('header-tittle');
  title.textContent = 'WaItInG MoVe YoUr EnEmY - Rock Paper Scissors!!!!!!';
  app.appendChild(title);

  window.application.renderBlock('mainImage', document.querySelector('.app'));

  const loader = document.createElement('div');
  loader.classList.add('loader');
  app.appendChild(loader);

  const face = document.createElement('div');
  face.classList.add('face');
  loader.appendChild(face);

  const circle = document.createElement('div');
  circle.classList.add('circle');
  face.appendChild(circle);

  const faceTwo = document.createElement('div');
  faceTwo.classList.add('face');
  loader.appendChild(faceTwo);

  const circleTwo = document.createElement('div');
  circleTwo.classList.add('circle');
  faceTwo.appendChild(circleTwo);

  const wrapperFooterImage = document.createElement('footer');
  wrapperFooterImage.classList.add('wrapper__footer');
  app.appendChild(wrapperFooterImage);

  window.application.renderBlock(
    'renderFooterLogo',
    document.querySelector('.wrapper__footer')
  );

  refreshGameStatusWait = setInterval(() => {
    const params = {
      token: window.application.token,
      id: window.application.id,
    };

    const getGameStatusRequest = getGameStatus(params);
    getGameStatusRequest.then((gameStatus) => setGameStatus(gameStatus));
  }, 500);

  window.application.timers.push(refreshGameStatusWait);
}
