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

// window.application.screens['autorizationScreen'] = renderAutorizationScreen;



function renderLobbyScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  // fetch(`https://skypro-rock-scissors-paper.herokuapp.com/player-status?token=${window.application.token}`)
  //   .then((response) => response.json())
  //   .then((data) => { console.log(data) })

  // fetch(`https://skypro-rock-scissors-paper.herokuapp.com/start?token=${window.application.token}`)
  //   .then((response) => response.json())
  //   .then((data) => { console.log(data) })

  const titleLobby = document.createElement('h1');
  titleLobby.classList.add('app__main-tittle');
  titleLobby.textContent = 'LOBBY - Rock Paper Scissors!!!!!!';

  const content = document.createElement('div');
  content.classList.add('wrapper');

  const blockListPlayer = document.createElement('div');
  blockListPlayer.classList.add('blockListPlayer');

  app.appendChild(titleLobby);
  app.appendChild(content);

  window.application.renderBlock(
    'mainImage',
    document.querySelector('.wrapper')
  );

  //-------Загрузка листа клиентов
  const intervalId = setInterval(function () {
    fetch(`https://skypro-rock-scissors-paper.herokuapp.com/player-list`)
      .then((response) => response.json())
      .then((data) => {
        document.querySelector('.wrapper').innerHTML = '';

        for (let i = 0; i < data.list.length; i++) {
          window.application.renderBlock('player-list', document.querySelector('.wrapper'), data.list[i].login);
        }
        window.application.renderBlock('playLobbyButton', document.querySelector('.wrapper')); // кнопка входа в игру
      })
  }, 1000)
  window.application.renderBlock('playLogotipButton', document.querySelector('.wrapper')); // логотип футера 
}

// window.application.screens['renderLobbyScreen'] = renderLobbyScreen;


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
// window.application.screens['renderWaitingScreen'] = renderWaitingScreen;


function renderPlayScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  const titlePlay = document.createElement('h1');
  titlePlay.classList.add('app__main-tittle');
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
// window.application.screens['renderPlayScreen'] = renderPlayScreen;


function renderPlayLoserScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  const titlePlayLoser = document.createElement('h1');
  titlePlayLoser.classList.add('app__main-tittle');
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
// window.application.screens['renderPlayLoserScreen'] = renderPlayLoserScreen;


function renderPlayWinScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  const titlePlayWin = document.createElement('h1');
  titlePlayWin.classList.add('app__main-tittle');
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
// window.application.screens['renderPlayWinScreen'] = renderPlayWinScreen;



