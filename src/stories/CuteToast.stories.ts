import { ToastOptions, cuteToast } from '@/main'
import type { Meta, StoryObj } from '@storybook/html'
import { createButton } from './helpers/button/Button'

const options: ToastOptions = {
  type: 'success',
  title: 'Title',
  description: 'Description',
  timer: 5000,
  vibrationPattern: [],
  soundSrc: '',
  imageSrc: '',
  imageSize: 32
}

const cssVariables = {
  '--cute-toast-z-index': 'unset',
  '--cute-toast-gap': 'unset',
  '--cute-toast-border-radius': 'unset',
  '--cute-toast-box-shadow': 'unset',
  '--cute-toast-background-color': 'unset',
  '--cute-toast-color-error': 'unset',
  '--cute-toast-color-error-light': 'unset',
  '--cute-toast-color-success': 'unset',
  '--cute-toast-color-success-light': 'unset',
  '--cute-toast-color-warning': 'unset',
  '--cute-toast-color-warning-light': 'unset',
  '--cute-toast-color-info': 'unset',
  '--cute-toast-color-info-light': 'unset',
  '--cute-toast-padding': 'unset',
  '--cute-toast-width': 'unset',
  '--cute-toast-content-margin': 'unset',
  '--cute-toast-title-font-size': 'unset',
  '--cute-toast-title-font-family': 'unset',
  '--cute-toast-title-font-weight': 'unset',
  '--cute-toast-title-color': 'unset',
  '--cute-toast-description-font-size': 'unset',
  '--cute-toast-description-font-family': 'unset',
  '--cute-toast-description-font-weight': 'unset',
  '--cute-toast-description-color': 'unset',
  '--cute-toast-close-color': 'unset',
  '--cute-toast-close-color-hover': 'unset',
  '--cute-toast-timer-background-color': 'unset'
}

type Args = {
  options: ToastOptions
  cssVariables: Record<string, string>
}

const meta: Meta = {
  title: 'CuteAlert/Toast',
  render: (args: Args) => {
    return createButton('Open Toast', () => cuteToast(args.options), args.cssVariables)
  },
  args: {
    options,
    cssVariables
  }
}

export default meta

export const Playground: StoryObj = {}
