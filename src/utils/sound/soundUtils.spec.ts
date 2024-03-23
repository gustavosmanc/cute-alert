import { playSound } from './soundUtils'

const audioPlayMock = vi.fn()

const windowAudioSpy = vi.spyOn(window, 'Audio').mockImplementation(
  () =>
    ({
      play: audioPlayMock
    }) as unknown as HTMLAudioElement
)

describe('soundUtils', () => {
  describe('playSound function', () => {
    it('plays sound when source is provided', () => {
      const src = 'test.mp3'

      playSound(src)

      expect(windowAudioSpy).toHaveBeenCalledWith(src)
      expect(audioPlayMock).toHaveBeenCalledTimes(1)
    })

    it('does not play sound when source is not provided', () => {
      playSound()

      expect(windowAudioSpy).not.toHaveBeenCalled()
      expect(audioPlayMock).not.toHaveBeenCalled()
    })
  })
})
