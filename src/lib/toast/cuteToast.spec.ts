import { TOAST_RESOLVE_VALUES } from '@/constants/resolve'
import * as soundUtils from '@/utils/sound/soundUtils'
import * as vibrateUtils from '@/utils/vibrate/vibrateUtils'
import { queryAllByText, queryByText } from '@testing-library/dom'
import '@testing-library/jest-dom'
import { cuteToast } from '..'

const vibrateSpy = vi.spyOn(vibrateUtils, 'vibrate').mockImplementation(() => {})
const playSoundSpy = vi.spyOn(soundUtils, 'playSound').mockImplementation(() => {})

const getExampleDOM = () => {
  document.body = document.createElement('body')

  return document.body
}

const originalGlobalURL = global.URL

describe('cuteToast', () => {
  describe('snapshots', () => {
    beforeEach(() => {
      // @ts-expect-error
      global.URL = class URL {
        constructor(url: string) {
          // @ts-expect-error
          this.url = url
        }

        get href() {
          // @ts-expect-error
          return this.url
        }
      }
    })

    afterEach(() => {
      global.URL = originalGlobalURL
    })

    it('should render success toast', () => {
      const container = getExampleDOM()

      cuteToast({
        type: 'success',
        title: 'Title',
        description: 'Description'
      })

      expect(container.innerHTML).toMatchSnapshot()
    })

    it('should render error toast', () => {
      const container = getExampleDOM()

      cuteToast({
        type: 'error',
        title: 'Title',
        description: 'Description'
      })

      expect(container.innerHTML).toMatchSnapshot()
    })

    it('should render info toast', () => {
      const container = getExampleDOM()

      cuteToast({
        type: 'info',
        title: 'Title',
        description: 'Description'
      })

      expect(container.innerHTML).toMatchSnapshot()
    })

    it('should render warning toast', () => {
      const container = getExampleDOM()

      cuteToast({
        type: 'warning',
        title: 'Title',
        description: 'Description'
      })

      expect(container.innerHTML).toMatchSnapshot()
    })

    it('should render toast without title', () => {
      const container = getExampleDOM()

      cuteToast({
        type: 'success',
        description: 'Description'
      })

      expect(container.innerHTML).toMatchSnapshot()
    })

    it('should render toast without description', () => {
      const container = getExampleDOM()

      cuteToast({
        type: 'success',
        title: 'Title'
      })

      expect(container.innerHTML).toMatchSnapshot()
    })

    it('should render toast with timer', () => {
      const container = getExampleDOM()

      cuteToast({
        type: 'success',
        title: 'Title',
        description: 'Description',
        timer: 5000
      })

      expect(container.innerHTML).toMatchSnapshot()
    })

    it('should render two toasts', () => {
      const container = getExampleDOM()

      cuteToast({
        type: 'success',
        title: 'First Toast Title',
        description: 'First Toast Description'
      })

      cuteToast({
        type: 'success',
        title: 'Second Toast Title',
        description: 'Second Toast Description'
      })

      expect(container.innerHTML).toMatchSnapshot()
    })

    it('should render toast with custom image size', () => {
      const container = getExampleDOM()

      cuteToast({
        type: 'success',
        title: 'Title',
        description: 'Description',
        imageSize: 48
      })

      expect(container.innerHTML).toMatchSnapshot()
    })

    it('should render toast with custom image source', () => {
      const container = getExampleDOM()

      cuteToast({
        type: 'success',
        title: 'Title',
        description: 'Description',
        imageSrc: 'random image source'
      })

      expect(container.innerHTML).toMatchSnapshot()
    })
  })

  describe('functionalities', () => {
    it('should handle vibrate and playSound when toast is open', () => {
      getExampleDOM()

      cuteToast({
        type: 'success',
        title: 'Title',
        description: 'Description',
        vibrationPattern: [1, 2, 3],
        soundSrc: 'sound source'
      })

      expect(vibrateSpy).toHaveBeenCalledTimes(1)
      expect(vibrateSpy).toHaveBeenCalledWith([1, 2, 3])
      expect(playSoundSpy).toHaveBeenCalledTimes(1)
      expect(playSoundSpy).toHaveBeenCalledWith('sound source')
    })

    it('should not close previous toast when opening a new one', () => {
      const container = getExampleDOM()

      cuteToast({
        type: 'success',
        title: 'First Toast Title',
        description: 'Description'
      })

      cuteToast({
        type: 'success',
        title: 'Second Toast Title',
        description: 'Description'
      })

      expect(queryByText(container, 'First Toast Title')).toBeInTheDocument()
      expect(queryByText(container, 'Second Toast Title')).toBeInTheDocument()
    })

    it('should handle close button click', async () => {
      const callbackMock = vi.fn()
      const container = getExampleDOM()

      cuteToast({
        type: 'success',
        title: 'Title',
        description: 'Description'
      }).then((response) => callbackMock(response))

      queryByText(container, 'X').click()

      await new Promise(process.nextTick)

      expect(container).toBeEmptyDOMElement()
      expect(callbackMock).toHaveBeenCalledTimes(1)
      expect(callbackMock).toHaveBeenCalledWith(TOAST_RESOLVE_VALUES.CLOSE)
    })

    it('should handle close button click with more than one toast', async () => {
      const callbackMock = vi.fn()
      const container = getExampleDOM()

      cuteToast({
        type: 'success',
        title: 'First Toast Title',
        description: 'Description'
      }).then((response) => callbackMock(response))

      cuteToast({
        type: 'success',
        title: 'Second Toast Title',
        description: 'Description'
      }).then((response) => callbackMock(response))

      queryAllByText(container, 'X')[0].click()

      await new Promise(process.nextTick)

      expect(queryByText(container, 'First Toast Title')).not.toBeInTheDocument()
      expect(queryByText(container, 'Second Toast Title')).toBeInTheDocument()
      expect(callbackMock).toHaveBeenCalledTimes(1)
      expect(callbackMock).toHaveBeenCalledWith(TOAST_RESOLVE_VALUES.CLOSE)
    })

    it('should handle close by timer', async () => {
      vi.useFakeTimers()

      const callbackMock = vi.fn()
      const container = getExampleDOM()

      cuteToast({
        type: 'success',
        title: 'Title',
        description: 'Description',
        timer: 5000
      }).then((response) => callbackMock(response))

      vi.advanceTimersByTime(4999)
      await new Promise(process.nextTick)

      expect(container).not.toBeEmptyDOMElement()
      expect(callbackMock).not.toHaveBeenCalled()

      vi.advanceTimersByTime(1)
      await new Promise(process.nextTick)

      expect(container).toBeEmptyDOMElement()
      expect(callbackMock).toHaveBeenCalledTimes(1)
      expect(callbackMock).toHaveBeenCalledWith(TOAST_RESOLVE_VALUES.CLOSE)

      vi.useRealTimers()
    })
  })
})
