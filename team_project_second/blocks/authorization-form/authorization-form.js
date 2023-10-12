function renderAuthorizationForm(container) {
    const authorizationForm = document.createElement('form');
    authorizationForm.classList.add('authorization-form');

    container.appendChild(authorizationForm);
}

document.addEventListener('DOMContentLoaded', () => {
    window.application.blocks['authorization-form'] = renderAuthorizationForm;
});

