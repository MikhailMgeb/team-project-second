function renderAuthorizationScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  app.appendChild(renderHeader('Rock Paper Scissors!!!!!!'));

  window.application.renderBlock(
    'headerLogoImage', 
    document.querySelector('.app')
  );

  window.application.renderBlock('authorization-form', app);

  window.application.renderBlock(
    'authorizationPage', 
    document.querySelector('.authorization-form')
  );

  window.application.renderBlock('footer', app);

  window.application.renderBlock(
    'footerLogo',
    document.querySelector('.footer')
  );
}
