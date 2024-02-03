export const vibrate = (vibrate: number[]) => {
  if (vibrate.length > 0) {
    navigator.vibrate(vibrate)
  }
}
