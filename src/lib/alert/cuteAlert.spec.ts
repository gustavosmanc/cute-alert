import { ALERT_RESOLVE_VALUES } from '@/constants/resolve'
import * as soundUtils from '@/utils/sound/soundUtils'
import * as vibrateUtils from '@/utils/vibrate/vibrateUtils'
import { queryByText } from '@testing-library/dom'
import '@testing-library/jest-dom'
import { cuteAlert } from '..'

const vibrateSpy = vi.spyOn(vibrateUtils, 'vibrate').mockImplementation(() => {})
const playSoundSpy = vi.spyOn(soundUtils, 'playSound').mockImplementation(() => {})

const getExampleDOM = () => {
  document.body = document.createElement('body')

  return document.body
}

const originalGlobalURL = global.URL

describe('cuteAlert', () => {
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

    it('should render success alert', () => {
      const container = getExampleDOM()

      cuteAlert({
        type: 'success',
        title: 'Title',
        description: 'Description',
        primaryButtonText: 'Confirm',
        secondaryButtonText: 'Cancel'
      })

      expect(container.innerHTML).toMatchSnapshot()
    })

    it('should render error alert', () => {
      const container = getExampleDOM()

      cuteAlert({
        type: 'error',
        title: 'Title',
        description: 'Description',
        primaryButtonText: 'Confirm',
        secondaryButtonText: 'Cancel'
      })

      expect(container.innerHTML).toMatchSnapshot()
    })

    it('should render info alert', () => {
      const container = getExampleDOM()

      cuteAlert({
        type: 'info',
        title: 'Title',
        description: 'Description',
        primaryButtonText: 'Confirm',
        secondaryButtonText: 'Cancel'
      })

      expect(container.innerHTML).toMatchSnapshot()
    })

    it('should render warning alert', () => {
      const container = getExampleDOM()

      cuteAlert({
        type: 'warning',
        title: 'Title',
        description: 'Description',
        primaryButtonText: 'Confirm',
        secondaryButtonText: 'Cancel'
      })

      expect(container.innerHTML).toMatchSnapshot()
    })

    it('should render question alert', () => {
      const container = getExampleDOM()

      cuteAlert({
        type: 'question',
        title: 'Title',
        description: 'Description',
        primaryButtonText: 'Confirm',
        secondaryButtonText: 'Cancel'
      })

      expect(container.innerHTML).toMatchSnapshot()
    })

    it('should render alert without title', () => {
      const container = getExampleDOM()

      cuteAlert({
        type: 'success',
        description: 'Description',
        primaryButtonText: 'Confirm',
        secondaryButtonText: 'Cancel'
      })

      expect(container.innerHTML).toMatchSnapshot()
    })

    it('should render alert without description', () => {
      const container = getExampleDOM()

      cuteAlert({
        type: 'success',
        title: 'Title',
        primaryButtonText: 'Confirm',
        secondaryButtonText: 'Cancel'
      })

      expect(container.innerHTML).toMatchSnapshot()
    })

    it('should render alert without primary button', () => {
      const container = getExampleDOM()

      cuteAlert({
        type: 'success',
        title: 'Title',
        description: 'Description',
        secondaryButtonText: 'Cancel'
      })

      expect(container.innerHTML).toMatchSnapshot()
    })

    it('should render alert without secondary button', () => {
      const container = getExampleDOM()

      cuteAlert({
        type: 'success',
        title: 'Title',
        description: 'Description',
        primaryButtonText: 'Confirm'
      })

      expect(container.innerHTML).toMatchSnapshot()
    })

    it('should render alert with timer', () => {
      const container = getExampleDOM()

      cuteAlert({
        type: 'success',
        title: 'Title',
        description: 'Description',
        primaryButtonText: 'Confirm',
        secondaryButtonText: 'Cancel',
        timer: 5000
      })

      expect(container.innerHTML).toMatchSnapshot()
    })

    it('should render alert with circle close style', () => {
      const container = getExampleDOM()

      cuteAlert({
        type: 'success',
        title: 'Title',
        description: 'Description',
        primaryButtonText: 'Confirm',
        secondaryButtonText: 'Cancel',
        closeStyle: 'circle'
      })

      expect(container.innerHTML).toMatchSnapshot()
    })

    it('should render alert with custom image size', () => {
      const container = getExampleDOM()

      cuteAlert({
        type: 'success',
        title: 'Title',
        description: 'Description',
        primaryButtonText: 'Confirm',
        secondaryButtonText: 'Cancel',
        imageSize: 48
      })

      expect(container.innerHTML).toMatchSnapshot()
    })

    it('should render alert with custom image source', () => {
      const container = getExampleDOM()

      cuteAlert({
        type: 'success',
        title: 'Title',
        description: 'Description',
        primaryButtonText: 'Confirm',
        secondaryButtonText: 'Cancel',
        imageSrc: 'random image source'
      })

      expect(container.innerHTML).toMatchSnapshot()
    })
  })

  describe('functionalities', () => {
    it('should handle vibrate and playSound when alert is open', () => {
      getExampleDOM()

      cuteAlert({
        type: 'success',
        title: 'Title',
        description: 'Description',
        primaryButtonText: 'Confirm',
        secondaryButtonText: 'Cancel',
        vibrationPattern: [1, 2, 3],
        soundSrc: 'sound source'
      })

      expect(vibrateSpy).toHaveBeenCalledTimes(1)
      expect(vibrateSpy).toHaveBeenCalledWith([1, 2, 3])
      expect(playSoundSpy).toHaveBeenCalledTimes(1)
      expect(playSoundSpy).toHaveBeenCalledWith('sound source')
    })

    it('should close previous alert when opening a new one', () => {
      const container = getExampleDOM()

      cuteAlert({
        type: 'success',
        title: 'First Alert Title',
        description: 'Description',
        primaryButtonText: 'Confirm',
        secondaryButtonText: 'Cancel'
      })

      cuteAlert({
        type: 'success',
        title: 'Second Alert Title',
        description: 'Description',
        primaryButtonText: 'Confirm',
        secondaryButtonText: 'Cancel'
      })

      expect(queryByText(container, 'First Alert Title')).not.toBeInTheDocument()
      expect(queryByText(container, 'Second Alert Title')).toBeInTheDocument()
    })

    it('should handle primary button click', async () => {
      const callbackMock = vi.fn()
      const container = getExampleDOM()

      cuteAlert({
        type: 'success',
        title: 'Title',
        description: 'Description',
        primaryButtonText: 'Confirm',
        secondaryButtonText: 'Cancel'
      }).then((response) => callbackMock(response))

      queryByText(container, 'Confirm').click()

      await new Promise(process.nextTick)

      expect(container).toBeEmptyDOMElement()
      expect(callbackMock).toHaveBeenCalledTimes(1)
      expect(callbackMock).toHaveBeenCalledWith(ALERT_RESOLVE_VALUES.PRIMARY_BUTTON_CLICKED)
    })

    it('should handle secondary button click', async () => {
      const callbackMock = vi.fn()
      const container = getExampleDOM()

      cuteAlert({
        type: 'success',
        title: 'Title',
        description: 'Description',
        primaryButtonText: 'Confirm',
        secondaryButtonText: 'Cancel'
      }).then((response) => callbackMock(response))

      queryByText(container, 'Cancel').click()

      await new Promise(process.nextTick)

      expect(container).toBeEmptyDOMElement()
      expect(callbackMock).toHaveBeenCalledTimes(1)
      expect(callbackMock).toHaveBeenCalledWith(ALERT_RESOLVE_VALUES.SECONDARY_BUTTON_CLICKED)
    })

    it('should handle close button click', async () => {
      const callbackMock = vi.fn()
      const container = getExampleDOM()

      cuteAlert({
        type: 'success',
        title: 'Title',
        description: 'Description',
        primaryButtonText: 'Confirm',
        secondaryButtonText: 'Cancel'
      }).then((response) => callbackMock(response))

      queryByText(container, 'X').click()

      await new Promise(process.nextTick)

      expect(container).toBeEmptyDOMElement()
      expect(callbackMock).toHaveBeenCalledTimes(1)
      expect(callbackMock).toHaveBeenCalledWith(ALERT_RESOLVE_VALUES.CLOSE)
    })

    it('should handle close by timer', async () => {
      vi.useFakeTimers()

      const callbackMock = vi.fn()
      const container = getExampleDOM()

      cuteAlert({
        type: 'success',
        title: 'Title',
        description: 'Description',
        primaryButtonText: 'Confirm',
        secondaryButtonText: 'Cancel',
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
      expect(callbackMock).toHaveBeenCalledWith(ALERT_RESOLVE_VALUES.CLOSE)

      vi.useRealTimers()
    })
  })
})
