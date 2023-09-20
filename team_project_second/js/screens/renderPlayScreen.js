function renderPlayScreen() {
    const app = document.querySelector('.app');
    app.innerHTML = '';

    const titlePlay = document.createElement('h1');
    titlePlay.classList.add('app__main-tittle');
    titlePlay.textContent = 'LeTs gO PlAy!!!!!!';

    const content = document.createElement('div');
    content.classList.add('wrapper');

    app.appendChild(titlePlay);
    app.appendChild(content);

    window.application.renderBlock(
        'mainImage',
        document.querySelector('.wrapper')
    );
    window.application.renderBlock('playPersonageRockButton', document.querySelector('.wrapper'));
    window.application.renderBlock('playPersonageScissorsButton', document.querySelector('.wrapper'));
    window.application.renderBlock('playPersonagePaperButton', document.querySelector('.wrapper'));
    window.application.renderBlock('playLogotipButton', document.querySelector('.wrapper'));
}