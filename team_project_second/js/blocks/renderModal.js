function renderModal(renderTypeScreen, errorText, container) {
  const modalOver = document.createElement('div');
  modalOver.classList.add('modal_over');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal_content');
  modalContent.textContent = errorText;

  const modalButton = document.createElement('button');
  modalButton.classList.add('modal_button');
  modalButton.textContent = 'TrY AgAiN';

  modalButton.addEventListener('click', () => {
    window.application.renderScreen(renderTypeScreen);
  });

  container.appendChild(modalOver);
  modalOver.appendChild(modalContent);
  modalContent.appendChild(modalButton);
}