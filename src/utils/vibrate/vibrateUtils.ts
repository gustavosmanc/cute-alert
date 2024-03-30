export const vibrate = (pattern: number | number[]) => {
  if (!navigator.vibrate) {
    return
  }

  navigator.vibrate(pattern)
}
