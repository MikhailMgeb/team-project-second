function renderBlock(blockName, container, textContent) {
  window.application.blocks[blockName](container, textContent);

}

window.application.renderBlock = renderBlock;

//window.application.renderBlock('mainButton', document.querySelector('.app'));
