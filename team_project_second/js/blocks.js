function renderMainButton(container) {
    const mainButton = document.createElement('button');
    mainButton.textContent = 'login';
    mainButton.classList.add('main-Button');
    const inputUser = document.createElement('input');
    const labelInputUser = document.createElement('label');
    labelInputUser.textContent = 'Your Login.....';
    inputUser.classList.add('input-User');

    mainButton.addEventListener('click', () => {
        mainButton.disabled = true;
        //loader.classList.remove('hidden');
        //errors.textContent = '';
        //results.textContent = '';
        const loginUser = inputUser.value;


        fetch(`https://skypro-rock-scissors-paper.herokuapp.com/ping`)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                // errors.textContent = 'Error, try again';
            })
            .finally(() => {
                mainButton.disabled = false;
                //loader.classList.add('hidden');
            });
        console.log('click');
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
    playLobbyButton.classList.add('main-Button');

    playLobbyButton.addEventListener('click', () => {
        console.log('click');
    });

    container.appendChild(playLobbyButton);
}

window.application.blocks['playLobbyButton'] = renderPlayLobbyButton;

function renderInput(container) {
    const input = document.createElement('input');
    input.classList.add('input-User');

    // mainButton.addEventListener('click', () => {
    // console.log('click');
    // });

    container.appendChild(input);
}

window.application.blocks['input'] = renderInput;

function renderPlayHallButton(container) {
    const playHallButton = document.createElement('button');
    playHallButton.textContent = 'Go Play!!!';
    playHallButton.classList.add('main-Button');

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
    playLogotipButton.classList.add('logotip-button');
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
    mainImage.classList.add('logotip-button');
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
    loserImage.classList.add('logotip-button');
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
    continueButton.classList.add('main-Button');

    continueButton.addEventListener('click', () => {
        console.log('click');
    });

    container.appendChild(continueButton);
}

window.application.blocks['continueButton'] = renderContinueButton;

function renderReturnLobbyButton(container) {
    const returnLobbyButton = document.createElement('button');
    returnLobbyButton.textContent = 'ReturN tO LobbY';
    returnLobbyButton.classList.add('main-Button');

    returnLobbyButton.addEventListener('click', () => {
        console.log('click');
    });

    container.appendChild(returnLobbyButton);
}

window.application.blocks['returnLobbyButton'] = renderReturnLobbyButton;

function renderWinImage(container) {
    const winImage = document.createElement('img');
    //playPersonagePaperButton.textContent = 'Go Play!!!';
    winImage.classList.add('logotip-button');
    winImage.src = '/image/win.jpeg';

    winImage.addEventListener('click', () => {
        console.log('click');
    });

    container.appendChild(winImage);
}

window.application.blocks['winImage'] = renderWinImage;
