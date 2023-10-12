function renderWaitingMoveScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  app.appendChild(renderHeader('WaItInG for EnEmY MoVe - Rock Paper Scissors!!!!!!'));

  window.application.renderBlock('headerLogoImage', document.querySelector('.app'));

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

  window.application.renderBlock('footer', app);

  window.application.renderBlock(
    'footerLogo',
    document.querySelector('.footer')
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
