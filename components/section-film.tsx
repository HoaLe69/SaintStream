'use client'
import { Movie } from '@/lib/definitions'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Card from './card'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function SectionFilm({
  movies,
  title,
  prefix = 'movie'
}: {
  movies: Movie[]
  title: string
  prefix?: string
}) {
  if (!movies?.length) return
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
        >
          {movies &&
            movies.map((movie: Movie) => {
              if (!movie.poster_path) return
              const filmInfor = {
                id: movie?.id,
                poster_path: movie?.poster_path,
                original_name: movie?.original_name,
                original_title: movie?.original_title,
                vote_average: movie?.vote_average,
                release_date: movie?.release_date,
                first_air_date: movie?.first_air_date,
                prefix: prefix
              }
              return (
                <SwiperSlide key={movie?.id} className="!w-max ">
                  <Card {...filmInfor} />
                </SwiperSlide>
              )
            })}
        </Swiper>
      </div>
    </div>
  )
}
