function renderLobbyScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  app.appendChild(renderHeader('LOBBY - Rock Paper Scissors!!!!!!'));

  app.appendChild(renderHeaderLogo());

  window.application.renderBlock(
    'headerLogoImage',
    document.querySelector('.header-logo')
  );

  window.application.renderBlock(
    'playLobbyButton',
    document.querySelector('.app')
  );

  const ListWrapper = document.createElement('div');
  ListWrapper.classList.add('list-wrapper');
  app.appendChild(ListWrapper);

  window.application.renderBlock('footer', app);

  const blockListPlayer = document.createElement('div');
  blockListPlayer.classList.add('block-list-player');

  refreshPlayerList = setInterval(() => {
    const params = {
      token: window.application.token,
    };

    const getPlayerListRequest = getPlayerList(params);

    getPlayerListRequest.then((renderPlayerList) => {
      // console.log('renderPlayerList', renderPlayerList);
      setPlayerList(renderPlayerList);
    });
  }, 1000);

  window.application.timers.push(refreshPlayerList);

  window.application.renderBlock(
    'footerLogo',
    document.querySelector('.footer')
  );
}
