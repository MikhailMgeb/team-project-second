function renderPlayLoserScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  const headerBlock = document.createElement('div');
  headerBlock.classList.add('wrapper__header');
  const titlePlayLoser = document.createElement('h1');
  titlePlayLoser.classList.add('wrapper__header-tittle');
  titlePlayLoser.textContent = 'YoU LoSe:((((!!!!!!DoNt WoRrY)';
  headerBlock.appendChild(titlePlayLoser);
  app.appendChild(headerBlock);

  const wrapperMainImage = document.createElement('div');
  wrapperMainImage.classList.add('wrapper__main-image');
  app.appendChild(wrapperMainImage);

  const wrapperButtons = document.createElement('div');
  wrapperButtons.classList.add('wrapper-buttons');
  app.appendChild(wrapperButtons);

  const wrapperFooter = document.createElement('div');
  wrapperFooter.classList.add('wrapper__footer');
  app.appendChild(wrapperFooter);

  window.application.renderBlock(
    'loserImage',
    document.querySelector('.wrapper__main-image')
  );
  window.application.renderBlock(
    'continueButton',
    document.querySelector('.wrapper-buttons')
  );
  window.application.renderBlock(
    'returnLobbyButton',
    document.querySelector('.wrapper-buttons')
  );
  window.application.renderBlock(
    'playLogoButton',
    document.querySelector('.wrapper__footer')
  );
}
