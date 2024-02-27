'use client'
import { Movie } from '@/lib/definitions'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Link from 'next/link'

export default function Heros({
  movies,
  type
}: {
  movies: Movie[]
  type: string
}) {
  return (
    <div className="h-[648px] flex overflow-hidden relative">
      <Swiper
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={true}
        modules={[Pagination, Autoplay]}
      >
        {movies?.map((movie: Movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <Link href={`${type}/${movie.id}`}>
                <div
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
                          {/* <Button primary> */}
                          {/*   <div className="flex items-center gap-2"> */}
                          {/*     <PlayCircleIcon className="w-6 h-6" /> */}
                          {/*     <span>Watch Trailer</span> */}
                          {/*   </div> */}
                          {/* </Button> */}
                          {/* <Button outline> */}
                          {/*   <div className="flex items-center gap-2"> */}
                          {/*     <BookmarkIcon className="w-6 h-6" /> */}
                          {/*     <span>Add WatchList</span> */}
                          {/*   </div> */}
                          {/* </Button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
