function renderAuthorizationGameNotStartScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  const title = document.createElement('h1');
  title.classList.add('wrapper__header-tittle');
  title.textContent = 'GaMe Not Start, TrY AgaIN LaTeR';
  app.appendChild(title);

  window.application.renderBlock('mainImage', document.querySelector('.app'));

  const authorizationForm = document.createElement('form');
  authorizationForm.classList.add('authorization-form');
  app.appendChild(authorizationForm);

  window.application.renderBlock(
    'mainButton',
    document.querySelector('.authorization-form')
  );

  const footer = document.createElement('footer');
  footer.classList.add('wrapper__footer');
  app.appendChild(footer);
  window.application.renderBlock(
    'playLogoButton',
    document.querySelector('.wrapper__footer')
  );
}

function renderAuthorizationFinishedScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  const title = document.createElement('h1');
  title.classList.add('wrapper__header-tittle');
  title.textContent = 'GaMe FiNiShEd, TrY AgaIN';
  app.appendChild(title);

  window.application.renderBlock('mainImage', document.querySelector('.app'));

  const authorizationForm = document.createElement('form');
  authorizationForm.classList.add('authorization-form');
  app.appendChild(authorizationForm);

  window.application.renderBlock(
    'mainButton',
    document.querySelector('.authorization-form')
  );

  const footer = document.createElement('footer');
  footer.classList.add('wrapper__footer');
  app.appendChild(footer);
  window.application.renderBlock(
    'playLogoButton',
    document.querySelector('.wrapper__footer')
  );
}

function renderAuthorizationServerErrorScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  const title = document.createElement('h1');
  title.classList.add('wrapper__header-tittle');
  title.textContent = 'SoRRy!!!ErrOr SeRvEr!!, TrY AgaIN';
  app.appendChild(title);

  window.application.renderBlock('mainImage', document.querySelector('.app'));

  const authorizationForm = document.createElement('form');
  authorizationForm.classList.add('authorization-form');
  app.appendChild(authorizationForm);

  window.application.renderBlock(
    'mainButton',
    document.querySelector('.authorization-form')
  );

  const footer = document.createElement('footer');
  footer.classList.add('wrapper__footer');
  app.appendChild(footer);
  window.application.renderBlock(
    'playLogoButton',
    document.querySelector('.wrapper__footer')
  );
}
