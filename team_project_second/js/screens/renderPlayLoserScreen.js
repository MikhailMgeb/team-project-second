function renderPlayLoserScreen() {
    const app = document.querySelector('.app');
    app.innerHTML = '';

    const titlePlayLoser = document.createElement('h1');
    titlePlayLoser.classList.add('app__main-tittle');
    titlePlayLoser.textContent = 'YoU LoSe:((((!!!!!!DoNt WoRrY)';

    const content = document.createElement('div');
    content.classList.add('wrapper');

    app.appendChild(titlePlayLoser);
    app.appendChild(content);

    window.application.renderBlock('loserImage', document.querySelector('.wrapper'));
    window.application.renderBlock('continueButton', document.querySelector('.wrapper'));
    window.application.renderBlock('returnLobbyButton', document.querySelector('.wrapper'));

    window.application.renderBlock('playLogotipButton', document.querySelector('.wrapper'));
}