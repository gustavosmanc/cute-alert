import { TOAST_RESOLVE_VALUES } from '@/constants/resolve'
import { ToastOptions } from '@/types/options'
import { ToastResolve } from '@/types/resolve'
import { playSound } from '@/utils/sound/soundUtils'
import { vibrate } from '@/utils/vibrate/vibrateUtils'

export const closeToast = (toastWrapper: Element, toast: HTMLDivElement) => {
  const toasts = document.querySelectorAll('.cute-toast')

  if (toasts.length === 1) {
    toastWrapper.remove()
  } else {
    toast.remove()
  }
}

export const cuteToast = ({
  type,
  title,
  description,
  timer,
  vibrationPattern,
  soundSrc,
  imageSrc,
  imageSize = 32
}: ToastOptions) => {
  imageSrc = imageSrc || new URL(`../icons/${type}.svg`, import.meta.url).href

  return new Promise((resolve: ToastResolve) => {
    let toastWrapper = document.querySelector('.cute-toast-wrapper')

    if (!toastWrapper) {
      toastWrapper = document.createElement('div')
      toastWrapper.classList.add('cute-toast-wrapper')
      document.body.appendChild(toastWrapper)
    }

    const toast = document.createElement('div')
    toast.classList.add('cute-toast', `cute-toast--${type}`)

    const titleTemplate = title ? `<span class="cute-toast__title">${title}</span>` : ''
    const descriptionTemplate = description
      ? `<span class="cute-toast__description">${description}</span>`
      : ''

    const timerTemplate = timer
      ? `<div class="cute-toast__timer" style="animation: timer ${timer}ms linear"></div>`
      : ''

    toast.innerHTML = `
      <div class="cute-toast__frame">
        <div class="cute-toast__body">
          <img class="cute-toast__image" src="${imageSrc}" height="${imageSize}" width="${imageSize}" />
          <div class="cute-toast__content">
            ${titleTemplate}
            ${descriptionTemplate}
          </div>
          <div class="cute-toast__close">X</div>
        </div>
      </div>
      ${timerTemplate}
    `

    toastWrapper.appendChild(toast)

    vibrate(vibrationPattern)
    playSound(soundSrc)

    const toastClose = toast.querySelector('.cute-toast__close')

    if (timer) {
      setTimeout(() => {
        closeToast(toastWrapper, toast)
        resolve(TOAST_RESOLVE_VALUES.CLOSE)
      }, timer)
    }

    toastClose.addEventListener('click', () => {
      closeToast(toastWrapper, toast)
      resolve(TOAST_RESOLVE_VALUES.CLOSE)
    })
  })
}
