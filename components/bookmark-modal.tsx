'use client'
import { fetchMovieListBookMark, fetchEachFilm } from '@/lib/data'
import { useEffect, useState } from 'react'
import Card from './card'
import { DocumentData } from 'firebase/firestore'
import { Movie } from '@/lib/definitions'
import { useContext } from 'react'
import { ModalContext } from './header'
import clsx from 'clsx'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useSession } from 'next-auth/react'

type Response = {
  id: string
  data: DocumentData
}

export default function BookMarkModal() {
  const [filmIds, setFilmIds] = useState<Response[]>([])
  const [listFilm, setListFilm] = useState<Movie[]>([])
  const [isOpen, setOpen] = useContext(ModalContext)
  const session = useSession()
  useEffect(() => {
    async function fetchListFilmId() {
      if (session?.data?.user?.email) {
        const res = await fetchMovieListBookMark(session?.data?.user?.email)
        if (res?.length) {
          setFilmIds(res)
        }
      }
    }
    fetchListFilmId()
  }, [isOpen, session?.data?.user?.email])
  useEffect(() => {
    async function fetchAllFilm() {
      try {
        const promises = filmIds.map(mv =>
          fetchEachFilm(mv.data.id, mv.data.type)
        )
        const result = await Promise.all(promises)
        if (result) setListFilm(result)
      } catch (e) {
        console.error(e)
      }
    }
    if (filmIds.length > 0) fetchAllFilm()
  }, [filmIds.length, filmIds])
  const handleCloseModal = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    setOpen(false)
  }
  return (
    <div
      className={clsx(
        'fixed inset-0 bg-[rgba(0,0,0,0.8)] z-50 flex items-center justify-center ',
        { hidden: isOpen === false }
      )}
    >
      <div className="w-[80vw] h-[80vh] bg-black px-4 relative">
        <p className="text-center text-2xl font-semibold py-4">
          My favourite Films
        </p>
        <XMarkIcon
          onClick={() => setOpen(false)}
          className="absolute w-10 h-10 p-2 top-2 right-2 cursor-pointer hover:bg-[rgba(255,255,255,0.1)] rounded-full"
        />
        <div className="flex items-center gap-5 flex-wrap">
          {listFilm?.map((film, index: number) => {
            return (
              <div key={film.id} onClick={handleCloseModal}>
                <Card {...film} prefix={filmIds[index]?.data?.type} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
