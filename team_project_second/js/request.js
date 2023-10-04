const origin = 'https://skypro-rock-scissors-paper.herokuapp.com';

function catchError() {
  renderModal(
    'renderAuthorizationServerErrorScreen',
    'Sorry, Server ErroR',
    document.querySelector('.app')
  );
}

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
    .catch(catchError);
}

function getPlayerStatus(params) {
  return fetch(`${origin}/player-status?${getParamsString(params)}`)
    .then((response) => response.json())
    .catch(catchError);
}

function getPlayerList(params) {
  return fetch(`${origin}/player-list?${getParamsString(params)}`)
    .then((response) => response.json())
    .catch(catchError);
}

function getGame(params) {
  return fetch(`${origin}/start?${getParamsString(params)}`)
    .then((response) => response.json())
    .catch(catchError);
}
function getGameStatus(params) {
  return fetch(`${origin}/game-status?${getParamsString(params)}`)
    .then((response) => response.json())
    .catch(catchError);
}
function getPlay(params) {
  return fetch(`${origin}/play?${getParamsString(params)}`)
    .then((response) => response.json())
    .catch(catchError);
}
