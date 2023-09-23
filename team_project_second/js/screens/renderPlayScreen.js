function renderPlayScreen() {
  const app = document.querySelector(".app");
  app.innerHTML = "";

  const titlePlay = document.createElement("h1");
  titlePlay.classList.add("app__main-tittle");
  titlePlay.textContent = "LeTs gO PlAy!!!!!!";

  const containerHeader = document.createElement("div");
  containerHeader.classList.add("wrapper_header");
  containerHeader.appendChild(titlePlay);

  app.appendChild(containerHeader);

  const wrapperMainImage = document.createElement("div");
  wrapperMainImage.classList.add("wrapper__main-image");
  app.appendChild(wrapperMainImage);

  window.application.renderBlock(
    "mainImage",
    document.querySelector(".wrapper__main-image")
  );

  const wrapperChoiceMove = document.createElement("div");

  const rockButton = document.createElement("button");
  rockButton.classList.add("wrapper__rock-button");
  rockButton.value = "rock";
  wrapperChoiceMove.appendChild(rockButton);

  const scissorsButton = document.createElement("button");
  scissorsButton.classList.add("wrapper__scissors-button");
  scissorsButton.value = "scissors";
  wrapperChoiceMove.appendChild(scissorsButton);

  const pockButton = document.createElement("button");
  pockButton.classList.add("wrapper__pock-button");
  pockButton.value = "paper";
  wrapperChoiceMove.appendChild(pockButton);

  wrapperChoiceMove.classList.add("wrapper__choice-move");

  app.appendChild(wrapperChoiceMove);

  window.application.renderBlock(
    "playPersonageRockButton",
    document.querySelector(".wrapper__rock-button")
  );
  window.application.renderBlock(
    "playPersonageScissorsButton",
    document.querySelector(".wrapper__scissors-button")
  );
  window.application.renderBlock(
    "playPersonagePaperButton",
    document.querySelector(".wrapper__pock-button")
  );

  const wrapperFooterImage = document.createElement("div");
  wrapperFooterImage.classList.add("wrapper__footer");
  app.appendChild(wrapperFooterImage);

  window.application.renderBlock(
    "playLogoButton",
    document.querySelector(".wrapper__footer")
  );
  wrapperChoiceMove.addEventListener("click", (event) => {
    const params = {
      token: window.application.token,
      id: window.application.id,
    };

    const target = event.target;

    if (target.closest(".wrapper__choice-move")) {
        console.log(target.data)
        params.move = 'rock';

      request(
        `https://skypro-rock-scissors-paper.herokuapp.com/play`,
        params,
        SetGameStatus
      );
    }

    if (target.closest(".wrapper__scissors-button")) {
        params.move = 'scissors';

      request(
        `https://skypro-rock-scissors-paper.herokuapp.com/play`,
        params,
        SetGameStatus
      );
    }

    if (target.closest(".wrapper__pock-button")) {
        params.move = 'paper';

      request(
        `https://skypro-rock-scissors-paper.herokuapp.com/play`,
        params,
        SetGameStatus
      );
    }
  });
}
