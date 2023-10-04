function enemyResult(container) {
  const summaMove =
    window.application.enemyRocks +
    window.application.enemyPapers +
    window.application.enemyScissors;
  console.log(summaMove);

  titleBarChart = document.createElement('p');
  titleBarChart.classList.add('title_bar-chart');
  titleBarChart.textContent = 'Login: ' + window.application.enemyLogin;

  function width(move, summa) {
    const widthResult = (move / summa) * 100 + 70;
    return widthResult;
  }

  const widthRocks = width(window.application.enemyRocks, summaMove);

  const widthPapers = width(window.application.enemyPapers, summaMove);

  const widthScissors = width(window.application.enemyScissors, summaMove);

  const rockBarChart = document.createElement('div');
  rockBarChart.classList.add('rock_bar-chart');
  rockBarChart.textContent = 'Rocks: ' + window.application.enemyRocks;
  rockBarChart.style.width = widthRocks + 'px';

  const paperBarChart = document.createElement('div');
  paperBarChart.classList.add('paper_bar-chart');
  paperBarChart.textContent = 'Papers: ' + window.application.enemyPapers;
  paperBarChart.style.width = widthPapers + 'px';

  const scissorsBarChart = document.createElement('div');
  scissorsBarChart.classList.add('scissors_bar-chart');
  scissorsBarChart.textContent = 'Scissors: ' + window.application.enemyScissors;
  scissorsBarChart.style.width = widthScissors + 'px';

  container.appendChild(titleBarChart);
  container.appendChild(rockBarChart);
  container.appendChild(paperBarChart);
  container.appendChild(scissorsBarChart);
}
