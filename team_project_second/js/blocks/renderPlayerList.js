function renderPlayerList(container, textContent) {
  const isPlayersLobby = document.createElement('div');
  isPlayersLobby.classList.add('list-wrapper__lobby-players');
  isPlayersLobby.textContent = textContent;

  container.appendChild(isPlayersLobby);
}
