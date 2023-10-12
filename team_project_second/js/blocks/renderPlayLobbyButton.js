const buttonMiniLoader = document.createElement('span');
buttonMiniLoader.classList.add('button__mini-loader_hidden');
buttonMiniLoader.classList.add('button__mini-loader');

function renderPlayLobbyButton(container) {
  const playLobbyButton = document.createElement('button');
  playLobbyButton.textContent = 'Go Play!!!';
  playLobbyButton.classList.add('play-hall-button', 'button');

  playLobbyButton.addEventListener('click', () => {
    playLobbyButton.disabled = true;
    buttonMiniLoader.classList.remove('button__mini-loader_hidden');

    const params = {
      token: window.application.token,
    };

    const getGameRequest = getGame(params);
    getGameRequest
      .then((game) => setStart(game))
      .finally(() => {
        playLobbyButton.disabled = false;
        buttonMiniLoader.classList.add('button__mini-loader_hidden');
      });

    window.application.renderScreen('waitingScreen');
  });
  container.appendChild(playLobbyButton);
}
