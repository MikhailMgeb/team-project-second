//--кнопка регистрация логина
function renderMainButton(container) {
    const authorizationForm = document.querySelector('.authorization-form')
    const mainButton = document.createElement('button');
    mainButton.textContent = 'login';
    mainButton.classList.add('wrapper__main-button');
    const inputUser = document.createElement('input');
    const labelInputUser = document.createElement('label');
    labelInputUser.textContent = 'Your Login.....';
    labelInputUser.classList.add('wrapper__label-user');
    inputUser.classList.add('wrapper__input-user');

    authorizationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        mainButton.disabled = true;
        const loginUser = inputUser.value;
        const params = {
            login: loginUser
        };

        request(
            `https://skypro-rock-scissors-paper.herokuapp.com/login`,
            params,
            setToken
        );
        window.application.timers.push(setTimeout(() => {
            if (window.application.status === "lobby") {
                window.application.renderScreen('renderLobbyScreen');
            }
        }, 1000));

    });
    container.appendChild(labelInputUser);
    labelInputUser.appendChild(inputUser)
    container.appendChild(mainButton);
}

function renderPlayLobbyButton(container) {
    const playLobbyButton = document.createElement('button');
    playLobbyButton.textContent = 'Go Play!!!';
    playLobbyButton.classList.add('wrapper__main-button');

    playLobbyButton.addEventListener('click', () => {
        const params = {
            token: window.application.token,
        };

        request(`https://skypro-rock-scissors-paper.herokuapp.com/start`, params, setStart);
        window.application.renderScreen('renderWaitingScreen')
    });
    container.appendChild(playLobbyButton);
}

function renderInput(container) {
    const input = document.createElement('input');
    input.classList.add('wrapper__input-user');


    container.appendChild(input);
}

function playerList(container, textContent) {
    const isPlayerLobby = document.createElement('div');
    isPlayerLobby.classList.add('wrapper__player-lobby');
    isPlayerLobby.textContent = textContent;
    container.appendChild(isPlayerLobby);
}

function renderPlayHallButton(container) {
    const playHallButton = document.createElement('button');
    playHallButton.textContent = 'Go Play!!!';
    playHallButton.classList.add('wrapper__main-button');

    container.appendChild(playHallButton);
}

function renderPlayPersonageRockButton(container) {
    const playPersonageRockButton = document.createElement('img');

    playPersonageRockButton.classList.add('personage-button');
    playPersonageRockButton.src = '/image/rocki.jpeg';

    playPersonageRockButton.addEventListener('click', () => {
        console.log('click');
    });

    container.appendChild(playPersonageRockButton);
}

function renderPlayPersonageScissorsButton(container) {
    const playPersonageScissorsButton = document.createElement('img');

    playPersonageScissorsButton.classList.add('personage-button');
    playPersonageScissorsButton.src = '/image/scissori.jpeg';
    playPersonageScissorsButton.addEventListener('click', () => {
        console.log('click');
    });

    container.appendChild(playPersonageScissorsButton);
}

function renderPlayPersonagePaperButton(container) {
    const playPersonagePaperButton = document.createElement('img');

    playPersonagePaperButton.classList.add('personage-button');
    playPersonagePaperButton.src = '/image/papperi.jpeg';

    playPersonagePaperButton.addEventListener('click', () => {
        console.log('click');
    });

    container.appendChild(playPersonagePaperButton);
}

function renderPlayLogoButton(container) {
    const playLogoButton = document.createElement('img');
    playLogoButton.classList.add('wrapper__footer-logo');
    playLogoButton.src = '/image/logo-footer.jpeg';

    container.appendChild(playLogoButton);
}

function renderMainImage(container) {
    const mainImage = document.createElement('img');
    mainImage.classList.add('wrapper__logo-header');
    mainImage.src = '/image/mainPage.jpeg';

    container.appendChild(mainImage);
}

function renderLoserImage(container) {
    const loserImage = document.createElement('img');
    loserImage.classList.add('wrapper__logo-header');
    loserImage.src = '/image/looser paper.jpeg';

    loserImage.addEventListener('click', () => {
        console.log('click');
    });

    container.appendChild(loserImage);
}

function renderContinueButton(container) {
    const continueButton = document.createElement('button');
    continueButton.textContent = 'ContinuE PlaY';
    continueButton.classList.add('wrapper__main-button');

    container.appendChild(continueButton);
}

function renderReturnLobbyButton(container) {
    const returnLobbyButton = document.createElement('button');
    returnLobbyButton.textContent = 'ReturN tO LobbY';
    returnLobbyButton.classList.add('wrapper__main-button');

    container.appendChild(returnLobbyButton);
}

function renderWinImage(container) {
    const winImage = document.createElement('img');
    winImage.classList.add('wrapper__logo-header');
    winImage.src = '/image/win.jpeg';

    winImage.addEventListener('click', () => {
        console.log('click');
    });

    container.appendChild(winImage);
}
