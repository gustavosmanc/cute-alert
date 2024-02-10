import { TOAST_RESOLVE_VALUES } from '@/constants/resolve'
import { ToastOptions } from '@/types/options'
import { ToastResolve } from '@/types/resolve'
import { playSound } from '@/utils/sound/soundUtils'
import { vibrate } from '@/utils/vibrate/vibrateUtils'

export const cuteToast = ({
  type,
  title,
  description,
  timer,
  vibrationPattern = [],
  soundSrc,
  imageSrc,
  imageSize = 32
}: ToastOptions) => {
  imageSrc = imageSrc || new URL(`../icons/${type}.svg`, import.meta.url).href

  return new Promise((resolve: ToastResolve) => {
    const body = document.querySelector('body')

    let templateWrapper = document.querySelector('.cute-toast-wrapper')

    if (!templateWrapper) {
      body.insertAdjacentHTML('afterend', `<div class="cute-toast-wrapper"></div>`)
      templateWrapper = document.querySelector('.cute-toast-wrapper')
    }

    const toastId = '_' + Math.random().toString(36).substring(2, 9)

    const titleTemplate = title ? `<span class="cute-toast__title">${title}</span>` : ''
    const descriptionTemplate = description
      ? `<span class="cute-toast__description">${description}</span>`
      : ''

    const timerTemplate = timer
      ? `<div class="cute-toast__timer" style="animation: timer ${timer}ms linear"></div>`
      : ''

    const templateContent = `
      <div class="cute-toast cute-toast--${type}" id="cute-toast-${toastId}">
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
      </div>
    `

    const toasts = document.querySelectorAll('.cute-toast')

    if (toasts.length) {
      toasts[0].insertAdjacentHTML('beforebegin', templateContent)
    } else {
      templateWrapper.innerHTML = templateContent
    }

    const toast = document.getElementById(`cute-toast-${toastId}`)
    const toastClose = toast.querySelector('.cute-toast__close')

    vibrate(vibrationPattern)
    playSound(soundSrc)

    if (timer) {
      setTimeout(() => {
        toast.remove()
        resolve(TOAST_RESOLVE_VALUES.CLOSE)
      }, timer)
    }

    toastClose.addEventListener('click', () => {
      toast.remove()
      resolve(TOAST_RESOLVE_VALUES.CLOSE)
    })
  })
}
