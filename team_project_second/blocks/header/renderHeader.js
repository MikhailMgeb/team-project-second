function renderHeader(text) {
    const header = document.createElement('h1');
    header.classList.add('header');
    header.textContent = text;

    return header;
}