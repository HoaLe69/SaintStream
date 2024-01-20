'use client'
import clsx from 'clsx'
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { Genre } from '@/lib/definitions'
import { fetchListGenre } from '@/lib/data'
import { usePathname, useSearchParams } from 'next/navigation'
import { GENRE_MV, GENRE_TV } from '@/lib/endpoint'
import FilterRange from './filter-range'
import FilterDate from './filter-date'
import Link from 'next/link'

export default function FilterAdvance() {
  const [showFilterAd, setShowFilterAd] = useState<boolean>(true)
  const [genres, setGenres] = useState<Genre[]>([])
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const address = pathname === '/explore' ? GENRE_MV : GENRE_TV
  const genresSelected = searchParams.getAll('genres')
  useEffect(() => {
    async function getListGenre() {
      const res = await fetchListGenre(address)
      if (res) setGenres(res)
    }
    getListGenre()
  }, [address])
  const createUrl = (genreId: string): string => {
    const params = new URLSearchParams(searchParams)
    if (!params.has('genres', genreId))
      if (searchParams.get('genres')) {
        params.append('genres', genreId)
      } else params.set('genres', genreId)
    else {
      params.delete('genres', genreId)
    }
    return `${pathname}?${params.toString()}`
  }
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
            genres.map((genre: Genre) => {
              const isGenreSelected = genresSelected.includes(
                genre.id.toString()
              )
              return (
                <Link key={genre.id} href={createUrl(genre.id.toString())}>
                  <span
                    className={clsx(
                      'inline-block text-gray-300 py-2 px-3 rounded-xl border-2 border-gray-200 cursor-pointer hover:opacity-75',
                      { 'bg-green-500 text-white font-bold': isGenreSelected }
                    )}
                  >
                    {genre.name}
                  </span>
                </Link>
              )
            })}
        </div>
        <FilterRange />
        <FilterDate />
      </div>
    </div>
  )
}
