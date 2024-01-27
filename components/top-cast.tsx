'use client'
import { Cast } from '@/lib/definitions'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { fetchCasts } from '@/lib/data'
import { CAST_TV, CAST_MOVIE } from '@/lib/endpoint'
import { useParams, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

type Props = {
  title: string
}

export default function TopCast({ title }: Props) {
  const [casts, setCasts] = useState<Cast[]>([])
  const pathname = usePathname()
  const { id } = useParams()
  useEffect(() => {
    const endpoint = pathname.includes('tv')
      ? CAST_TV(id.toString())
      : CAST_MOVIE(id.toString())
    console.log(endpoint)
    async function getCasts() {
      const res = await fetchCasts(endpoint)
      if (res) setCasts(res)
    }
    getCasts()
  }, [id, pathname])
  const fallbackAvt = '/images/no-avatar.png'
  // if (!casts.length) return <p>loading...</p>
  return (
    <div className="container mx-auto px-2">
      <p className="text-xl font-bold mb-2">{title}</p>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        slidesPerView="auto"
        slidesPerGroupAuto
        spaceBetween={30}
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
