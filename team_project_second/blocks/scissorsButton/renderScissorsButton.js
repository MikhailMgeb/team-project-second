function renderScissorsButton() {
    const scissorsButton = document.createElement('button');
    scissorsButton.classList.add('wrapper-choosing-a-move__scissors-button', 'move-button');
    scissorsButton.value = 'scissors';

    return scissorsButton;
}