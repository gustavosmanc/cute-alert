// Design by Igor Ferrão de Souza: https://www.linkedin.com/in/igor-ferr%C3%A3o-de-souza-4122407b/

function cuteAlert({ type, title, message, buttonText }) {
  return new Promise((resolve) => {
    const body = document.querySelector("body");

    const scripts = document.getElementsByTagName("script");
    let currScript = "";

    for (let script of scripts) {
      if (script.src.includes("/cute-alert/app.js")) {
        currScript = script;
      }
    }

    let src = currScript.src;

    src = src.substring(0, src.lastIndexOf("/"));

    if (!buttonText) {
      buttonText = "OK";
    }
    let bg = "success-bg";
    let btn = "success-btn";

    if (type === "error") {
      bg = "error-bg";
      btn = "error-btn";
    } else if (type === "warning") {
      bg = "warning-bg";
      btn = "warning-btn";
    } else if (type === "info") {
      bg = "info-bg";
      btn = "info-btn";
    }

    const template = `
    <div class="alert-wrapper">
      <div class="alert-frame">
        <div class="alert-header ${bg}">
          <span class="alert-close">X</span>
          <img class="alert-img" src="${src}/img/${type}.svg" />
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

    body.insertAdjacentHTML("afterend", template);

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
