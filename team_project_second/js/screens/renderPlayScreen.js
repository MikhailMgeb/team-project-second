function renderPlayScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  const title = document.createElement('h1');
  title.classList.add('header-tittle');
  title.textContent = "LeT's gO PlAy!!!!!!";

  app.appendChild(title);

  const wrapperChoiceMove = document.createElement('div');

  const rockButton = document.createElement('button');
  rockButton.classList.add('wrapper__rock-button', 'move-button');
  rockButton.value = 'rock';
  wrapperChoiceMove.appendChild(rockButton);

  const pockButton = document.createElement('button');
  pockButton.classList.add('wrapper__pock-button', 'move-button');
  pockButton.value = 'paper';
  wrapperChoiceMove.appendChild(pockButton);

  const scissorsButton = document.createElement('button');
  scissorsButton.classList.add('wrapper__scissors-button', 'move-button');
  scissorsButton.value = 'scissors';
  wrapperChoiceMove.appendChild(scissorsButton);

  wrapperChoiceMove.classList.add('wrapper__choice-move');

  const wrapperResult = document.createElement('div')
  wrapperResult.classList.add('wrapper_enemy-data')
  wrapperResult.textContent = "You are playing against" 



  app.appendChild(wrapperChoiceMove);

  window.application.renderBlock(
    'playPersonageRockButton',
    document.querySelector('.wrapper__rock-button')
  );

  window.application.renderBlock(
    'playPersonagePaperButton',
    document.querySelector('.wrapper__pock-button')
  );

  window.application.renderBlock(
    'playPersonageScissorsButton',
    document.querySelector('.wrapper__scissors-button')
  );

  app.appendChild(wrapperResult)

  const footer = document.createElement('footer');
  footer.classList.add('wrapper__footer');
  app.appendChild(footer);

  window.application.renderBlock(
    'renderFooterLogo',
    document.querySelector('.wrapper__footer')
  );
}
