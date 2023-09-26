const loader = document.createElement('span');
loader.classList.add('hidden');
loader.classList.add('loaders');

function renderPlayLobbyButton(container) {
  const playLobbyButton = document.createElement('button');
  playLobbyButton.textContent = 'Go Play!!!';
  playLobbyButton.classList.add('wrapper__main-button');

  playLobbyButton.addEventListener('click', () => {
    playLobbyButton.disabled = true;
    loader.classList.remove('hidden');

    const params = {
      token: window.application.token,
    };

    const getGameRequest = getGame(params);
    getGameRequest
      .then((game) => setStart(game))
      .finally(() => {
        playLobbyButton.disabled = false;
        loader.classList.add('hidden');
      });

    clearInterval(refreshPlayerList);

    window.application.renderScreen('renderWaitingScreen');
  });
  container.appendChild(playLobbyButton);
}
