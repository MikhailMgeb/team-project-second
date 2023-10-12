function renderPlayPersonageRockButton(container) {
  const personageRock = document.createElement('img');

  personageRock.classList.add('move-button__personage');
  personageRock.src = '/image/rock.jpeg';

  container.appendChild(personageRock);

  personageRock.addEventListener('click', () => {
    const params = {
      token: window.application.token,
      id: window.application.id,
      move: 'rock',
    };
    const getPlayRequest = getPlay(params);
    getPlayRequest.then((play) => setPlay(play));

    setTimeout(() => {
      if (window.application.status === 'waiting-for-enemy-move') {
        window.application.renderScreen('waitingMoveScreen');
      }
      if (window.application.status === 'lose') {
        window.application.renderScreen('playLoserScreen');
      }
      if (window.application.status === 'win') {
        window.application.renderScreen('playWinScreen');
      }
      if(window.application.status === 'waiting-for-enemy-move'){
        window.application.renderScreen('waitingMoveScreen')
      }
    }, 1000);
  });
}

function renderPlayPersonageScissorsButton(container) {
  const personageScissors = document.createElement('img');

  personageScissors.classList.add('move-button__personage');
  personageScissors.src = '/image/scissors.jpeg';

  container.appendChild(personageScissors);

  personageScissors.addEventListener('click', () => {
    const params = {
      token: window.application.token,
      id: window.application.id,
      move: 'scissors',
    };
    const getPlayRequest = getPlay(params);
    getPlayRequest.then((play) => setPlay(play));

    setTimeout(() => {
      if (window.application.status === 'waiting-for-enemy-move') {
        window.application.renderScreen('waitingMoveScreen');
      }
      if (window.application.status === 'lose') {
        window.application.renderScreen('playLoserScreen');
      }
      if (window.application.status === 'win') {
        window.application.renderScreen('playWinScreen');
      }
      if(window.application.status === 'waiting-for-enemy-move'){
        window.application.renderScreen('waitingMoveScreen')
      }
    }, 1000);
  });
}

function renderPlayPersonagePaperButton(container) {
  const personagePaper = document.createElement('img');

  personagePaper.classList.add('move-button__personage');
  personagePaper.src = '/image/paper.jpeg';

  container.appendChild(personagePaper);

  personagePaper.addEventListener('click', () => {
    const params = {
      token: window.application.token,
      id: window.application.id,
      move: 'paper',
    };
    const getPlayRequest = getPlay(params);
    getPlayRequest.then((play) => setPlay(play));
    setTimeout(() => {
      if (window.application.status === 'waiting-for-enemy-move') {
        window.application.renderScreen('waitingMoveScreen');
      }
      if (window.application.status === 'lose') {
        window.application.renderScreen('playLoserScreen');
      }
      if (window.application.status === 'win') {
        window.application.renderScreen('playWinScreen');
      }
      if(window.application.status === 'waiting-for-enemy-move'){
        window.application.renderScreen('waitingMoveScreen')
      }
    }, 1000);
  });
}
