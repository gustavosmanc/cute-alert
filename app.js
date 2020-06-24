// Design by Igor Ferrão de Souza: https://www.linkedin.com/in/igor-ferr%C3%A3o-de-souza-4122407b/

function cuteAlert({ type, title, message, buttonText }) {
  return new Promise((resolve, reject) => {
    const body = document.querySelector("body");

    if (!buttonText) {
      buttonText = "OK";
    }
    let bg = "success-bg";
    let btn = "success-btn";

    if (type === "error") {
      bg = "error-bg";
      btn = "error-btn";
    }

    body.innerHTML += `
    <div class="alert-wrapper">
      <div class="alert-frame">
        <div class="alert-header ${bg}">
          <div class="alert-close">X</div>
          <img class="alert-img" src="img/${type}.svg" />
        </div>
        <div class="alert-body">
          <span class="alert-title">${title}</span>
          <span class="alert-message"
            >${message}</span
          >
          <button class="alert-button ${bg} ${btn}">${buttonText}</button>
        </div>
      </div>
    </div>
    `;

    const alertWrapper = document.querySelector(".alert-wrapper");

    const alertFrame = document.querySelector(".alert-frame");

    const alertClose = document.querySelector(".alert-close");
    const alertButton = document.querySelector(".alert-button");

    alertClose.addEventListener("click", () => {
      alertWrapper.remove();
      resolve();
    });

    alertButton.addEventListener("click", () => {
      alertWrapper.remove();
      resolve();
    });

    alertWrapper.addEventListener("click", () => {
      alertWrapper.remove();
      resolve();
    });

    alertFrame.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });
}
