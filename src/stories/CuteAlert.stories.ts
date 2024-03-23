import { AlertOptions, cuteAlert } from '@/main'
import type { Meta, StoryObj } from '@storybook/html'
import { createButton } from './helpers/button/Button'

const options: AlertOptions = {
  type: 'success',
  title: 'Title',
  description: 'Description',
  timer: 5000,
  primaryButtonText: 'Confirm',
  secondaryButtonText: 'Cancel',
  vibrationPattern: [],
  soundSrc: '',
  closeStyle: 'default',
  imageSrc: '',
  imageSize: 80
}

const cssVariables = {
  '--cute-alert-overlay-color': 'unset',
  '--cute-alert-z-index': 'unset',
  '--cute-alert-color-error': 'unset',
  '--cute-alert-color-error-light': 'unset',
  '--cute-alert-color-success': 'unset',
  '--cute-alert-color-success-light': 'unset',
  '--cute-alert-color-warning': 'unset',
  '--cute-alert-color-warning-light': 'unset',
  '--cute-alert-color-info': 'unset',
  '--cute-alert-color-info-light': 'unset',
  '--cute-alert-color-question': 'unset',
  '--cute-alert-color-question-light': 'unset',
  '--cute-alert-background-color': 'unset',
  '--cute-alert-min-width': 'unset',
  '--cute-alert-width': 'unset',
  '--cute-alert-max-width': 'unset',
  '--cute-alert-min-height': 'unset',
  '--cute-alert-height': 'unset',
  '--cute-alert-max-height': 'unset',
  '--cute-alert-box-shadow': 'unset',
  '--cute-alert-border-radius': 'unset',
  '--cute-alert-header-background-color': 'unset',
  '--cute-alert-close-color-hover': 'unset',
  '--cute-alert-close-color-default': 'unset',
  '--cute-alert-close-background-color-circle': 'unset',
  '--cute-alert-close-color-circle': 'unset',
  '--cute-alert-close-background-color-circle-hover': 'unset',
  '--cute-alert-body-background-color': 'unset',
  '--cute-alert-title-font-family': 'unset',
  '--cute-alert-title-font-weight': 'unset',
  '--cute-alert-title-font-size': 'unset',
  '--cute-alert-title-color': 'unset',
  '--cute-alert-description-font-size': 'unset',
  '--cute-alert-description-color': 'unset',
  '--cute-alert-description-font-family': 'unset',
  '--cute-alert-description-font-weight': 'unset',
  '--cute-alert-primary-button-font-family': 'unset',
  '--cute-alert-primary-button-font-weight': 'unset',
  '--cute-alert-primary-button-font-size': 'unset',
  '--cute-alert-primary-button-color': 'unset',
  '--cute-alert-primary-button-background-color': 'unset',
  '--cute-alert-primary-button-border-radius': 'unset',
  '--cute-alert-primary-button-padding': 'unset',
  '--cute-alert-primary-button-background-color-hover': 'unset',
  '--cute-alert-secondary-button-font-family': 'unset',
  '--cute-alert-secondary-button-font-weight': 'unset',
  '--cute-alert-secondary-button-font-size': 'unset',
  '--cute-alert-secondary-button-background-color': 'unset',
  '--cute-alert-secondary-button-padding': 'unset',
  '--cute-alert-secondary-button-border-radius': 'unset',
  '--cute-alert-secondary-button-border-color': 'unset',
  '--cute-alert-secondary-button-color': 'unset',
  '--cute-alert-secondary-button-border-color-hover': 'unset',
  '--cute-alert-secondary-button-color-hover': 'unset',
  '--cute-alert-timer-background-color': 'unset'
}

type Args = {
  options: AlertOptions
  cssVariables: Record<string, string>
}

const meta: Meta = {
  title: 'CuteAlert/Alert',
  render: (args: Args) => {
    return createButton('Open Alert', () => cuteAlert(args.options), args.cssVariables)
  },
  args: {
    options,
    cssVariables
  }
}

export default meta

export const Playground: StoryObj = {}
