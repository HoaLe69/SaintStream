import { BookmarkIcon } from '@heroicons/react/24/solid'
import Toast, { toast } from '@/components/toast'
import { useSession } from 'next-auth/react'

export default function BookMarkFilm() {
  const session = useSession()
  const handleAddFilmToBookMark = () => {
    if (!session?.data?.user) {
      toast({
        title: 'Warning',
        message: 'You need to Login',
        type: 'error',
        duration: 300
      })
    }
  }
  return (
    <>
      <Toast />
      <span
        onClick={handleAddFilmToBookMark}
        className="inline-block p-2 rounded-full bg-black cursor-pointer hover:scale-105"
      >
        <BookmarkIcon className="w-6 h-6" />
      </span>
    </>
  )
}
