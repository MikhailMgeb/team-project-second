function renderPlayLoserScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  const title = document.createElement('h1');
  title.classList.add('header-tittle');
  title.textContent = 'YoU LoSe:((((!!!!!!DoNt WoRrY)';
  app.appendChild(title);

  const wrapperMainImage = document.createElement('div');
  wrapperMainImage.classList.add('wrapper__main-image');
  app.appendChild(wrapperMainImage);

  const wrapperButtons = document.createElement('div');
  wrapperButtons.classList.add('wrapper-buttons');
  app.appendChild(wrapperButtons);

  const wrapperFooter = document.createElement('footer');
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
    'renderFooterLogo',
    document.querySelector('.wrapper__footer')
  );
}
