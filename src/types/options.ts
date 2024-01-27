export type AlertOptions = {
  type: 'error' | 'info' | 'question' | 'success' | 'warning'
  title?: string
  description?: string
  timer?: number
  primaryButtonText?: string
  secondaryButtonText?: string
  vibrationPattern?: number[]
  soundSrc?: string
  closeStyle?: 'default' | 'circle'
  imageSize?: number
}

export type ToastOptions = {
  type: 'error' | 'info' | 'success' | 'warning'
  title?: string
  description?: string
  timer?: number
  vibrationPattern?: number[]
  soundSrc?: string
  imageSize?: number
}
