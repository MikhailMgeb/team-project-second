const origin = 'https://skypro-rock-scissors-paper.herokuapp.com';

function getParamsString(parameters) {
  let paramsString = '';
  let arrParams = [];
  const keys = Object.entries(parameters);
  for (let key of keys) {
    paramsString = `${key[0]}` + '=' + `${key[1]}`;
    arrParams.push(paramsString);
  }
  return arrParams.join('&');
}

function getLogin(params) {
  return fetch(`${origin}/login?${getParamsString(params)}`)
    .then((response) => response.json())
    .catch(() => {
      window.application.renderBlock(
        'modalServer',
        document.querySelector('.app')
      )
    });
}

function getPlayerStatus(params) {
  return fetch(`${origin}/player-status?${getParamsString(params)}`)
    .then((response) => response.json())
    .catch(() => {
      window.application.renderBlock(
        'modalServer',
        document.querySelector('.app')
      )
    });
} 

function getPlayerList(params) {
  return fetch(`${origin}/player-list?${getParamsString(params)}`)
    .then((response) => response.json())
    .catch(() => {
      window.application.renderScreen('renderAuthorizationServerErrorScreen');
    });
}

function getGame(params) {
  return fetch(`${origin}/start?${getParamsString(params)}`)
    .then((response) => response.json())
    .catch(() => {
      window.application.renderBlock(
        'modalServer',
        document.querySelector('.app')
      )
    });
}
function getGameStatus(params) {
  return fetch(`${origin}/game-status?${getParamsString(params)}`)
    .then((response) => response.json())
    .catch(() => {
      window.application.renderBlock(
        'modalServer',
        document.querySelector('.app')
      )
    });
}
function getPlay(params) {
  return fetch(`${origin}/play?${getParamsString(params)}`)
    .then((response) => response.json())
    .catch(() => {
      window.application.renderBlock(
        'modalServer',
        document.querySelector('.app')
      )
    });
}