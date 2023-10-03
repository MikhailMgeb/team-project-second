function renderLobbyScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  const title = document.createElement('h1');
  title.classList.add('header-tittle');
  title.textContent = 'LOBBY - Rock Paper Scissors!!!!!!';

  app.appendChild(title);

  const wrapperMainImage = document.createElement('div');
  wrapperMainImage.classList.add('wrapper__main-image');
  app.appendChild(wrapperMainImage);

  window.application.renderBlock(
    'mainImage',
    document.querySelector('.wrapper__main-image')
  );

  window.application.renderBlock(
    'playLobbyButton',
    document.querySelector('.app')
  );

  const wrapperList = document.createElement('div');
  wrapperList.classList.add('wrapper__list');
  app.appendChild(wrapperList);

  const wrapperFooter = document.createElement('footer');
  wrapperFooter.classList.add('wrapper__footer');
  app.appendChild(wrapperFooter);

  const blockListPlayer = document.createElement('div');
  blockListPlayer.classList.add('blockListPlayer');

  refreshPlayerList = setInterval(() => {
    const params = {
      token: window.application.token,
    };

    const getPlayerListRequest = getPlayerList(params);

    getPlayerListRequest.then((playerList) => {
      // console.log('playerList', playerList);
      setPlayerList(playerList);
    });
  }, 1000);

  window.application.timers.push(refreshPlayerList);

  window.application.renderBlock(
    'renderFooterLogo',
    document.querySelector('.wrapper__footer')
  );
}
