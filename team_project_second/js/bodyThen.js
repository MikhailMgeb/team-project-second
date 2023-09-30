const setToken = function (result) {
  console.log(result);
  let tokenUser = result.token;
  window.application.token = tokenUser;
  console.log(tokenUser);
  const params = {
    token: window.application.token,
  };
  const getPlayerStatusRequest = getPlayerStatus(params);
  getPlayerStatusRequest.then((status) => playerStatus(status));
};

const playerStatus = function (result) {
  console.log(result['player-status'].status);
  const status = result['player-status'].status;
  if (result['player-status'].status === 'game') {
    window.application.id = result['player-status'].game.id;
    window.application.renderScreen('renderPlayScreen');
    return;
  }
  console.log(result);

  window.application.status = status;
};

const setPlayerList = function (data) {
  document.querySelector('.wrapper-list').innerHTML = '';

  for (let i = 0; i < data.list.length; i++) {
    window.application.renderBlock(
      'player-list',
      document.querySelector('.wrapper-list'),
      data.list[i].login
    );
  }
};

function setStart(result) {
  console.log(result);

  const gameId = result['player-status'].game.id;

  window.application.id = gameId;
}

function setGameStatus(result) {
  console.log(result['game-status'].status);

  const statusLobby = result['game-status'].status;

  console.log(statusLobby);
  window.application.status = statusLobby;
  if (window.application.status === 'waiting-for-your-move') {
    clearInterval(refreshGameStatusWait);
    window.application.renderScreen('renderPlayScreen');
  }
  if (window.application.status === 'lose') {
    clearInterval(refreshGameStatusWait);
    window.application.renderScreen('renderPlayLoserScreen');
  }
  if (window.application.status === 'win') {
    clearInterval(refreshGameStatusWait);
    window.application.renderScreen('renderPlayWinScreen');
  }
}

function setPlay(result) {
  const valuesStatus = result.message;

  if (valuesStatus === 'game not started') {
    window.application.renderScreen('renderAutorizationGameNotStartScreen');
  }
  if (valuesStatus === 'game finished') {
    window.application.renderScreen('renderAutorizationFinishedScreen');
  }
  const statusLobby = result['game-status'].status;
  window.application.status = statusLobby;

  console.log(statusLobby);
}
