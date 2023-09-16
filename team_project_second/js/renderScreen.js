function renderScreen(screen) {
  window.application.screens[screen]();
}

window.application.renderScreen = renderScreen;

window.application.renderScreen('autorizationScreen');