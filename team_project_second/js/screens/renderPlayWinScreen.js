function renderPlayWinScreen() {
    const app = document.querySelector('.app');
    app.innerHTML = '';

    const titlePlayWin = document.createElement('h1');
    titlePlayWin.classList.add('app__main-tittle');
    titlePlayWin.textContent = 'YoU WiN:))))))))';

    const content = document.createElement('div');
    content.classList.add('wrapper');

    app.appendChild(titlePlayWin);
    app.appendChild(content);

    window.application.renderBlock('winImage', document.querySelector('.wrapper'));
    window.application.renderBlock('continueButton', document.querySelector('.wrapper'));
    window.application.renderBlock('returnLobbyButton', document.querySelector('.wrapper'));

    window.application.renderBlock('playLogotipButton', document.querySelector('.wrapper'));
}