function renderModal(container) {

    const modalOver = document.createElement('div');
    modalOver.classList.add('modal_over');
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal_content')
    modalContent.textContent = 'SoRRy SeRveR ErroR!!!, tRy AgAiN!!'
    const modalButton = document.createElement('button');
    modalButton.classList.add('modal_button');
    modalButton.textContent = 'TrY AgAiN'
    modalButton.addEventListener('click', () =>{
        window.application.renderScreen('renderAuthorizationServerErrorScreen')
      
    })

    container.appendChild(modalOver)
    modalOver.appendChild(modalContent)
    modalOver.appendChild(modalButton)
}


function renderModalGameNotStart(container) {

    const modalOver = document.createElement('div');
    modalOver.classList.add('modal_over');
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal_content')
    modalContent.textContent = 'SoRRy GaMe did NoT sTaRt!!!, tRy AgAiN!!'
    const modalButton = document.createElement('button');
    modalButton.classList.add('modal_button');
    modalButton.textContent = 'TrY AgAiN'
    modalButton.addEventListener('click', () =>{
        window.application.renderScreen('renderAuthorizationGameNotStartScreen')
      
    })

    container.appendChild(modalOver)
    modalOver.appendChild(modalContent)
    modalOver.appendChild(modalButton)
}

function renderModalGameNotFinished(container) {

    const modalOver = document.createElement('div');
    modalOver.classList.add('modal_over');
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal_content')
    modalContent.textContent = 'SoRRy, GaMe  FiNiSheD!!!, tRy AgAiN!!'
    const modalButton = document.createElement('button');
    modalButton.classList.add('modal_button');
    modalButton.textContent = 'TrY AgAiN'
    modalButton.addEventListener('click', () =>{
        window.application.renderScreen('renderAuthorizationFinishedScreen')
      
    })

    container.appendChild(modalOver)
    modalOver.appendChild(modalContent)
    modalOver.appendChild(modalButton)
}

function renderModalGameAlready(container) {

    const modalOver = document.createElement('div');
    modalOver.classList.add('modal_over');
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal_content')
    modalContent.textContent = 'SoRRy, PlaYer iS aLrEaDy iN gAmE!!'
    const modalButton = document.createElement('button');
    modalButton.classList.add('modal_button');
    modalButton.textContent = 'TrY AgAiN'
    modalButton.addEventListener('click', () =>{
        window.application.renderScreen('authorizationScreen')
      
    })

    container.appendChild(modalOver)
    modalOver.appendChild(modalContent)
    modalOver.appendChild(modalButton)
}