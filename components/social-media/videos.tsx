import { XMarkIcon } from '@heroicons/react/24/solid'
import { SetStateAction, Dispatch } from 'react'
import { usePathname } from 'next/navigation'
type Props = {
  videoKey: string
  name: string
  setShow: Dispatch<
    SetStateAction<{
      videoKey: string
      name: string
    }>
  >
}
export default function VideoPlayer({ videoKey, name, setShow }: Props) {
  const pathname = usePathname()
  const handleCloseVideo = () => {
    setShow({ videoKey: '', name: '' })
    window.history.replaceState(null, '', pathname)
  }
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center z-50">
      <div>
        <div className="flex items-center py-3 px-2 bg-black">
          <p className="text-2xl font-bold">{name}</p>
          <span
            onClick={handleCloseVideo}
            className="inline-block p-2 rounded-full cursor-pointer bg-black hover:opacity-80 ml-auto  "
          >
            <XMarkIcon className="w-6 h-6" />
          </span>
        </div>
        <iframe
          className="w-[80vw] h-[70vh]"
          src={`https://youtube.com/embed/${videoKey}`}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
