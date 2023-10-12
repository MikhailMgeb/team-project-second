function renderModalWindow(renderTypeScreen, errorText, container) {
  const modalWindow = document.createElement('div');
  modalWindow.classList.add('modal-window');

  const modalWindowContent = document.createElement('div');
  modalWindowContent.classList.add('modal-window__content');
  modalWindowContent.textContent = errorText;

  const modalWindowButton = document.createElement('button');
  modalWindowButton.classList.add('modal-window__button');
  modalWindowButton.textContent = 'TrY AgAiN';

  modalWindowButton.addEventListener('click', () => {
    window.application.renderScreen(renderTypeScreen);
  });

  container.appendChild(modalWindow);
  modalWindow.appendChild(modalWindowContent);
  modalWindowContent.appendChild(modalWindowButton);
}