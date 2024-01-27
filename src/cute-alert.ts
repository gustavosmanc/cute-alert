import { AlertOptions, ToastOptions } from './types/options'
import { playSound, vibrate } from './utils'

export const cuteAlert = ({
  type,
  title,
  description,
  timer,
  primaryButtonText,
  secondaryButtonText,
  vibrationPattern = [],
  soundSrc,
  closeStyle = 'default',
  imageSize = 80
}: AlertOptions) => {
  return new Promise((resolve) => {
    const existingAlert = document.querySelector('.alert-wrapper')

    if (existingAlert) {
      existingAlert.remove()
    }

    const body = document.querySelector('body')

    const titleTemplate = title ? `<span class="alert-title">${title}</span>` : ''
    const descriptionTemplate = description
      ? `<span class="alert-description">${description}</span>`
      : ''

    const primaryButtonTemplate = primaryButtonText
      ? `<button class="primary-button ${type}-bg ${type}-btn">${primaryButtonText}</button>`
      : ''

    const secondaryButtonTemplate = secondaryButtonText
      ? `<button class="secondary-button error-bg error-btn">${secondaryButtonText}</button>`
      : ''

    vibrate(vibrationPattern)
    playSound(soundSrc)

    const template = `
      <div class="alert-wrapper">
        <div class="alert-frame">
          <div class="alert-header ${type}-bg">
            <span class="alert-close alert-close-${closeStyle}">X</span>
            <img class="alert-img" src="/assets/icons/${type}.svg" height="${imageSize}" width="${imageSize}" />
          </div>
          <div class="alert-body">
            ${titleTemplate}
            ${descriptionTemplate}
            <div class="buttons">
              ${primaryButtonTemplate}
              ${secondaryButtonTemplate}
            </div>
          </div>
        </div>
      </div>
    `

    body.insertAdjacentHTML('afterend', template)

    const alertWrapper = document.querySelector('.alert-wrapper')
    const alertFrame = document.querySelector('.alert-frame')
    const alertClose = document.querySelector('.alert-close')

    const primaryButton = document.querySelector('.primary-button')
    const secondaryButton = document.querySelector('.secondary-button')

    if (primaryButton) {
      primaryButton.addEventListener('click', () => {
        alertWrapper.remove()
        resolve('primaryButtonClicked')
      })
    }

    if (secondaryButton) {
      secondaryButton.addEventListener('click', () => {
        alertWrapper.remove()
        resolve('secondaryButtonClicked')
      })
    }

    if (timer) {
      setTimeout(() => {
        alertWrapper.remove()
        resolve('close')
      }, timer)
    }

    alertClose.addEventListener('click', () => {
      alertWrapper.remove()
      resolve('close')
    })

    alertFrame.addEventListener('click', (e) => {
      e.stopPropagation()
    })
  })
}

export const cuteToast = ({
  type,
  title,
  description,
  timer,
  vibrationPattern = [],
  soundSrc,
  imageSize = 32
}: ToastOptions) => {
  return new Promise((resolve) => {
    const body = document.querySelector('body')

    let templateContainer = document.querySelector('.toast-container')

    if (!templateContainer) {
      body.insertAdjacentHTML('afterend', '<div class="toast-container"></div>')
      templateContainer = document.querySelector('.toast-container')
    }

    const toastId = '_' + Math.random().toString(36).substring(2, 9)

    const titleTemplate = title ? `<span class="toast-title">${title}</span>` : ''
    const descriptionTemplate = description
      ? `<span class="toast-description">${description}</span>`
      : ''

    const timerTemplate = timer
      ? `<div class="toast-timer ${type}-timer" style="animation: timer ${timer}ms linear" />`
      : ''

    const templateContent = `
      <div class="toast-content ${type}-bg" id="${toastId}-toast-content">
        <div class="toast-frame">
          <div class="toast-body">
            <img class="toast-body-img" src="/assets/icons/${type}.svg" height="${imageSize}" width="${imageSize}" />
            <div class="toast-body-content">
              ${titleTemplate}
              ${descriptionTemplate}
            </div>
            <div class="toast-close" id="${toastId}-toast-close">X</div>
          </div>
        </div>
        ${timerTemplate}
      </div>
    `

    const toasts = document.querySelectorAll('.toast-content')

    if (toasts.length) {
      toasts[0].insertAdjacentHTML('beforebegin', templateContent)
    } else {
      templateContainer.innerHTML = templateContent
    }

    const toastContent = document.getElementById(`${toastId}-toast-content`)

    vibrate(vibrationPattern)
    playSound(soundSrc)

    if (timer) {
      setTimeout(() => {
        toastContent.remove()
        resolve()
      }, timer)
    }

    const toastClose = document.getElementById(`${toastId}-toast-close`)

    toastClose.addEventListener('click', () => {
      toastContent.remove()
      resolve()
    })
  })
}
