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
    wrapperMainImage.classList.add('wrapper_main-image');
    app.appendChild(wrapperMainImage);

    window.application.renderBlock(
        'mainImage',
        document.querySelector('.wrapper_main-image')
    );

    window.application.renderBlock('playPersonageRockButton', document.querySelector('.wrapper'));
    window.application.renderBlock('playPersonageScissorsButton', document.querySelector('.wrapper'));
    window.application.renderBlock('playPersonagePaperButton', document.querySelector('.wrapper'));
    window.application.renderBlock('playLogotipButton', document.querySelector('.wrapper'));
}