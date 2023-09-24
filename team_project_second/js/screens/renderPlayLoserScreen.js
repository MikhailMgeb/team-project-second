function renderPlayLoserScreen() {
    const app = document.querySelector('.app');
    app.innerHTML = '';

    const headerBlock = document.createElement('div');
    headerBlock.classList.add('wrapper__header');
    const titlePlayLoser = document.createElement('h1');
    titlePlayLoser.classList.add('wrapper__header-tittle');
    titlePlayLoser.textContent = 'YoU LoSe:((((!!!!!!DoNt WoRrY)'; 
    headerBlock.appendChild(titlePlayLoser);

    const content = document.createElement('div');
    content.classList.add('wrapper');

    app.appendChild(headerBlock);
    app.appendChild(content);

    window.application.renderBlock('loserImage', document.querySelector('.wrapper'));
    window.application.renderBlock('continueButton', document.querySelector('.wrapper'));
    window.application.renderBlock('returnLobbyButton', document.querySelector('.wrapper'));

    window.application.renderBlock('playLogoButton', document.querySelector('.wrapper'));
}