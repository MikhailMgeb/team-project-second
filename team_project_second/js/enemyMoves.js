function renderEnemyMoves(container) {
  const summaMove =
    window.application.enemyRocks +
    window.application.enemyPapers +
    window.application.enemyScissors;

  opponentName = document.createElement('p');
  opponentName.classList.add('opponent-moves__opponent-name', 'opponent-name');
  opponentName.textContent = window.application.enemyLogin;

  function width(move, summa) {
    return (move / summa) * 100 + 80;
  }

  const widthRocks = width(window.application.enemyRocks, summaMove);

  const widthPapers = width(window.application.enemyPapers, summaMove);

  const widthScissors = width(window.application.enemyScissors, summaMove);

  const rockMoves = document.createElement('div');
  rockMoves.classList.add('opponent-moves__rock-moves', 'rock-moves');
  rockMoves.textContent = 'Rocks: ' + window.application.enemyRocks;
  rockMoves.style.width = widthRocks + 'px';

  const paperMoves = document.createElement('div');
  paperMoves.classList.add('opponent-moves__paper-moves', 'paper-moves');
  paperMoves.textContent = 'Papers: ' + window.application.enemyPapers;
  paperMoves.style.width = widthPapers + 'px';

  const scissorsMoves = document.createElement('div');
  scissorsMoves.classList.add('opponent-moves__scissors-moves', 'scissors-moves');
  scissorsMoves.textContent = 'Scissors: ' + window.application.enemyScissors;
  scissorsMoves.style.width = widthScissors + 'px';

  container.appendChild(opponentName);
  container.appendChild(rockMoves);
  container.appendChild(paperMoves);
  container.appendChild(scissorsMoves);
}
