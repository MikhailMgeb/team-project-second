function renderMainButton(container) {
  const authorizationForm = document.querySelector('.authorization-form');

  const labelInputUser = document.createElement('label');
  labelInputUser.classList.add('label');
  labelInputUser.textContent = 'Your Login.....';
  container.appendChild(labelInputUser);

  const inputUser = document.createElement('input');
  inputUser.classList.add('wrapper__input-user');
  container.appendChild(inputUser);

  const mainButton = document.createElement('button');
  mainButton.textContent = 'login';
  mainButton.classList.add('wrapper__authorization-button', 'button');
  container.appendChild(mainButton);

  const loader = document.createElement('span');
  loader.classList.add('hidden');
  loader.classList.add('loaders');
  mainButton.appendChild(loader);

  const modalWindow = document.createElement('p');
  modalWindow.textContent = 'You did not enter your login!';
  modalWindow.classList.add('hidden');
  container.appendChild(modalWindow);

  authorizationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    mainButton.disabled = true;
    loader.classList.remove('hidden');
    const loginUser = inputUser.value;

    if (loginUser.length === 0) {
      modalWindow.classList.remove('hidden');
    }
    const params = {
      login: loginUser,
    };
    const getLoginRequest = getLogin(params);

    getLoginRequest
      .then((token) => setToken(token))
      .finally(() => {
        mainButton.disabled = false;
        loader.classList.add('hidden');
      });

    setTimeout(() => {
      if (window.application.status === 'lobby') {
        window.application.renderScreen('renderLobbyScreen');
      }
    }, 1000);
  });
}

function renderPlayHallButton(container) {
  const playHallButton = document.createElement('button');
  playHallButton.textContent = 'Go Play!!!';
  playHallButton.classList.add('wrapper__main-button', 'button');

  container.appendChild(playHallButton);
}

function renderFooterLogo(container) {
  const firstWordLogo = document.createElement('span');
  firstWordLogo.classList.add('wrapper__footer-title', 'title__pink');
  firstWordLogo.textContent = 'RoCk';

  const secondWordLogo = document.createElement('span');
  secondWordLogo.classList.add('wrapper__footer-title', 'title__yellow');
  secondWordLogo.textContent = 'PaPer';

  const thirdWordLogo = document.createElement('span');
  thirdWordLogo.classList.add('wrapper__footer-title', 'title__blue');
  thirdWordLogo.textContent = 'ScIssoRs';
  container.appendChild(firstWordLogo);
  container.appendChild(secondWordLogo);
  container.appendChild(thirdWordLogo);
}

function renderContinueButton(container) {
  const continueButton = document.createElement('button');
  continueButton.textContent = 'ContinuE PlaY';
  continueButton.classList.add('wrapper__continue-button', 'button');

  container.appendChild(continueButton);

  continueButton.addEventListener('click', () => {
    const params = {
      token: window.application.token,
    };

    const getGameRequest = getGame(params);

    getGameRequest.then((game) => setStart(game));

    window.application.renderScreen('renderWaitingScreen');
  });
}

function renderReturnLobbyButton(container) {
  const returnLobbyButton = document.createElement('button');
  returnLobbyButton.textContent = 'ReturN tO LobbY';
  returnLobbyButton.classList.add('wrapper__return-button', 'button');

  container.appendChild(returnLobbyButton);

  returnLobbyButton.addEventListener('click', () => {
    window.application.renderScreen('renderLobbyScreen');
  });
}
