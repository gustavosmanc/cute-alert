import './button.css'

export const createButton = (label: string, callback: () => void) => {
  const btn = document.createElement('button')

  btn.innerText = label
  btn.addEventListener('click', callback)

  return btn
}
