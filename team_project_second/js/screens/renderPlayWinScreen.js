function renderPlayWinScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  app.appendChild(renderHeader('YoU WiN! :))))))'));

  app.appendChild(renderHeaderLogo());

  app.appendChild(renderWrapperButtons());

  window.application.renderBlock('footer', app);

  window.application.renderBlock(
    'winImage',
    document.querySelector('.header-logo')
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
    'footerLogo',
    document.querySelector('.footer')
  );
}
