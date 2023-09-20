function request(url, parameters, cb) {
    let paramsPair = '';
    let arrParams = [];
    const keys = Object.entries(parameters);

    for (let key of keys) {
        paramsPair = `${key[0]}` + '=' + `${key[1]}`;
        arrParams.push(paramsPair);
    }

    const paramsString = arrParams.join('&');

    fetch(`${url}?` + paramsString)
        .then((response) => response.json())
        .then(cb);
}