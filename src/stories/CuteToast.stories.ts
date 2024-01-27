import { cuteToast } from '@/cute-alert'
import '@/styles/cute-alert.css'
import type { StoryObj } from '@storybook/html'
import { createButton } from './helpers/button/Button'

const callback = () =>
  cuteToast({
    type: 'success',
    title: 'Tasdf asdf est',
    description: 'tesasdfasdfasdf asdfasd  asdf asdft',
    timer: 5000
  })

const meta = {
  title: 'CuteAlert/Toast',
  render: () => createButton('Open Toast', callback),
  argTypes: {}
}

export default meta

export const Playground: StoryObj = {}
