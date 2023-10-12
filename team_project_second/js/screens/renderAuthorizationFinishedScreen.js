function renderAuthorizationGameNotStartScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  app.appendChild(renderHeader('GaMe Not Start, TrY AgaIN LaTeR'));

  window.application.renderBlock('headerLogoImage', document.querySelector('.app'));

  window.application.renderBlock('authorization-form', app);

  window.application.renderBlock('authorizationPage', document.querySelector('.authorization-form'));

  window.application.renderBlock('footer', app);

  window.application.renderBlock('footerLogo', document.querySelector('.footer'));
}

function renderAuthorizationFinishedScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  app.appendChild(renderHeader('GaMe FiNiShEd, TrY AgaIN'));

  window.application.renderBlock('headerLogoImage', document.querySelector('.app'));

  window.application.renderBlock('authorization-form', app);

  window.application.renderBlock('authorizationPage', document.querySelector('.authorization-form'));

  window.application.renderBlock('footer', app);

  window.application.renderBlock('footerLogo', document.querySelector('.footer'));
}

function renderAuthorizationServerErrorScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  app.appendChild(renderHeader('SoRRy, ErrOr SeRvEr!!! TrY AgaIN'));

  window.application.renderBlock('headerLogoImage', document.querySelector('.app'));

  window.application.renderBlock('authorization-form', app);

  window.application.renderBlock('authorizationPage', document.querySelector('.authorization-form'));

  window.application.renderBlock('footer', app);
  
  window.application.renderBlock('footerLogo', document.querySelector('.footer'));
}
