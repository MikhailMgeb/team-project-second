function renderauthorizationScreen() {
    const app = document.querySelector('.app');
    app.innerHTML = '';
  
    const containerHeader = document.createElement('div');
    containerHeader.classList.add('wrapper__header');
    app.appendChild(containerHeader);
  
    const title = document.createElement('h1');
    title.classList.add('app__main-tittle');
    title.textContent = 'Rock Paper Scissors!!!!!!';
    containerHeader.appendChild(title);
  
    window.application.renderBlock(
      'mainImage',
      document.querySelector('.wrapper__header')
    );
  
    const authorizationForm = document.createElement('form');
    authorizationForm.classList.add('authorization-form');
    app.appendChild(authorizationForm);
  
    window.application.renderBlock(
      'mainButton',
      document.querySelector('.authorization-form')
    );
  
    const containerFooter = document.createElement('div');
    containerFooter.classList.add('wrapper__footer');
    app.appendChild(containerFooter);
    window.application.renderBlock('playLogoButton', document.querySelector('.wrapper__footer'));
  }