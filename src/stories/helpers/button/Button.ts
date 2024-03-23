import './button.css'

export const createButton = (
  label: string,
  callback: () => void,
  cssVariables: Record<string, string>
) => {
  const btn = document.createElement('button')

  Object.entries(cssVariables).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value)
  })

  btn.innerText = label
  btn.addEventListener('click', callback)

  return btn
}
