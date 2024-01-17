'use client'
import clsx from 'clsx'
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { Genre } from '@/lib/definitions'
import { fetchListGenre } from '@/lib/data'
import { usePathname } from 'next/navigation'
import { GENRE_MV, GENRE_TV } from '@/lib/endpoint'

export default function FilterAdvance() {
  const [showFilterAd, setShowFilterAd] = useState<boolean>(true)
  const [genres, setGenres] = useState<Genre[]>([])
  const pathname = usePathname()
  const address = pathname === '/explore' ? GENRE_MV : GENRE_TV
  useEffect(() => {
    async function getListGenre() {
      const res = await fetchListGenre(address)
      if (res) setGenres(res)
    }
    getListGenre()
  }, [])
  return (
    <div className="bg-gray-900 px-2 rounded-md mt-3 ">
      <div
        onClick={() => setShowFilterAd(!showFilterAd)}
        className="py-2 flex items-center rounded-md cursor-pointer"
      >
        <p className="font-bold ">Filter</p>
        <span className="ml-auto ">
          {showFilterAd ? (
            <ChevronDownIcon className="w-4 h-4 font-bold" />
          ) : (
            <ChevronRightIcon className="w-4 h-4 font-bold" />
          )}
        </span>
      </div>
      <div
        className={clsx('border-t-2 border-black py-2', {
          block: showFilterAd,
          hidden: !showFilterAd
        })}
      >
        <p className="py-2">Genre</p>
        <div className="flex flex-wrap gap-2 max-h-[250px] overflow-y-scroll">
          {genres &&
            genres.map((genre: Genre) => (
              <span
                key={genre.id}
                className="inline-block py-2 px-3 rounded-xl border-2 cursor-pointer hover:opacity-75"
              >
                {genre.name}
              </span>
            ))}
        </div>
      </div>
    </div>
  )
}
