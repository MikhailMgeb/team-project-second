function renderPlayWinScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  app.appendChild(renderHeader('YoU WiN :))))))'));

  const wrapperMainImage = document.createElement('div');
  wrapperMainImage.classList.add('wrapper__main-image');

  app.appendChild(wrapperMainImage);

  const wrapperButtons = document.createElement('div');
  wrapperButtons.classList.add('wrapper-buttons');
  app.appendChild(wrapperButtons);

  const wrapperFooter = document.createElement('footer');
  wrapperFooter.classList.add('footer');

  app.appendChild(wrapperFooter);

  window.application.renderBlock(
    'winImage',
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
    document.querySelector('.footer')
  );
}
