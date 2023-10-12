const setToken = function (result) {
  // console.log(result);
  let tokenUser = result.token;
  window.application.token = tokenUser;
  const params = { token: window.application.token };

  const getPlayerStatusRequest = getPlayerStatus(params);
  getPlayerStatusRequest.then((status) => playerStatus(status));
};

const playerStatus = function (result) {
  const status = result['player-status'].status;

  if (result['player-status'].status === 'game') {
    window.application.id = result['player-status'].game.id;
    const params = {
      token: window.application.token,
      id: window.application.id,
    };
    // window.application.renderScreen('playScreen');
    const getGameStatusRequest = getGameStatus(params);
    getGameStatusRequest.then((gameStatus) => {
      setGameStatus(gameStatus);
      console.log('status', window.application.status);

      if (window.application.status === 'waiting-for-your-move') {
        console.log('window.application.status', window.application.status);
        const enemyLogin = result['game-status'].enemy.login;
        window.application.enemyLogin = enemyLogin;
        const enemyRocks = result['game-status'].enemy.rocks;
        window.application.enemyRocks = enemyRocks;
        const enemyPapers = result['game-status'].enemy.papers;
        window.application.enemyPapers = enemyPapers;
        const enemyScissors = result['game-status'].enemy.scissors;
        window.application.enemyScissors = enemyScissors;

        window.application.renderScreen('playScreen');
        window.application.renderBlock(
          'enemyMoves',
          document.querySelector('.wrapper-opponents-moves')
        );
        console.log('window.application.status', window.application.status);
      }
    });
    return;
  }

  window.application.status = status;
};

function setPlayerList(data) {
  const ListWrapper = document.querySelector('.list-wrapper');
  if (ListWrapper) {
    ListWrapper.innerHTML = '';
  }

  for (let i = 0; i < data.list.length; i++) {
    window.application.renderBlock(
      'renderPlayerList',

      document.querySelector('.list-wrapper'),
      
      'login: ' +
        data.list[i].login +
        '; wins: ' +
        data.list[i].wins +
        '; loses: ' +
        data.list[i].loses
    );
  }
}

function setStart(result) {
  if (result.message) {
    const messageError = result.message;
    console.log('messageSetStar', messageError);

    if (messageError === 'player is already in game') {
      const renderTypeScreen = 'authorizationScreen';
      const errorText = 'SoRRy, PlaYer iS aLrEaDy iN gAmE!!';
      const container = document.querySelector('.app');

      renderModalWindow(renderTypeScreen, errorText, container);
    }
  }
  const gameId = result['player-status'].game.id;

  window.application.id = gameId;
}

function setGameStatus(result) {
  console.log('setGameStatus', result);

  if (!result) {
    return;
  }

  const statusLobby = result['game-status'].status;
  window.application.status = statusLobby;

  console.log('statusLobby', statusLobby);

  if (
    (window.application.status === 'waiting-for-your-move' ||
      'waiting-for-start') &&
    result['game-status'].enemy
  ) {
    console.log('window.application.status', window.application.status);

    const enemyLogin = result['game-status'].enemy.login;
    window.application.enemyLogin = enemyLogin;
    const enemyRocks = result['game-status'].enemy.rocks;
    window.application.enemyRocks = enemyRocks;
    const enemyPapers = result['game-status'].enemy.papers;
    window.application.enemyPapers = enemyPapers;
    const enemyScissors = result['game-status'].enemy.scissors;
    window.application.enemyScissors = enemyScissors;

    window.application.renderScreen('playScreen');
    window.application.renderBlock(
      'enemyMoves',
      document.querySelector('.wrapper-opponents-moves')
    );
    console.log('window.application.status', window.application.status);
  }

  if (window.application.status === 'lose') {
    window.application.renderScreen('playLoserScreen');
    console.log('window.application.status', window.application.status);
  }

  if (window.application.status === 'win') {
    window.application.renderScreen('playWinScreen');
    console.log('window.application.status', window.application.status);
  }
}

function setPlay(result) {
  if (!result) {
    return;
  }

  if (result.message) {
    const messageError = result.message;
    console.log('message setPlay', messageError);
    const container = document.querySelector('.app');

    if (messageError === 'game not started') {
      const renderTypeScreen = 'authorizationGameNotStartScreen';
      const errorText = 'Game not start!!!';

      renderModalWindow(renderTypeScreen, errorText, container);
    }

    if (messageError === 'game finished') {
      const renderTypeScreen = 'authorizationFinishedScreen';
      const errorText = 'SoRRy, GaMe  FiNiSheD!!!, tRy AgAiN!!';

      renderModalWindow(renderTypeScreen, errorText, container);
    }
  } else {
    const statusLobby = result['game-status'].status;
    window.application.status = statusLobby;
  }
}
