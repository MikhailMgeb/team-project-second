function renderMainImage(container) {
  const mainImage = document.createElement('img');
  mainImage.classList.add('logo');
  mainImage.src = '/image/main-page.png';

  container.appendChild(mainImage);
}

function renderLoserImage(container) {
  const loserImage = document.createElement('img');
  loserImage.classList.add('logo');
  loserImage.src = '/image/looser-paper.png';

  container.appendChild(loserImage);
}

function renderWinImage(container) {
  const winImage = document.createElement('img');
  winImage.classList.add('logo');
  winImage.src = '/image/win.jpeg';

  container.appendChild(winImage);
}
