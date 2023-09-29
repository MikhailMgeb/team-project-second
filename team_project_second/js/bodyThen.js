const setToken = function (result) {
  let tokenUser = result.token;
  window.application.token = tokenUser;

  const params = {
    token: window.application.token,
  };

  const getPlayerStatusRequest = getPlayerStatus(params);
  getPlayerStatusRequest.then((status) => playerStatus(status));
};

const playerStatus = function (result) {
  if (result['player-status'].status === 'game') {
    window.application.id = result['player-status'].game.id;
    window.application.renderScreen('renderPlayScreen');
    return;
  }

  const valuesResult = Object.values(result);
  const valuesStatus = valuesResult[1];
  const valuesGame = valuesResult[2];
  if (valuesResult[2]) {
    const game = Object.values(valuesGame);
    const gameId = game.join();
    window.application.id = gameId;
  }
  const status = Object.values(valuesStatus);
  const statusLobby = status.join();
  window.application.status = statusLobby;
};

const setPlayerList = function (data) {
  const wrapperList = document.querySelector('.wrapper__list');
  wrapperList.innerHTML = '';

  for (let i = 0; i < data.list.length; i++) {
    window.application.renderBlock(
      'player-list',
      document.querySelector('.wrapper__list'),
      data.list[i].login
    );
  }
};

function setStart(result) {
  const gameId = result['player-status'].game.id;

  window.application.id = gameId;
}

function setGameStatus(result) {

  if (result === undefined) {
    return;
  }

  const statusLobby = result['game-status'].status;
  // console.log('setGameStatus result', result);

  window.application.status = statusLobby;

  if (window.application.status === 'waiting-for-your-move') {
    window.application.renderScreen('renderPlayScreen');
  }
  if (window.application.status === 'lose') {
    window.application.renderScreen('renderPlayLoserScreen');
  }
  if (window.application.status === 'win') {
    window.application.renderScreen('renderPlayWinScreen');
  }
}

function setPlay(result) {
  const status = result.message;

  if (status === 'game not started') {
    window.application.renderScreen('renderAuthorizationGameNotStartScreen');
  }

  if (status === 'game finished') {
    window.application.renderScreen('renderAuthorizationFinishedScreen');
  }

  if (window.application.status === 'waiting-for-enemy-move') {
    window.application.renderScreen('renderWaitingMoveScreen');
  }

  if (window.application.status === 'lose') {
    window.application.renderScreen('renderPlayLoserScreen');
  }

  if (window.application.status === 'win') {
    window.application.renderScreen('renderPlayWinScreen');
  }

  console.log('status', status)
  const valuesStatusGame = Object.entries(status);
  const statusLobby = valuesStatusGame[0][1];
  window.application.status = statusLobby;
}
