document.addEventListener('DOMContentLoaded', () => {
  window.application = {
    blocks: {},

    screens: {},

    timers: [],

    enemyLogin: '',

    enemyRocks: '',

    enemyPapers: '',

    enemyScissors: '',

    renderScreen: function (screenName) {
      if (!this.screens[screenName]) {
        return;
      }

      window.application.timers.forEach((element) => {
        clearInterval(element);
      });
      
      window.application.timers.length = 0;
      window.application.screens[screenName]();
    },

    renderBlock: function (blockName, container, textContent) {
      if (!this.blocks[blockName]) {
        return;
      }

      window.application.blocks[blockName](container, textContent);
    },
  };

  window.application.blocks['authorizationPage'] = renderAuthorizationPage;
  window.application.blocks['playLobbyButton'] = renderPlayLobbyButton;
  window.application.blocks['playerList'] = renderPlayerList;
  window.application.blocks['playHallButton'] = renderPlayHallButton;
  window.application.blocks['playPersonageRockButton'] =
    renderPlayPersonageRockButton;
  window.application.blocks['playPersonageScissorsButton'] =
    renderPlayPersonageScissorsButton;
  window.application.blocks['playPersonagePaperButton'] =
    renderPlayPersonagePaperButton;
  window.application.blocks['footerLogo'] = renderFooterLogo;
  window.application.blocks['headerLogoImage'] = renderHeaderLogoImage;
  window.application.blocks['loserImage'] = renderLoserImage;
  window.application.blocks['continueButton'] = renderContinueButton;
  window.application.blocks['returnLobbyButton'] = renderReturnLobbyButton;
  window.application.blocks['winImage'] = renderWinImage;
  window.application.blocks['modalWindow'] = renderModalWindow;
  window.application.blocks['enemyMoves'] = renderEnemyMoves;

  window.application.screens['authorizationScreen'] = renderAuthorizationScreen;
  window.application.screens['lobbyScreen'] = renderLobbyScreen;
  window.application.screens['playScreen'] = renderPlayScreen;
  window.application.screens['playLoserScreen'] = renderPlayLoserScreen;
  window.application.screens['playWinScreen'] = renderPlayWinScreen;
  window.application.screens['waitingScreen'] = renderWaitingScreen;
  window.application.screens['waitingMoveScreen'] =
    renderWaitingMoveScreen;
  window.application.screens['authorizationFinishedScreen'] =
    renderAuthorizationFinishedScreen;
  window.application.screens['authorizationGameNotStartScreen'] =
    renderAuthorizationGameNotStartScreen;
  window.application.screens['authorizationServerErrorScreen'] =
  renderAuthorizationServerErrorScreen;
  
  setTimeout(() => {
    window.application.renderScreen('authorizationScreen');
  }, 0);
});
