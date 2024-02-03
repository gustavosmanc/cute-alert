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

    it('vibrates when vibrate array is provided', () => {
      const vibrateArray = [100, 200, 300]

      vibrate(vibrateArray)

      expect(mockVibrate).toHaveBeenCalledWith(vibrateArray)
    })

    it('does not vibrate when vibrate array is empty', () => {
      const emptyArray: number[] = []

      vibrate(emptyArray)

      expect(mockVibrate).not.toHaveBeenCalled()
    })
  })
})
