// Design do Alert Box por Igor Ferrão de Souza: https://www.linkedin.com/in/igor-ferr%C3%A3o-de-souza-4122407b/

function cuteAlert({ type, title, message, buttonText }) {
  const body = document.querySelector("body");

  if (!buttonText) {
    buttonText = "OK";
  }
  let primaryColor = "#2dd284";
  let hoverColor = "#6edaa4";

  if (type === "error") {
    primaryColor = "#d85261";
    hoverColor = "#e5a4b4";
  }

  body.innerHTML += `
  <style>
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap");
  @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@800&display=swap');

  .alert-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    margin: 0px auto;
    padding: 0px auto;
  }

  .alert-frame {
    background: #fff;
    height: 425px;
    width: 300px;
    box-shadow: 5px 5px 10px rgb(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  .alert-header {
    display: flex;
    flex-direction: column;
    height: 175px;
    align-items: flex-end;
    justify-content: flex-star;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: ${primaryColor};
  }

  .alert-img {
    align-self: center;
    margin: auto;
    height: 80px;
    margin-bottom: 50px;
  }

  .alert-close {
    width: 30px;
    height: 30px;
    background: #e4eae7;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 17.5px;
    margin-top: -15px;
    margin-right: -15px;
    font-family: 'Dosis', sans-serif;
    font-weight: 700;
    font-size: 12px;
    cursor: pointer;
    line-height: 30px;
    transition: background 0.5s;
  }

  .alert-close:hover {
    background:#fff;
  }

  .alert-body {
    padding: 30px 60px;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align:center;
  }

  .alert-title {
    font-size: 18px !important;
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    font-size: 15px;
    margin-bottom: 35px;
  }

  .alert-message {
    font-size: 15px !important;
    color: #666;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 15px;
    text-align: center;
    margin-bottom: 25px;
  }

  .alert-button {
    width: 140px;
    margin-bottom: -2px !important;
    height: 35px;
    border-radius: 20px;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 15px;
    color: white;
    border: none;
    cursor: pointer;
    padding: 0;
    line-height: 35px;
    transition: background 0.5s;
    background: ${primaryColor};
  }

  .alert-button:hover {
    background: ${hoverColor};
  }

  .alert-button:focus {
    outline: 0;
  }

  </style>
  <div class="alert-wrapper">
    <div class="alert-frame">
      <div class="alert-header">
        <div class="alert-close">X</div>
        <img class="alert-img" src="img/${type}.svg" />
      </div>
      <div class="alert-body">
        <span class="alert-title">${title}</span>
        <span class="alert-message"
          >${message}</span
        >
        <button class="alert-button">${buttonText}</button>
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
  });

  alertButton.addEventListener("click", () => {
    alertWrapper.remove();
  });

  alertWrapper.addEventListener("click", () => {
    alertWrapper.remove();
  });

  alertFrame.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}
