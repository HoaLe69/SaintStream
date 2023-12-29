'use client'
import { Movie } from '@/lib/definitions'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function SectionFilm({
  movies,
  title
}: {
  movies: Movie[]
  title: string
}) {
  return (
    <div className="container px-2 mx-auto overflow-hidden">
      <h2 className="text-2xl mb-6 font-bold">{title}</h2>
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          slidesPerView="auto"
          slidesPerGroupAuto
          spaceBetween={30}
          loop
        >
          {movies.map((movie: Movie) => {
            return (
              <SwiperSlide key={movie?.id} className="!w-max !mr-4">
                <div key={movie?.id} className="transition-all">
                  <div className="relative w-[250px] overflow-hidden rounded-xl">
                    <Image
                      src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                      alt={movie?.overview}
                      width={250}
                      height={400}
                      className="rounded-xl w-auto"
                    />
                    <div className="absolute p-3 inset-0 w-full bg-dark-to-light flex flex-col justify-end">
                      <p className="text-[16px] font-bold truncate w-[70%]">
                        {movie?.original_title || movie?.original_name}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="flex items-center">
                          <StarIcon className="w-6 h-6 text-yellow-400" />
                          <span className="text-sm font-semibold">
                            {movie?.vote_average.toFixed(1)}
                          </span>
                        </span>
                        <p className="text-xs leading-3 text-gray-400 pl-2 border-l-2 border-gray-400">
                          {movie?.release_date &&
                            movie.release_date.split('-')[0]}
                          {movie?.first_air_date &&
                            movie.first_air_date.split('-')[0]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
