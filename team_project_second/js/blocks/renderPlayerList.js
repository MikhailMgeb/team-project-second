function playerList(container, textContent) {
  const isPlayerLobby = document.createElement('div');
  isPlayerLobby.classList.add('wrapper__player-lobby');
  isPlayerLobby.textContent = textContent;

  container.appendChild(isPlayerLobby);
}
