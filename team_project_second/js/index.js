document.addEventListener('DOMContentLoaded', () => {
  window.application = {
    blocks: {},

    screens: {},

    timers: [],

    renderScreen: function (screenName) {
      if (!this.screens[screenName]) {
        console.log(`There is no screen "${screenName}"`);
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
        console.log(`There is no block "${blockName}"`);
        return;
      }

      window.application.blocks[blockName](container, textContent);
    },
  };

  window.application.blocks['mainButton'] = renderMainButton;
  window.application.blocks['playLobbyButton'] = renderPlayLobbyButton;
  window.application.blocks['player-list'] = playerList;
  window.application.blocks['playHallButton'] = renderPlayHallButton;
  window.application.blocks['playPersonageRockButton'] =
    renderPlayPersonageRockButton;
  window.application.blocks['playPersonageScissorsButton'] =
    renderPlayPersonageScissorsButton;
  window.application.blocks['playPersonagePaperButton'] =
    renderPlayPersonagePaperButton;
  window.application.blocks['renderFooterLogo'] = renderFooterLogo;
  window.application.blocks['mainImage'] = renderMainImage;
  window.application.blocks['loserImage'] = renderLoserImage;
  window.application.blocks['continueButton'] = renderContinueButton;
  window.application.blocks['returnLobbyButton'] = renderReturnLobbyButton;
  window.application.blocks['winImage'] = renderWinImage;
  window.application.blocks['modalServer'] = renderModal;
  window.application.blocks['renderModalGameNotStart'] = renderModalGameNotStart;
  window.application.blocks['renderModalGameNotFinished'] = renderModalGameNotFinished;
  window.application.blocks['renderModalGameAlready'] = renderModalGameAlready;

  window.application.screens['authorizationScreen'] = renderAuthorizationScreen;
  window.application.screens['renderLobbyScreen'] = renderLobbyScreen;
  window.application.screens['renderPlayScreen'] = renderPlayScreen;
  window.application.screens['renderPlayLoserScreen'] = renderPlayLoserScreen;
  window.application.screens['renderPlayWinScreen'] = renderPlayWinScreen;
  window.application.screens['renderWaitingScreen'] = renderWaitingScreen;
  window.application.screens['renderWaitingMoveScreen'] =
    renderWaitingMoveScreen;
  window.application.screens['renderAuthorizationFinishedScreen'] =
    renderAuthorizationFinishedScreen;
  window.application.screens['renderAuthorizationGameNotStartScreen'] =
    renderAuthorizationGameNotStartScreen;
  window.application.screens['renderAuthorizationServerErrorScreen'] =
    renderAuthorizationServerErrorScreen;

  window.application.renderScreen('authorizationScreen');
});
