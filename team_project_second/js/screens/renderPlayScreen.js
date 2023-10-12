function renderPlayScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  app.appendChild(renderHeader("LeT's gO PlAy!!!!!!"));

  const wrapperChoosingAMove = document.createElement('div');
  wrapperChoosingAMove.classList.add('wrapper-choosing-a-move');

  wrapperChoosingAMove.appendChild(renderRockButton());

  wrapperChoosingAMove.appendChild(renderPaperButton());

  wrapperChoosingAMove.appendChild(renderScissorsButton());

  const opponentsMoves = document.createElement('div');
  opponentsMoves.classList.add('wrapper-opponents-moves', 'opponent-moves');
  opponentsMoves.textContent = "You are playing against";

  app.appendChild(wrapperChoosingAMove);

  window.application.renderBlock(
    'playPersonageRockButton',
    document.querySelector('.wrapper-choosing-a-move__rock-button')
  );

  window.application.renderBlock(
    'playPersonagePaperButton',
    document.querySelector('.wrapper-choosing-a-move__paper-button')
  );

  window.application.renderBlock(
    'playPersonageScissorsButton',
    document.querySelector('.wrapper-choosing-a-move__scissors-button')
  );

  app.appendChild(opponentsMoves)

  window.application.renderBlock('footer', app);

  window.application.renderBlock(
    'footerLogo',
    document.querySelector('.footer')
  );
}
