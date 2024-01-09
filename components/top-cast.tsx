'use client'
import { Cast } from '@/lib/definitions'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
type Props = {
  casts: Cast[]
}
export default function TopCast({ casts }: Props) {
  const fallbackAvt = '/images/no-avatar.png'
  return (
    <div className="container mx-auto px-2">
      <p className="text-xl font-bold mb-2">Top Cast</p>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        slidesPerView="auto"
        slidesPerGroupAuto
        spaceBetween={30}
        loop
      >
        {casts &&
          casts.map(cast => (
            <SwiperSlide key={cast?.id} className="!w-max !mr-4">
              <div className="flex items-center gap-4">
                <div className="w-[48px] h-[48px]">
                  <Image
                    src={
                      cast?.profile_path
                        ? `https://image.tmdb.org/t/p/original${cast?.profile_path}`
                        : fallbackAvt
                    }
                    width={48}
                    height={48}
                    className="rounded-full w-full h-full object-cover"
                    alt={cast?.original_name}
                  />
                </div>
                <div>
                  <strong>{cast?.original_name}</strong>
                  <p className="text-xs text-gray-500 font-medium">
                    {cast?.character}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}
