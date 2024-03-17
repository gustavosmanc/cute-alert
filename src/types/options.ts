export type AlertOptions = {
  type: 'error' | 'info' | 'question' | 'success' | 'warning'
  title?: string
  description?: string
  timer?: number
  primaryButtonText?: string
  secondaryButtonText?: string
  vibrationPattern?: number | number[]
  soundSrc?: string
  closeStyle?: 'default' | 'circle'
  imageSrc?: string
  imageSize?: number
}

export type ToastOptions = {
  type: 'error' | 'info' | 'success' | 'warning'
  title?: string
  description?: string
  timer?: number
  vibrationPattern?: number | number[]
  soundSrc?: string
  imageSrc?: string
  imageSize?: number
}
