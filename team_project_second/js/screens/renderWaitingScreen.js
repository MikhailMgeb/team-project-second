function renderWaitingScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  const titleLobby = document.createElement('h1');
  titleLobby.classList.add('header');
  titleLobby.textContent = 'WaItInG PlAy - Rock Paper Scissors!!!!!!';

  const wrapperMainImage = document.createElement('div');
  wrapperMainImage.classList.add('wrapper-main-image');

  app.appendChild(titleLobby);

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
  wrapperFooterImage.classList.add('footer');

  app.appendChild(wrapperFooterImage);

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
        window.application.renderScreen('renderPlayScreen');
      }
    });
  }, 500);

  window.application.timers.push(refreshGameStatus);

  window.application.renderBlock(
    'renderFooterLogo',
    document.querySelector('.footer')
  );
}
