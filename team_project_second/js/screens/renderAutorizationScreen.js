function renderAutorizationScreen() {
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
  
    const autorizationForm = document.createElement('form');
    autorizationForm.classList.add('autorization-form');
    app.appendChild(autorizationForm);
  
    window.application.renderBlock(
      'mainButton',
      document.querySelector('.autorization-form')
    );
  
    const containerFooter = document.createElement('div');
    containerFooter.classList.add('wrapper__footer');
    app.appendChild(containerFooter);
    window.application.renderBlock('playLogotipButton', document.querySelector('.wrapper__footer'));
  }