function renderWaitingScreen() {
    const app = document.querySelector('.app');
    app.innerHTML = '';
  
    const titleWaiting = document.createElement('h1');
    titleWaiting.classList.add('app__main-tittle');
    titleWaiting.textContent = 'WaItInG PlAy!!!!!!';
  
    const content = document.createElement('div');
    content.classList.add('wrapper');
  
    app.appendChild(titleWaiting);
    app.appendChild(content);
    window.application.renderBlock(
      'mainImage',
      document.querySelector('.wrapper')
    );
    window.application.renderBlock('playLogotipButton', document.querySelector('.wrapper'));
  }