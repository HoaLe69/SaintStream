import { BookmarkIcon } from '@heroicons/react/24/solid'
import Toast, { toast } from '@/components/toast'
import { useSession } from 'next-auth/react'
import { useParams, usePathname } from 'next/navigation'
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore'
import { db } from '@/service/firebase'
import { useEffect, useState } from 'react'
import { fetchMovieListBookMark } from '@/lib/data'
import clsx from 'clsx'

export default function BookMarkFilm() {
  const [added, setAdded] = useState<boolean>(false)
  const [docId, setDocId] = useState<string>('')
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
      if (added) {
        setAdded(false)
        await deleteDoc(doc(db, 'movies', docId))
        toast({
          title: 'Success',
          message: 'This film has been removed bookmark',
          type: 'success',
          duration: 3000
        })
      } else {
        setAdded(true)
        const type = pathname.split('/')[1]
        await addDoc(collection(db, 'movies'), {
          type: type,
          id: id
        })
        toast({
          title: 'Success',
          message: 'This film is now bookmarked',
          type: 'success',
          duration: 3000
        })
      }
    }
  }
  useEffect(() => {
    async function getMovieId() {
      const res = await fetchMovieListBookMark()
      console.log(res)
      if (res) {
        const doc = res.find(mv => mv.data.id === id)
        if (doc?.id) {
          setAdded(true)
          setDocId(doc?.id)
        }
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
