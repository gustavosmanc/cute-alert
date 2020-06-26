// Design by Igor Ferrão de Souza: https://www.linkedin.com/in/igor-ferr%C3%A3o-de-souza-4122407b/

function cuteAlert({
  type,
  title,
  message,
  buttonText = "OK",
  confirmText = "OK",
  cancelText = "Cancel",
  closeStyle,
}) {
  return new Promise((resolve) => {
    const body = document.querySelector("body");

    const scripts = document.getElementsByTagName("script");
    let currScript = "";

    for (let script of scripts) {
      if (script.src.includes("cute-alert.js")) {
        currScript = script;
      }
    }

    let src = currScript.src;

    src = src.substring(0, src.lastIndexOf("/"));

    let closeStyleTemplate = "alert-close";
    if (closeStyle === "circle") {
      closeStyleTemplate = "alert-close-circle";
    }

    if (!buttonText || buttonText.trim() === "") {
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

    let btnTemplate = `
    <button class="alert-button ${bg} ${btn}">${buttonText}</button>
    `;
    if (type === "question") {
      bg = "question-bg";
      btn = "question-btn";
      btnTemplate = `
      <div class="question-buttons">
        <button class="confirm-button ${bg} ${btn}">${confirmText}</button>
        <button class="cancel-button error-bg error-btn">${cancelText}</button>
      </div>
      `;
    }

    const template = `
    <div class="alert-wrapper">
      <div class="alert-frame">
        <div class="alert-header ${bg}">
          <span class="${closeStyleTemplate}">X</span>
          <img class="alert-img" src="${src}/img/${type}.svg" />
        </div>
        <div class="alert-body">
          <span class="alert-title">${title}</span>
          <span class="alert-message">${message}</span>
          ${btnTemplate}
        </div>
      </div>
    </div>
    `;

    body.insertAdjacentHTML("afterend", template);

    const alertWrapper = document.querySelector(".alert-wrapper");
    const alertFrame = document.querySelector(".alert-frame");
    const alertClose = document.querySelector(`.${closeStyleTemplate}`);

    if (type === "question") {
      const confirmButton = document.querySelector(".confirm-button");
      const cancelButton = document.querySelector(".cancel-button");

      confirmButton.addEventListener("click", () => {
        alertWrapper.remove();
        resolve("confirm");
      });

      cancelButton.addEventListener("click", () => {
        alertWrapper.remove();
        resolve();
      });
    } else {
      const alertButton = document.querySelector(".alert-button");

      alertButton.addEventListener("click", () => {
        alertWrapper.remove();
        resolve();
      });
    }

    alertClose.addEventListener("click", () => {
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
