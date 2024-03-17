export const vibrate = (pattern: number | number[]) => {
  navigator.vibrate(pattern)
}
