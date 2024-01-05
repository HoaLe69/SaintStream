'use client'
import { Button } from './button'
import { PlayCircleIcon } from '@heroicons/react/24/solid'
import { BookmarkIcon } from '@heroicons/react/24/outline'
import { Movie } from '@/lib/definitions'
import { useEffect, useState } from 'react'

export default function Heros({ movies }: { movies: Movie[] }) {
  const [index, setIndex] = useState<number>(0)
  useEffect(() => {
    if (movies?.length) {
      const lastIndex = movies.length - 1
      if (index > lastIndex) setIndex(0)
    }
  }, [index, movies?.length])
  useEffect(() => {
    const timerId = setTimeout(() => {
      setIndex(pre => pre + 1)
    }, 5000)
    return () => clearTimeout(timerId)
  }, [index, movies?.length])
  return (
    <div className="h-[648px] flex overflow-hidden relative">
      {movies?.map((movie: Movie, heroIndex: number) => {
        //        let position = 'next'
        //       if (heroIndex === index) position = 'active'
        //      if (
        //       heroIndex === index - 1 ||
        //      (index === 0 && heroIndex === movies.length - 1)
        //   )
        //    position = 'last'
        if (heroIndex > 0) return
        return (
          <div
            key={movie.id}
            style={{
              backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`
            }}
            className={` w-screen bg-no-repeat bg-cover overflow-hidden h-[300px] md:h-[648px]`}
          >
            <div className="absolute inset-0 bg-hero-pattern">
              <div className="container px-2 mx-auto h-full flex items-end">
                <div className="py-11 flex flex-col gap-y-5">
                  <h1 className="text-4xl font-bold">
                    {movie?.original_title || movie?.original_name}
                  </h1>
                  <p className="text-sm text-gray-400 font-normal">
                    Release date &#x2022;{' '}
                    {movie?.release_date || movie?.first_air_date}
                  </p>
                  <p className="text-sm w-[50%]">{movie?.overview}</p>
                  <div className="flex items-center gap-4">
                    <Button primary>
                      <div className="flex items-center gap-2">
                        <PlayCircleIcon className="w-6 h-6" />
                        <span>Watch Trailer</span>
                      </div>
                    </Button>
                    <Button outline>
                      <div className="flex items-center gap-2">
                        <BookmarkIcon className="w-6 h-6" />
                        <span>Add WatchList</span>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
