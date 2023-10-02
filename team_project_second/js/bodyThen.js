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
    window.application.renderScreen('renderPlayScreen');
    return;
  }

  window.application.status = status;
};

const setPlayerList = function (data) {
  document.querySelector('.wrapper__list').innerHTML = '';

  for (let i = 0; i < data.list.length; i++) {
    window.application.renderBlock(
      'player-list',
      document.querySelector('.wrapper__list'),
      'login: ' +
        data.list[i].login +
        '; wins: ' +
        data.list[i].wins +
        '; loses: ' +
        data.list[i].loses
    );
  }
};

function setStart(result) {
  if (result.message) {
    const messageError = result.message;
    if (messageError === 'player is already in game') {
      window.application.renderBlock(
        'renderModalGameAlready',
        document.querySelector('.app')
      );
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

  if (window.application.status === 'waiting-for-your-move') {
    window.application.renderScreen('renderPlayScreen');
    console.log('window.application.status', window.application.status);
  }

  if (window.application.status === 'lose') {
    window.application.renderScreen('renderPlayLoserScreen');
    console.log('window.application.status', window.application.status)
  }

  if (window.application.status === 'win') {
    window.application.renderScreen('renderPlayWinScreen');
    console.log('window.application.status', window.application.status)
  }
}

function setPlay(result) {
  if (!result) {
    return;
  }

  if (result.message) {
    const messageError = result.message;

    if (messageError === 'game not started') {
      window.application.renderBlock(
        'renderModalGameNotStart',
        document.querySelector('.app')
      );
    }

    if (messageError === 'game finished') {
      window.application.renderBlock(
        'renderModalGameNotFinished',
        document.querySelector('.app')
      );
    }
  } else {
    const statusLobby = result['game-status'].status;
    window.application.status = statusLobby;
  }
}
