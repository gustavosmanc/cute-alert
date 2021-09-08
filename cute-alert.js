// Alert box design by Igor Ferrão de Souza: https://www.linkedin.com/in/igor-ferr%C3%A3o-de-souza-4122407b/

const cuteAlert = ({
  type,
  title,
  message,
  buttonText = "OK",
  confirmText = "OK",
  cancelText = "Cancel",
  closeStyle,
}) => {
  return new Promise((resolve) => {
    const existingAlert = document.querySelector(".alert-wrapper");

    if (existingAlert) {
      existingAlert.remove();
    }

    const body = document.querySelector("body");

    const scripts = document.getElementsByTagName("script");

    let src = "";

    for (let script of scripts) {
      if (script.src.includes("cute-alert.js")) {
        src = script.src.substring(0, script.src.lastIndexOf("/"));
      }
    }

    let btnTemplate = `
    <button class="alert-button ${type}-bg ${type}-btn">${buttonText}</button>
    `;

    if (type === "question") {
      btnTemplate = `
      <div class="question-buttons">
        <button class="confirm-button ${type}-bg ${type}-btn">${confirmText}</button>
        <button class="cancel-button error-bg error-btn">${cancelText}</button>
      </div>
      `;
    }

    const template = `
    <div class="alert-wrapper">
      <div class="alert-frame">
        <div class="alert-header ${type}-bg">
          <span class="alert-close ${closeStyle === "circle" ? "alert-close-circle" : "alert-close-default"}">X</span>
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
    const alertClose = document.querySelector(".alert-close");

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

const cuteToast = ({ type, message, timer = 5000 }) => {
  return new Promise((resolve) => {

    const body = document.querySelector("body");

    let toastWrapper = document.querySelector(".toast-container-wrapper");

    if(!toastWrapper) {
      const template = `
      <div class="toast-container-wrapper">
      </div>
      `;
      body.insertAdjacentHTML("afterend", template);
      toastWrapper = document.querySelector(".toast-container-wrapper");
    }


    const scripts = document.getElementsByTagName("script");

    const this_id = cuteToast.cutemaxid;
    cuteToast.cutemaxid++;

    let src = "";

    for (let script of scripts) {
      if (script.src.includes("cute-alert.js")) {
        src = script.src.substring(0, script.src.lastIndexOf("/"));
      }
    }

    const template = `
    <div class="toast-container ${type}-bg" id="cute-${this_id}">
      <div>
        <div class="toast-frame">
          <img class="toast-img" src="${src}/img/${type}.svg" />
          <span class="toast-message">${message}</span>
          <div class="toast-close">X</div>
        </div>
        <div class="toast-timer ${type}-timer" style="animation: timer ${timer}ms linear;"/>
      </div>
    </div>
    `;

    toastWrapper.insertAdjacentHTML("beforeend", template);

    const toastContainer = document.querySelector(`.toast-container#cute-${this_id}`);

    setTimeout(() => {
      toastContainer.remove();
      resolve();
    }, timer);

    const toastClose = document.querySelector(".toast-close");

    toastClose.addEventListener("click", () => {
      toastContainer.remove();
      resolve();
    });

    return this_id;
  });
}

cuteToast.cutemaxid = 0;
