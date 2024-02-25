import { BookmarkIcon } from '@heroicons/react/24/solid'
import Toast, { toast } from '@/components/toast'
import { useSession } from 'next-auth/react'
import { useParams, usePathname } from 'next/navigation'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/service/firebase'
import { useEffect, useState } from 'react'
import { fetchMovieListBookMark } from '@/lib/data'
import clsx from 'clsx'

export default function BookMarkFilm() {
  const [added, setAdded] = useState<boolean>(false)
  const { id } = useParams()
  const pathname = usePathname()
  const session = useSession()
  const handleAddFilmToBookMark = async () => {
    if (!session?.data?.user) {
      toast({
        title: 'Warning',
        message: 'You need to Login',
        type: 'error',
        duration: 300
      })
    } else {
      const type = pathname.split('/')[1]
      await addDoc(collection(db, 'movies'), {
        type: type,
        id: id
      })
    }
  }
  useEffect(() => {
    async function getMovieId() {
      const res = await fetchMovieListBookMark()
      console.log(res)
      if (res) {
        const isAdded = res.some(mv => mv.id === id)
        if (isAdded) setAdded(true)
      }
    }
    getMovieId()
  }, [id])
  return (
    <>
      <Toast />
      <span
        onClick={handleAddFilmToBookMark}
        className="inline-block p-2 rounded-full bg-black cursor-pointer hover:scale-105"
      >
        <BookmarkIcon
          className={clsx('w-6 h-6', { 'text-yellow-500': added })}
        />
      </span>
    </>
  )
}
