function renderMainImage(container) {
  const mainImage = document.createElement('img');
  mainImage.classList.add('wrapper__logo-header');
  mainImage.src = '/image/main-page.png';

  container.appendChild(mainImage);
}

function renderLoserImage(container) {
  const loserImage = document.createElement('img');
  loserImage.classList.add('wrapper__logo-header');
  loserImage.src = '/image/looser-paper.png';

  container.appendChild(loserImage);
}

function renderWinImage(container) {
  const winImage = document.createElement('img');
  winImage.classList.add('wrapper__logo-header');
  winImage.src = '/image/win.jpeg';

  container.appendChild(winImage);
}
