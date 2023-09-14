function authorization() {
    const app = document.querySelector('.app');
    app.textContent = '';
    const title = document.createElement('h1');
    title.textContent = 'Камень, ножницы, бумага';

    const content = document.createElement('div');

    window.application.renderBlock('example-button', content);

    app.appendChild(title);
    app.appendChild(content);
}


