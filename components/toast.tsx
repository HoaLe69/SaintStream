import { CLIENT_STATIC_FILES_RUNTIME_AMP } from 'next/dist/shared/lib/constants'

type ToastProps = {
  title: string
  message: string
  type: string
  duration: number
}
export default function Toast() {
  return <div className="top-[100px] fixed right-[32px] " id="toast"></div>
}

export function toast({
  title = '',
  message = '',
  type = 'infor',
  duration = 3000
}: ToastProps) {
  const main = document.getElementById('toast')
  if (main) {
    const toast = document.createElement('div')
    toast.classList.add('toast', `toast__${type}`)
    toast.style.animation = 'showIn 1s ease , showOut  linear 2s 2s  forwards'
    toast.innerHTML = `
      <div class="p-6 toast_inner">
         <div class="flex items-center justify-between">
          <p class="title">${title}</p>
          <p class="text-black p-1 cursor-pointer toast-close__icon">&#10005;</p>
        </div>
        <p class="text-black">${message}</p>
      </div>
    `
    main.appendChild(toast)
    const fireWhen = setTimeout(() => {
      main.removeChild(toast)
    }, 4000)
    toast.onclick = function (e) {
      //@ts-ignore
      if (e.target.closest('.toast-close__icon')) {
        main.removeChild(toast)
        clearTimeout(fireWhen)
      }
    }
  }
}
