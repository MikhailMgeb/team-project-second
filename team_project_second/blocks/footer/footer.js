function renderFooter(container) {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    container.appendChild(footer);
}

document.addEventListener('DOMContentLoaded', () => {
    window.application.blocks['footer'] = renderFooter;
});