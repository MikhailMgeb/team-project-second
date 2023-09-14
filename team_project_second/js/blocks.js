function renderEnterGameButton(container) {
    const button = document.createElement('button');

    button.addEventListener('click', () => {
        console.log('click');
    });

    container.appendChild(button);
}

window.application.blocks['renderEnterGameButton'] = renderEnterGameButton;

function renderInputName(container) {
    const label = document.createElement('label');
    label.textContent = 'Никнейм';

    const input = document.createElement('input');
    input.placeholder = 'Введите никнейм';
    
    label.appendChild(input);
}

window.application.blocks['renderInputName'] = renderInputName;