function renderPlayLoserScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  app.appendChild(renderHeader("YoU LoSe! :(((((( DoN't WoRrY :)"));

  app.appendChild(renderHeaderLogo());

  app.appendChild(renderWrapperButtons());

  window.application.renderBlock('footer', app);

  window.application.renderBlock(
    'loserImage',
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
