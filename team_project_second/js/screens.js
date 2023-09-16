function renderAutorizationScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  const title = document.createElement('h1');
  title.classList.add('main-tittle');
  title.textContent = 'Rock Paper Scissors!!!!!!';

  const content = document.createElement('div');
  content.classList.add('wrapper');

  app.appendChild(title);
  app.appendChild(content);

  window.application.renderBlock(
    'mainImage',
    document.querySelector('.wrapper')
  );

  /*window.application.renderBlock(
    'inputUser',
    document.querySelector('.wrapper')
  );*/
  window.application.renderBlock(
    'mainButton',
    document.querySelector('.wrapper')
  );
  window.application.renderBlock('playLogotipButton', document.querySelector('.wrapper'));
}
window.application.screens['autorizationScreen'] = renderAutorizationScreen;


function renderLobbyScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';


  const titleLobby = document.createElement('h1');
  titleLobby.classList.add('main-tittle');
  titleLobby.textContent = 'LOBBY - Rock Paper Scissors!!!!!!';

  const content = document.createElement('div');
  content.classList.add('wrapper');

  app.appendChild(titleLobby);
  app.appendChild(content);

  window.application.renderBlock(
    'mainImage',
    document.querySelector('.wrapper')
  );
  window.application.renderBlock('input', document.querySelector('.wrapper'));
  window.application.renderBlock('input', document.querySelector('.wrapper'));
  window.application.renderBlock('input', document.querySelector('.wrapper'));
  window.application.renderBlock(
    'playLobbyButton',
    document.querySelector('.wrapper')
  );
  window.application.renderBlock('playLogotipButton', document.querySelector('.wrapper'));
}
window.application.screens['renderLobbyScreen'] = renderLobbyScreen;


function renderWaitingScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  const titleWaiting = document.createElement('h1');
  titleWaiting.classList.add('main-tittle');
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
window.application.screens['renderWaitingScreen'] = renderWaitingScreen;


function renderPlayScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  const titlePlay = document.createElement('h1');
  titlePlay.classList.add('main-tittle');
  titlePlay.textContent = 'LeTs gO PlAy!!!!!!';

  const content = document.createElement('div');
  content.classList.add('wrapper');

  app.appendChild(titlePlay);
  app.appendChild(content);

  window.application.renderBlock(
    'mainImage',
    document.querySelector('.wrapper')
  );
  window.application.renderBlock('playPersonageRockButton', document.querySelector('.wrapper'));
  window.application.renderBlock('playPersonageScissorsButton', document.querySelector('.wrapper'));
  window.application.renderBlock('playPersonagePaperButton', document.querySelector('.wrapper'));
  window.application.renderBlock('playLogotipButton', document.querySelector('.wrapper'));
}
window.application.screens['renderPlayScreen'] = renderPlayScreen;


function renderPlayLoserScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  const titlePlayLoser = document.createElement('h1');
  titlePlayLoser.classList.add('main-tittle');
  titlePlayLoser.textContent = 'YoU LoSe:((((!!!!!!DoNt WoRrY)';

  const content = document.createElement('div');
  content.classList.add('wrapper');

  app.appendChild(titlePlayLoser);
  app.appendChild(content);


  window.application.renderBlock('loserImage', document.querySelector('.wrapper'));
  window.application.renderBlock('continueButton', document.querySelector('.wrapper'));
  window.application.renderBlock('returnLobbyButton', document.querySelector('.wrapper'));

  window.application.renderBlock('playLogotipButton', document.querySelector('.wrapper'));
}
window.application.screens['renderPlayLoserScreen'] = renderPlayLoserScreen;


function renderPlayWinScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  const titlePlayWin = document.createElement('h1');
  titlePlayWin.classList.add('main-tittle');
  titlePlayWin.textContent = 'YoU WiN:))))))))';

  const content = document.createElement('div');
  content.classList.add('wrapper');

  app.appendChild(titlePlayWin);
  app.appendChild(content);


  window.application.renderBlock('winImage', document.querySelector('.wrapper'));
  window.application.renderBlock('continueButton', document.querySelector('.wrapper'));
  window.application.renderBlock('returnLobbyButton', document.querySelector('.wrapper'));

  window.application.renderBlock('playLogotipButton', document.querySelector('.wrapper'));
}
window.application.screens['renderPlayWinScreen'] = renderPlayWinScreen;



