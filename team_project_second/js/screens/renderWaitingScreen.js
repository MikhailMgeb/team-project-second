function renderWaitingScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  app.appendChild(renderHeader('WaItInG PlAy - Rock Paper Scissors!!!!!!'));

  renderHeaderLogo()

  window.application.renderBlock(
    'headerLogoImage', 
    document.querySelector('.app')
  );

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

  refreshGameStatus = setInterval(() => {
    const params = {
      token: window.application.token,
      id: window.application.id,
    };

    const getGameStatusRequest = getGameStatus(params);
    getGameStatusRequest.then((gameStatus) => {
      setGameStatus(gameStatus);
      console.log('status', window.application.status);

      if (window.application.status !== 'waiting-for-start') {
        window.application.renderScreen('playScreen');
        window.application.renderBlock(
          'enemyMoves',
          document.querySelector('.wrapper-opponents-moves')
        );
      }
    });
  }, 500);

  window.application.timers.push(refreshGameStatus);

  window.application.renderBlock(
    'footerLogo',
    document.querySelector('.footer')
  );
}
