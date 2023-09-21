function renderPlayScreen() {
    const app = document.querySelector('.app');
    app.innerHTML = '';

    const titlePlay = document.createElement('h1');
    titlePlay.classList.add('app__main-tittle');
    titlePlay.textContent = 'LeTs gO PlAy!!!!!!';

    const containerHeader = document.createElement('div');
    containerHeader.classList.add('wrapper_header');
    containerHeader.appendChild(titlePlay);

    app.appendChild(containerHeader);

    const wrapperMainImage = document.createElement('div');
    wrapperMainImage.classList.add('wrapper__main-image');
    app.appendChild(wrapperMainImage);

    window.application.renderBlock(
        'mainImage',
        document.querySelector('.wrapper__main-image')
    );

    const wrapperChoiceMove = document.createElement('div');
    wrapperChoiceMove.classList.add('wrapper__choice-move')
    app.appendChild(wrapperChoiceMove);

    window.application.renderBlock('playPersonageRockButton', document.querySelector('.wrapper__choice-move'));
    window.application.renderBlock('playPersonageScissorsButton', document.querySelector('.wrapper__choice-move'));
    window.application.renderBlock('playPersonagePaperButton', document.querySelector('.wrapper__choice-move'));

    const wrapperFooterImage = document.createElement('div');
    wrapperFooterImage.classList.add('wrapper__footer-image');
    app.appendChild(wrapperFooterImage);
    window.application.renderBlock('playLogotipButton', document.querySelector('.wrapper__footer-image'));
}