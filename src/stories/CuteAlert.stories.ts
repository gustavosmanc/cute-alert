import { cuteAlert } from '@/cute-alert'
import '@/styles/cute-alert.css'
import type { StoryObj } from '@storybook/html'
import { createButton } from './helpers/button/Button'

const callback = () =>
  cuteAlert({
    type: 'success',
    title: 'What a nice title!',
    description: 'Avoid this path...',
    primaryButtonText: 'Primary',
    secondaryButtonText: 'Secondary'
  })

const meta = {
  title: 'CuteAlert/Alert',
  render: () => createButton('Open Alert', callback),
  argTypes: {}
}

export default meta

export const Playground: StoryObj = {}
