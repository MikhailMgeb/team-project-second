function renderAuthorizationPage(container) {
  const authorizationForm = document.querySelector('.authorization-form');

  const authorizationFormLabel = document.createElement('label');
  authorizationFormLabel.classList.add('authorization-form__label');
  authorizationFormLabel.textContent = 'Your Login...';
  container.appendChild(authorizationFormLabel);

  const authorizationFormInputUser = document.createElement('input');
  authorizationFormInputUser.classList.add('authorization-form__input-user');
  container.appendChild(authorizationFormInputUser);

  const authorizationFormButton = document.createElement('button');
  authorizationFormButton.textContent = 'login';
  authorizationFormButton.classList.add('authorization-form__button', 'button');
  container.appendChild(authorizationFormButton);

  const buttonMiniLoader = document.createElement('span');
  buttonMiniLoader.classList.add('button__mini-loader_hidden');
  buttonMiniLoader.classList.remove('button__mini-loader');
  authorizationFormButton.appendChild(buttonMiniLoader);

  const authorizationFormWarning = document.createElement('p');
  authorizationFormWarning.textContent = 'You did not enter your login!';
  authorizationFormWarning.classList.add('authorization-form_hidden', 'authorization-form_warning');
  container.appendChild(authorizationFormWarning);

  authorizationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    authorizationFormButton.disabled = true;
    buttonMiniLoader.classList.remove('button__mini-loader_hidden');
    buttonMiniLoader.classList.add('button__mini-loader');
    authorizationFormButton.classList.add('button_disabled');
    
    const loginUser = authorizationFormInputUser.value;
    
    if (loginUser.length === 0) {
      authorizationFormWarning.classList.remove('authorization-form_hidden');
    }

    const params = {
      login: loginUser,
    };

    const getLoginRequest = getLogin(params);
    
    getLoginRequest
    .then((token) => setToken(token))
    .finally(() => {
      authorizationFormButton.disabled = false;
      buttonMiniLoader.classList.add('button__mini-loader_hidden');
      buttonMiniLoader.classList.remove('button__mini-loader');
      authorizationFormButton.classList.remove('button_disabled');
      });

    setTimeout(() => {
      if (window.application.status === 'lobby') {
        window.application.renderScreen('lobbyScreen');
      }
      if (window.application.status === 'waiting-for-start') {
        window.application.renderScreen('waitingScreen');
      }

    }, 1000);
  });
}

function renderPlayHallButton(container) {
  const playHallButton = document.createElement('button');
  playHallButton.textContent = 'Go Play!!!';
  playHallButton.classList.add('play-hall-button', 'button');

  container.appendChild(playHallButton);
}

function renderFooterLogo(container) {
  const firstWordLogo = document.createElement('span');
  firstWordLogo.classList.add('footer__title', 'footer__title-gray');
  firstWordLogo.textContent = 'RoCk';

  const secondWordLogo = document.createElement('span');
  secondWordLogo.classList.add('footer__title', 'footer__title-yellow');
  secondWordLogo.textContent = 'PaPer';

  const thirdWordLogo = document.createElement('span');
  thirdWordLogo.classList.add('footer__title', 'footer__title-blue');
  thirdWordLogo.textContent = 'ScissoRs';
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

    window.application.renderScreen('waitingScreen');
  });
}

function renderReturnLobbyButton(container) {
  const returnLobbyButton = document.createElement('button');
  returnLobbyButton.textContent = 'ReturN tO LobbY';
  returnLobbyButton.classList.add('wrapper__return-button', 'button');

  container.appendChild(returnLobbyButton);

  returnLobbyButton.addEventListener('click', () => {
    window.application.renderScreen('lobbyScreen');
  });
}
