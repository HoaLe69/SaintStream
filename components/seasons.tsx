'use client'
import Image from 'next/image'
import { Season } from '@/lib/definitions'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { StarIcon } from '@heroicons/react/24/solid'

type Props = {
  seasons: Season[]
}
export default function Seasons({ seasons }: Props) {
  console.log(seasons)
  return (
    <div className="container px-2 mx-auto">
      <h2 className="text-2xl mb-6 font-bold">Seasons</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        slidesPerGroupAuto
        slidesPerView="auto"
        spaceBetween={30}
      >
        {seasons &&
          seasons.map((season: Season) => (
            <SwiperSlide key={season.id} className="!w-max">
              <div className="flex items-center max-w-[300px] border-2 border-gray-700 rounded-md pr-2">
                <div className="w-[130px] h-[195px]">
                  <Image
                    src={`https://image.tmdb.org/t/p/original${season?.poster_path}`}
                    width={130}
                    height={195}
                    className="h-full w-full"
                    alt={season.name}
                  />
                </div>
                <div className="ml-4 ">
                  <p className="font-bold text-xl mb-4">{season.name}</p>
                  <span>
                    <span className="rounded-xl flex items-center shadow-red-300 gap-2">
                      <StarIcon className="w-6 h-6 text-yellow-500" />
                      {season.vote_average}
                    </span>
                    <strong>
                      {season?.air_date && season.air_date.split('-')[0]}{' '}
                      &#x2022; Episodes &#x2022; {season.episode_count}
                    </strong>
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}
