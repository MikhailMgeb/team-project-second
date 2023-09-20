function setToken(result) {
    console.log(result);

    let tokenUser = result.token;
    window.application.token = tokenUser;
    console.log(tokenUser);

    const params = {
        token: window.application.token,
    };

    request(
        `https://skypro-rock-scissors-paper.herokuapp.com/player-status`,
        params,
        playerStatus
    );
};

const playerStatus = function (result) {
    const valuesResult = Object.values(result);
    console.log(result)
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
    document.querySelector('.wrapper').innerHTML = ''
    console.log(data.list[0].login);
    for (let i = 0; i < data.list.length; i++) {
        console.log(data.list[i].login);
        window.application.renderBlock('player-list', document.querySelector('.wrapper'), data.list[i].login);
    }

    window.application.renderBlock('playLobbyButton', document.querySelector('.wrapper'));
    window.application.renderBlock('playLogotipButton', document.querySelector('.wrapper'));
}