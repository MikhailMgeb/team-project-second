function renderHeader(text) {
    const heder = document.createElement('h1');
    heder.classList.add('header');
    heder.textContent = text;

    return heder;
}