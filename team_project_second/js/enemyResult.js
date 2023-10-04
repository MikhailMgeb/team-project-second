function enemyResult(container) {

    const summaMove = window.application.enemyRocks + window.application.enemyPapers + window.application.enemyScissors;
    console.log(summaMove)
  
    titleHyst = document.createElement('p');
    titleHyst.classList.add('title_hyst')
    titleHyst.textContent =  'Login: ' + window.application.enemyLogin

    function width(move, summa) {
        const widthResult = move/summa * 100 + 70
        return widthResult }

    const widthRocks =  width(window.application.enemyRocks, summaMove)
   
    const widthPapers = width(window.application.enemyPapers,summaMove)
    
    const widthScissors = width(window.application.enemyScissors,summaMove)
    

    const rockHyst = document.createElement('div')
    rockHyst.classList.add('rock_hyst');
    rockHyst.textContent = 'Rocks: ' + window.application.enemyRocks;
    rockHyst.style.width =  widthRocks + 'px'
    
    const paperHyst = document.createElement('div')
    paperHyst.classList.add('paper_hyst')
    paperHyst.textContent = 'Papers: ' + window.application.enemyPapers;
    paperHyst.style.width =  widthPapers + 'px'

    const scissorsHyst = document.createElement('div')
    scissorsHyst.classList.add('scissors_hyst')
    scissorsHyst.textContent = 'Scissors: ' + window.application.enemyScissors;
    scissorsHyst.style.width =   widthScissors + 'px'
    
    container.appendChild(titleHyst)
    container.appendChild(rockHyst)
    container.appendChild(paperHyst)
    container.appendChild(scissorsHyst)

}