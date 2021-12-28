// Alert box design by Igor Ferrão de Souza: https://www.linkedin.com/in/igor-ferr%C3%A3o-de-souza-4122407b/

const cuteAlert = ({
  type,
  title,
  message,
  img = '',
  buttonText = 'OK',
  confirmText = 'OK',
  cancelText = 'Cancel',
  closeStyle = 'default',
  header = 'default',
}) => {
  return new Promise(resolve => {
    const existingAlert = document.querySelector('.alert-wrapper');

    if (existingAlert) {
      existingAlert.remove();
    }

    const body = document.querySelector('body');

    const scripts = document.getElementsByTagName('script');

    let src = '';

    for (let script of scripts) {
      if (script.src.includes('cute-alert.js')) {
        src = script.src.substring(0, script.src.lastIndexOf('/'));
      }
    }

    let btnTemplate = `
    <button class="alert-button ${type}-bg ${type}-btn">${buttonText}</button>
    `;

    if (type === 'question') {
      btnTemplate = `
      <div class="question-buttons">
        <button class="confirm-button ${type}-bg ${type}-btn">${confirmText}</button>
        <button class="cancel-button error-bg error-btn">${cancelText}</button>
      </div>
      `;
    }

    if (type === 'input') {
      btnTemplate = `
       <input type="text" class="alert-input">
       <button class="alert-button input-bg input-btn">${buttonText}</button>
      `;
    }

    let msgtemplate = `
    <span class="alert-message">${message}</span>
    `

    if (type === 'input'){
      msgtemplate = ``
    }

    const template = `
    <div class="alert-wrapper">
      <div class="alert-frame">
        ${header !== '' ? '<div class="alert-header-'+ header + ' ' + type + '-bg">' : '<div class="alert-header-default">'}
          <span class="alert-close ${
            closeStyle !== '' ? 'alert-close-'+closeStyle : 'alert-close-hidden'}">X</span>
          ${img !== '' ? '<img class="alert-img" src="' + src + '/' + img + '" />' : ''}
        </div>
        <div class="alert-body">
          <span class="alert-title">${title}</span>
          ${msgtemplate}
          ${btnTemplate}
        </div>
      </div>
    </div>
    `;

    body.insertAdjacentHTML('afterend', template);

    const alertWrapper = document.querySelector('.alert-wrapper');
    const alertFrame = document.querySelector('.alert-frame');
    const alertClose = document.querySelector('.alert-close');
    


    if (type === 'question') {
      const confirmButton = document.querySelector('.confirm-button');
      const cancelButton = document.querySelector('.cancel-button');

      confirmButton.addEventListener('click', () => {
        alertWrapper.remove();
        resolve('confirm');
      });

      cancelButton.addEventListener('click', () => {
        alertWrapper.remove();
        resolve();
      });
    } else {
      const alertButton = document.querySelector('.alert-button');

      alertButton.addEventListener('click', () => {
        alertWrapper.remove();
        resolve('ok');
      });

      if (type === 'input'){
        const alertInput = document.querySelector('.alert-input')
      
        alertInput.addEventListener('change', e =>{
          resolve(e.target.value)
        })
      }
    }

    alertClose.addEventListener('click', () => {
      alertWrapper.remove();
      resolve('close');
    });



/*     alertWrapper.addEventListener('click', () => {
      alertWrapper.remove();
      resolve();
    }); */

    alertFrame.addEventListener('click', e => {
      e.stopPropagation();
    });
  });
};

const cuteToast = ({ type, title, message, img, timer = 5000, position = 'right' }) => {
  return new Promise(resolve => {
    const body = document.querySelector('body');

    const scripts = document.getElementsByTagName('script');

    let src = '';

    for (let script of scripts) {
      if (script.src.includes('cute-alert.js')) {
        src = script.src.substring(0, script.src.lastIndexOf('/'));
      }
    }

    let templateContainer = document.querySelector(`.toast-container-${position}`);

    if (!templateContainer) {
      body.insertAdjacentHTML(
        'afterend',
        `<div class="toast-container-${position}"></div>`,
      );
      templateContainer = document.querySelector(`.toast-container-${position}`);
    }

    const toastId = id();

    const templateContent = `
    <div class="toast-content ${type}-bg" id="${toastId}-toast-content">
      <div>
        <div class="toast-frame">
          <div class="toast-body">
            
            ${img !== '' ? '<img class="toast-body-img" src="' + src + '/' + img + '" />' : ''}
            <div class="toast-body-content">
              <span class="toast-title">${title}</span>
              <span class="toast-message">${message}</span>
            </div>
            <div class="toast-close" id="${toastId}-toast-close">X</div>
          </div>
        </div>
        ${img !== '' ? '<div class="toast-timer ' + type + '-timer"  style="animation: timer' + timer + 'ms linear;>' : ''}
      </div>
    </div>
    `;

    const toasts = document.querySelectorAll('.toast-content');

    if (toasts.length) {
      toasts[0].insertAdjacentHTML('beforebegin', templateContent);
    } else {
      templateContainer.innerHTML = templateContent;
    }

    const toastContent = document.getElementById(`${toastId}-toast-content`);

    setTimeout(() => {
      toastContent.remove();
      resolve();
    }, timer);

    const toastClose = document.getElementById(`${toastId}-toast-close`);

    toastClose.addEventListener('click', () => {
      toastContent.remove();
      resolve();
    });
  });
};

const id = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};
