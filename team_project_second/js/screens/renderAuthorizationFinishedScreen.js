function renderAuthorizationGameNotStartScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  app.appendChild(renderHeader('GaMe Not Start, TrY AgaIN LaTeR'));

  window.application.renderBlock(
    'mainImage', 
    document.querySelector('.app')
  );

  const authorizationForm = document.createElement('form');
  authorizationForm.classList.add('authorization-form');
  app.appendChild(authorizationForm);

  window.application.renderBlock(
    'mainButton',
    document.querySelector('.authorization-form')
  );

  const footer = document.createElement('footer');
  footer.classList.add('footer');
  app.appendChild(footer);

  window.application.renderBlock(
    'renderFooterLogo',
    document.querySelector('.footer')
  );
}

function renderAuthorizationFinishedScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  app.appendChild(renderHeader('GaMe FiNiShEd, TrY AgaIN'));

  window.application.renderBlock(
    'mainImage', 
    document.querySelector('.app')
  );

  const authorizationForm = document.createElement('form');
  authorizationForm.classList.add('authorization-form');
  app.appendChild(authorizationForm);

  window.application.renderBlock(
    'mainButton',
    document.querySelector('.authorization-form')
  );

  const footer = document.createElement('footer');
  footer.classList.add('footer');
  app.appendChild(footer);

  window.application.renderBlock(
    'renderFooterLogo',
    document.querySelector('.footer')
  );
}

function renderAuthorizationServerErrorScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  app.appendChild(renderHeader('SoRRy!!!ErrOr SeRvEr!!, TrY AgaIN'));

  window.application.renderBlock(
    'mainImage', 
    document.querySelector('.app')
  );

  const authorizationForm = document.createElement('form');
  authorizationForm.classList.add('authorization-form');
  app.appendChild(authorizationForm);

  window.application.renderBlock(
    'mainButton',
    document.querySelector('.authorization-form')
  );

  const footer = document.createElement('footer');
  footer.classList.add('footer');
  app.appendChild(footer);
  
  window.application.renderBlock(
    'renderFooterLogo',
    document.querySelector('.footer')
  );
}
