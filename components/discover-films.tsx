'use client'
import { Movie } from '@/lib/definitions'
import Card from './card'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { Spinner } from './loading/skeletons'
import { fetchDiscover } from '@/lib/data'

type Props = {
  type: string
  sort_by?: string
  minRuntime?: string
  from?: string
  to?: string
  genres?: string
  page?: number
  discover: Movie[]
}

export default function DiscovevFilms(props: Props) {
  const { type, sort_by, genres, minRuntime, from, to, page, discover } = props
  const [nextPage, setNextPage] = useState<number | undefined>(page)
  const [movies, setMovies] = useState<Movie[]>([])
  const [ref, inView] = useInView()
  async function loadMoreMovies() {
    const next = (nextPage || 1) + 1
    const res = await fetchDiscover(
      type,
      sort_by,
      genres,
      minRuntime,
      from,
      to,
      next
    )
    if (res.length) {
      setMovies(pre => [...(pre?.length ? pre : discover), ...res])
      setNextPage(next)
    }
  }
  useEffect(() => {
    setMovies([])
  }, [type, sort_by, genres, minRuntime, from, to])
  useEffect(() => {
    if (inView) {
      loadMoreMovies()
    }
  }, [inView])
  const render = movies?.length ? movies : discover
  return (
    <>
      {render &&
        render.map((movie: Movie) => {
          if (!movie?.poster_path) return
          const filmInfor = {
            id: movie?.id,
            poster_path: movie?.poster_path,
            original_name: movie?.original_name,
            original_title: movie?.original_title,
            vote_average: movie?.vote_average,
            release_date: movie?.release_date,
            first_air_date: movie?.first_air_date,
            prefix: 'tv'
          }
          return <Card key={movie?.id} {...filmInfor} />
        })}
      <div ref={ref} className="flex items-center w-full justify-center">
        <Spinner />
      </div>
    </>
  )
}
