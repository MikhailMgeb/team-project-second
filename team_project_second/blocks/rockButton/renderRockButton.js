function renderRockButton() {
    const rockButton = document.createElement('button');
    rockButton.classList.add('wrapper-choosing-a-move__rock-button', 'move-button');
    rockButton.value = 'rock';

    return rockButton;
}