function renderLoader() {
    const loader = document.createElement('div');
    loader.classList.add('loader');

    return loader;
}
// app.appendChild(loader);

function renderFace() {
    const face = document.createElement('div');
    face.classList.add('face');

    return face;
}
// loader.appendChild(face);

function renderCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');

    return circle;
}
// face.appendChild(circle);

function renderFaceTwo() {
    const faceTwo = document.createElement('div');
    faceTwo.classList.add('face');

    return faceTwo;
}
// loader.appendChild(faceTwo);

function renderCircleTwo() {
    const circleTwo = document.createElement('div');
    circleTwo.classList.add('circle');

    return circleTwo;
}
// faceTwo.appendChild(circleTwo);


function createFirstPartLoader() {
    return renderLoader().appendChild(renderFace()).appendChild(renderCircle());
}

function createSecondPartLoader() {
    return renderLoader().appendChild(renderFaceTwo()).appendChild(renderCircleTwo());
}

// const loader = document.createElement('div');
// loader.classList.add('loader');
// app.appendChild(loader);

// const face = document.createElement('div');
// face.classList.add('face');
// loader.appendChild(face);

// const circle = document.createElement('div');
// circle.classList.add('circle');
// face.appendChild(circle);

// const faceTwo = document.createElement('div');
// faceTwo.classList.add('face');
// loader.appendChild(faceTwo);

// const circleTwo = document.createElement('div');
// circleTwo.classList.add('circle');
// faceTwo.appendChild(circleTwo);

        
        