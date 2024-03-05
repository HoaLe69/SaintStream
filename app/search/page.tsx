'use client'
import { useEffect, useState } from 'react'
import { fetchSeachMovie } from '@/lib/data'
import { Movie } from '@/lib/definitions'
import Card from '@/components/card'
import Pagination from '@/components/pagination'

type Response = {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export default function Page({
  searchParams
}: {
  searchParams: { q?: string; page?: number }
}) {
  const [movieList, setMovieList] = useState<Response>()
  const { q, page } = searchParams
  useEffect(() => {
    async function getMovieList() {
      const res = await fetchSeachMovie(q, Number(page))
      if (res) setMovieList(res)
    }
    getMovieList()
  }, [q, page])

  return (
    <>
      <div className="min-h-screen container mx-auto pt-20 w-full">
        <div className="text-xl font-bold py-4">
          {movieList?.results && (
            <p>Search results total {movieList?.total_results}</p>
          )}
        </div>
        <div className="flex flex-wrap gap-4">
          {movieList?.results?.map((mv: Movie) => {
            if (
              mv.media_type == 'person' ||
              (mv.backdrop_path == null && mv.poster_path == null)
            )
              return
            return <Card key={mv.id} {...mv} prefix={mv.media_type} />
          })}
        </div>
        <div>
          <Pagination total_pages={movieList?.total_pages} />
        </div>
      </div>
    </>
  )
}
