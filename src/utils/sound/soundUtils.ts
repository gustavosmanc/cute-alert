export const playSound = (src?: string) => {
  if (src) {
    const sound = new Audio(src)
    sound.play()
  }
}
