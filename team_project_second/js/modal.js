function request(url, parameters, cb) {
    let saveParams = '';
    let arrParams = [];
    const keys = Object.entries(parameters);
    console.log(keys);
    for (let key of keys) {
        saveParams = `${key[0]}` + '=' + `${key[1]}`;
        arrParams.push(saveParams);
    }
    const getParameters = arrParams.join('&');

    fetch(`${url}` + getParameters)
        .then((response) => response.json())
        .then(cb);
}