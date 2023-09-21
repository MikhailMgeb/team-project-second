//--кнопка регистрация логина
function renderMainButton(container) {
    const autorizationForm = document.querySelector('.autorization-form')
    const mainButton = document.createElement('button');
    mainButton.textContent = 'login';
    mainButton.classList.add('wrapper__main-button');
    const inputUser = document.createElement('input');
    const labelInputUser = document.createElement('label');
    labelInputUser.textContent = 'Your Login.....';
    inputUser.classList.add('wrapper__input-user');

    autorizationForm.addEventListener('submit', (event) => {
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
        setTimeout(() => {
            if (window.application.status === "lobby") {
                window.application.renderScreen('renderLobbyScreen');
            }
        }, 1000);

    });
    container.appendChild(labelInputUser);
    container.appendChild(inputUser);
    container.appendChild(mainButton);
}