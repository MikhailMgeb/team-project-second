function renderBlock(blockName, container) {
  window.application.blocks[blockName](container);
}

window.application.renderBlock = renderBlock;

//window.application.renderBlock('mainButton', document.querySelector('.app'));
