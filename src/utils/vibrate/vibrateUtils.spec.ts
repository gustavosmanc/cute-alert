import { vibrate } from './vibrateUtils'

const mockVibrate = vi.fn()
const originalVibrate = navigator.vibrate

describe('vibrateUtils', () => {
  describe('vibrate', () => {
    beforeEach(() => {
      navigator.vibrate = mockVibrate
    })

    afterEach(() => {
      navigator.vibrate = originalVibrate
    })

    it('vibrates when pattern is an array', () => {
      const pattern = [100, 200, 300]

      vibrate(pattern)

      expect(mockVibrate).toHaveBeenCalledWith(pattern)
    })

    it('vibrates when pattern is a number', () => {
      const pattern = 200

      vibrate(pattern)

      expect(mockVibrate).toHaveBeenCalledWith(pattern)
    })

    it('should not trigger vibrate in case navigator does not have the vibrate function', () => {
      navigator.vibrate = undefined
      const pattern = 200

      vibrate(pattern)

      expect(mockVibrate).not.toHaveBeenCalled()
    })
  })
})
