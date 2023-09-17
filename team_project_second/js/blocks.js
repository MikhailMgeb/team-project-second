
//--кнопка регистрация логина
function renderMainButton(container) {
    const mainButton = document.createElement('button');
    mainButton.textContent = 'login';
    mainButton.classList.add('wrapper__main-button');
    const inputUser = document.createElement('input');
    const labelInputUser = document.createElement('label');
    labelInputUser.textContent = 'Your Login.....';
    inputUser.classList.add('wrapper__input-user');

    mainButton.addEventListener('click', () => {
        mainButton.disabled = true;
        //errors.textContent = '';
        //results.textContent = '';
        const loginUser = inputUser.value;

        fetch(`https://skypro-rock-scissors-paper.herokuapp.com/login?login=${inputUser.value}`)
            .then((response) => response.json())
            .then((results) => {
                console.log(results);

                if (results.token) {
                    window.application.token = results.token;
                    window.application.renderScreen('renderLobbyScreen');
                }

            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                mainButton.disabled = false;
            });
    });
    container.appendChild(labelInputUser);
    container.appendChild(inputUser);
    container.appendChild(mainButton);
}

window.application.blocks['mainButton'] = renderMainButton;

/*function renderInputUser(container) {
  const inputUser = document.createElement('input');
  const labelInputUser = document.createElement('label');
  labelInputUser.textContent = 'Your Login.....';
  inputUser.classList.add('input-User');
 
  container.appendChild(labelInputUser);
  container.appendChild(inputUser);
}
 
window.application.blocks['inputUser'] = renderInputUser;*/

//window.application.renderBlock('inputUser', document.querySelector('.app'));

function renderPlayLobbyButton(container) {
    const playLobbyButton = document.createElement('button');
    playLobbyButton.textContent = 'Go Play!!!';
    playLobbyButton.classList.add('wrapper__main-button');

    playLobbyButton.addEventListener('click', () => {
        console.log('click');
    });

    container.appendChild(playLobbyButton);
}

window.application.blocks['playLobbyButton'] = renderPlayLobbyButton;

function renderInput(container) {
    const input = document.createElement('input');
    input.classList.add('wrapper__input-user');

    // mainButton.addEventListener('click', () => {
    // console.log('click');
    // });

    container.appendChild(input);
}

window.application.blocks['input'] = renderInput;

///// ----------------отрисовка блока с другими игроками------------------
function playerList(container, textContent) {
    const button = document.createElement('button');
    button.classList.add('wrapper__button-user');
    button.textContent = textContent;
    container.appendChild(button);
}

window.application.blocks['player-list'] = playerList;

///// ----------------------------------

function renderPlayHallButton(container) {
    const playHallButton = document.createElement('button');
    playHallButton.textContent = 'Go Play!!!';
    playHallButton.classList.add('wrapper__main-button');

    playHallButton.addEventListener('click', () => {
        console.log('click');
    });

    container.appendChild(playHallButton);
}

window.application.blocks['playHallButton'] = renderPlayHallButton;

function renderPlayPersonageRockButton(container) {
    const playPersonageRockButton = document.createElement('img');
    //playPersonageRockButton.textContent = 'Go Play!!!';
    playPersonageRockButton.classList.add('personage-button');
    playPersonageRockButton.src = '/image/rocki.jpeg';

    playPersonageRockButton.addEventListener('click', () => {
        console.log('click');
    });

    container.appendChild(playPersonageRockButton);
}

window.application.blocks[
    'playPersonageRockButton'
] = renderPlayPersonageRockButton;

function renderPlayPersonageScissorsButton(container) {
    const playPersonageScissorsButton = document.createElement('img');
    //playPersonageScissorsButton.textContent = 'Go Play!!!';
    playPersonageScissorsButton.classList.add('personage-button');
    playPersonageScissorsButton.src = '/image/scissori.jpeg';
    playPersonageScissorsButton.addEventListener('click', () => {
        console.log('click');
    });

    container.appendChild(playPersonageScissorsButton);
}

window.application.blocks[
    'playPersonageScissorsButton'
] = renderPlayPersonageScissorsButton;

function renderPlayPersonagePaperButton(container) {
    const playPersonagePaperButton = document.createElement('img');
    //playPersonagePaperButton.textContent = 'Go Play!!!';
    playPersonagePaperButton.classList.add('personage-button');
    playPersonagePaperButton.src = '/image/papperi.jpeg';

    playPersonagePaperButton.addEventListener('click', () => {
        console.log('click');
    });

    container.appendChild(playPersonagePaperButton);
}

window.application.blocks[
    'playPersonagePaperButton'
] = renderPlayPersonagePaperButton;

function renderPlayLogotipButton(container) {
    const playLogotipButton = document.createElement('img');
    //playPersonagePaperButton.textContent = 'Go Play!!!';
    playLogotipButton.classList.add('wrapper__logotip-button');
    playLogotipButton.src = '/image/logotip.jpeg';

    playLogotipButton.addEventListener('click', () => {
        console.log('click');
    });

    container.appendChild(playLogotipButton);
}

window.application.blocks['playLogotipButton'] = renderPlayLogotipButton;

function renderMainImage(container) {
    const mainImage = document.createElement('img');
    //playPersonagePaperButton.textContent = 'Go Play!!!';
    mainImage.classList.add('wrapper__logotip-button');
    mainImage.src = '/image/mainPage.jpeg';

    mainImage.addEventListener('click', () => {
        console.log('click');
    });

    container.appendChild(mainImage);
}

window.application.blocks['mainImage'] = renderMainImage;

function renderLoserImage(container) {
    const loserImage = document.createElement('img');
    //playPersonagePaperButton.textContent = 'Go Play!!!';
    loserImage.classList.add('wrapper__logotip-button');
    loserImage.src = '/image/looser paper.jpeg';

    loserImage.addEventListener('click', () => {
        console.log('click');
    });

    container.appendChild(loserImage);
}

window.application.blocks['loserImage'] = renderLoserImage;

function renderContinueButton(container) {
    const continueButton = document.createElement('button');
    continueButton.textContent = 'ContinuE PlaY';
    continueButton.classList.add('wrapper__main-button');

    continueButton.addEventListener('click', () => {
        console.log('click');
    });

    container.appendChild(continueButton);
}

window.application.blocks['continueButton'] = renderContinueButton;

function renderReturnLobbyButton(container) {
    const returnLobbyButton = document.createElement('button');
    returnLobbyButton.textContent = 'ReturN tO LobbY';
    returnLobbyButton.classList.add('wrapper__main-button');

    returnLobbyButton.addEventListener('click', () => {
        console.log('click');
    });

    container.appendChild(returnLobbyButton);
}

window.application.blocks['returnLobbyButton'] = renderReturnLobbyButton;

function renderWinImage(container) {
    const winImage = document.createElement('img');
    //playPersonagePaperButton.textContent = 'Go Play!!!';
    winImage.classList.add('wrapper__logotip-button');
    winImage.src = '/image/win.jpeg';

    winImage.addEventListener('click', () => {
        console.log('click');
    });

    container.appendChild(winImage);
}

window.application.blocks['winImage'] = renderWinImage;
