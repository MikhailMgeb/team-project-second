function renderPlayPersonageRockButton(container) {
  const playPersonageRockButton = document.createElement('img');

  playPersonageRockButton.classList.add('personage-button');
  playPersonageRockButton.src = '/image/rock.jpeg';

  container.appendChild(playPersonageRockButton);

  playPersonageRockButton.addEventListener('click', () => {
    const params = {
      token: window.application.token,
      id: window.application.id,
      move: 'rock',
    };
    const getPlayRequest = getPlay(params);
    getPlayRequest.then((play) => setPlay(play));

    setTimeout(() => {
      if (window.application.status === 'waiting-for-enemy-move') {
        window.application.renderScreen('renderWaitingMoveScreen');
      }
      if (window.application.status === 'lose') {
        window.application.renderScreen('renderPlayLoserScreen');
      }
      if (window.application.status === 'win') {
        window.application.renderScreen('renderPlayWinScreen');
      }
      if(window.application.status === 'waiting-for-enemy-move'){
        window.application.renderScreen('renderWaitingMoveScreen')
      }
    }, 1000);
  });
}

function renderPlayPersonageScissorsButton(container) {
  const playPersonageScissorsButton = document.createElement('img');

  playPersonageScissorsButton.classList.add('personage-button');
  playPersonageScissorsButton.src = '/image/scissors.jpeg';

  container.appendChild(playPersonageScissorsButton);

  playPersonageScissorsButton.addEventListener('click', () => {
    const params = {
      token: window.application.token,
      id: window.application.id,
      move: 'scissors',
    };
    const getPlayRequest = getPlay(params);
    getPlayRequest.then((play) => setPlay(play));

    setTimeout(() => {
      if (window.application.status === 'waiting-for-enemy-move') {
        window.application.renderScreen('renderWaitingMoveScreen');
      }
      if (window.application.status === 'lose') {
        window.application.renderScreen('renderPlayLoserScreen');
      }
      if (window.application.status === 'win') {
        window.application.renderScreen('renderPlayWinScreen');
      }
      if(window.application.status === 'waiting-for-enemy-move'){
        window.application.renderScreen('renderWaitingMoveScreen')
      }
    }, 1000);
  });
}

function renderPlayPersonagePaperButton(container) {
  const playPersonagePaperButton = document.createElement('img');

  playPersonagePaperButton.classList.add('personage-button');
  playPersonagePaperButton.src = '/image/paper.jpeg';

  container.appendChild(playPersonagePaperButton);

  playPersonagePaperButton.addEventListener('click', () => {
    const params = {
      token: window.application.token,
      id: window.application.id,
      move: 'paper',
    };
    const getPlayRequest = getPlay(params);
    getPlayRequest.then((play) => setPlay(play));
    setTimeout(() => {
      if (window.application.status === 'waiting-for-enemy-move') {
        window.application.renderScreen('renderWaitingMoveScreen');
      }
      if (window.application.status === 'lose') {
        window.application.renderScreen('renderPlayLoserScreen');
      }
      if (window.application.status === 'win') {
        window.application.renderScreen('renderPlayWinScreen');
      }
      if(window.application.status === 'waiting-for-enemy-move'){
        window.application.renderScreen('renderWaitingMoveScreen')
      }
    }, 1000);
  });
}
