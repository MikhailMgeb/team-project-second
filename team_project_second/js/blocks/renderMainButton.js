function renderMainButton(container) {
    const authorizationForm = document.querySelector('.authorization-form')
    const mainButton = document.createElement('button');
    mainButton.textContent = 'login';
    mainButton.classList.add('wrapper__main-button');
    const inputUser = document.createElement('input');
    const labelInputUser = document.createElement('label');
    labelInputUser.textContent = 'Your Login.....';
    inputUser.classList.add('wrapper__input-user');
    console.log(window.application)

    authorizationForm.addEventListener('submit', (event) => {
        event.preventDefault();

        mainButton.disabled = true;
        const loginUser = inputUser.value;

        const params = {
            login: loginUser
        };

        request(
            `https://skypro-rock-scissors-paper.herokuapp.com/login`,
            params,
            setToken
        );
        if (window.application.status === "lobby") {
            window.application.renderScreen('renderLobbyScreen');
        }


    });
    container.appendChild(labelInputUser);
    container.appendChild(inputUser);
    container.appendChild(mainButton);
}