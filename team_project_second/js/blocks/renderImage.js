function renderHeaderLogoImage(container) {
  const headerLogoImage = document.createElement('img');
  headerLogoImage.classList.add('header-logo__image');
  headerLogoImage.src = '/image/main-page.png';

  container.appendChild(headerLogoImage);
}

function renderLoserImage(container) {
  const loserImage = document.createElement('img');
  loserImage.classList.add('header-logo__image', 'header-logo__looser-image');
  loserImage.src = '/image/looser-paper.png';

  container.appendChild(loserImage);
}

function renderWinImage(container) {
  const winImage = document.createElement('img');
  winImage.classList.add('header-logo__image', 'header-logo__win-image');
  winImage.src = '/image/win.jpeg';

  container.appendChild(winImage);
}