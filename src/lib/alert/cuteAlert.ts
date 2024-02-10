import { ALERT_RESOLVE_VALUES } from '@/constants/resolve'
import { AlertOptions } from '@/types/options'
import { AlertResolve } from '@/types/resolve'
import { playSound } from '@/utils/sound/soundUtils'
import { vibrate } from '@/utils/vibrate/vibrateUtils'

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
  imageSrc,
  imageSize = 80
}: AlertOptions) => {
  imageSrc = imageSrc || `/assets/icons/${type}.svg`

  return new Promise((resolve: AlertResolve) => {
    const existingAlert = document.querySelector('.cute-alert')

    if (existingAlert) {
      existingAlert.remove()
    }

    const body = document.querySelector('body')

    const titleTemplate = title ? `<span class="cute-alert__title">${title}</span>` : ''

    const descriptionTemplate = description
      ? `<span class="cute-alert__description">${description}</span>`
      : ''

    const primaryButtonTemplate = primaryButtonText
      ? `<button class="cute-alert__primary-btn">${primaryButtonText}</button>`
      : ''

    const secondaryButtonTemplate = secondaryButtonText
      ? `<button class="cute-alert__secondary-btn">${secondaryButtonText}</button>`
      : ''

    const timerTemplate = timer
      ? `<div class="cute-alert__timer" style="animation: timer ${timer}ms linear"></div>`
      : ''

    vibrate(vibrationPattern)
    playSound(soundSrc)

    const template = `
      <div class="cute-alert cute-alert--${type}">
        <div class="cute-alert__frame">
          <div class="cute-alert__header">
            <span class="cute-alert__close cute-alert__close--${closeStyle}">X</span>
            <img class="cute-alert__image" src="${imageSrc}" height="${imageSize}" width="${imageSize}" />
          </div>
          <div class="cute-alert__body">
            ${titleTemplate}
            ${descriptionTemplate}
            <div class="cute-alert__buttons">
              ${primaryButtonTemplate}
              ${secondaryButtonTemplate}
            </div>
            ${timerTemplate}
          </div>
        </div>
      </div>
    `

    body.insertAdjacentHTML('afterend', template)

    const alert = document.querySelector('.cute-alert')
    const alertFrame = document.querySelector('.cute-alert__frame')
    const alertClose = document.querySelector('.cute-alert__close')

    const primaryButton = document.querySelector('.cute-alert__primary-btn')
    const secondaryButton = document.querySelector('.cute-alert__secondary-btn')

    if (primaryButton) {
      primaryButton.addEventListener('click', () => {
        alert.remove()
        resolve(ALERT_RESOLVE_VALUES.PRIMARY_BUTTON_CLICKED)
      })
    }

    if (secondaryButton) {
      secondaryButton.addEventListener('click', () => {
        alert.remove()
        resolve(ALERT_RESOLVE_VALUES.SECONDARY_BUTTON_CLICKED)
      })
    }

    if (timer) {
      setTimeout(() => {
        alert.remove()
        resolve(ALERT_RESOLVE_VALUES.CLOSE)
      }, timer)
    }

    alertClose.addEventListener('click', () => {
      alert.remove()
      resolve(ALERT_RESOLVE_VALUES.CLOSE)
    })

    alertFrame.addEventListener('click', (e) => {
      e.stopPropagation()
    })
  })
}
