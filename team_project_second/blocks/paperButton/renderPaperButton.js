function renderPaperButton() {
    const paperButton = document.createElement('button');
    paperButton.classList.add('wrapper-choosing-a-move__paper-button', 'move-button');
    paperButton.value = 'paper';

    return paperButton;
}