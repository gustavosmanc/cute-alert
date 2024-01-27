export const vibrate = (vibrate: number[]) => {
  if (vibrate.length > 0) {
    navigator.vibrate(vibrate)
  }
}

export const playSound = (src?: string) => {
  if (src) {
    const sound = new Audio(src)
    sound.play()
  }
}
