'use client'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState, useEffect } from 'react'
import { Backdrop } from '@/lib/definitions'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { fetchImage } from '@/lib/data'
import { useParams, usePathname } from 'next/navigation'
import Image from 'next/image'
import { IMAGES_MV, IMAGES_TV } from '@/lib/endpoint'
import { MediaBackdropSkeleton } from '@/components/loading/skeletons'

export default function MediaBackdrop() {
  const [backdrops, setBackdrops] = useState<Backdrop[]>([])
  const { id } = useParams()
  const pathname = usePathname()
  useEffect(() => {
    async function getBackdrop() {
      const res = await fetchImage(
        pathname.includes('tv')
          ? IMAGES_TV(id.toString())
          : IMAGES_MV(id.toString())
      )
      if (res.length) setBackdrops(res)
    }
    getBackdrop()
  }, [id])
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        spaceBetween={30}
        slidesPerView="auto"
      >
        {backdrops.length > 0 ? (
          backdrops.map((backdrop: Backdrop) => {
            return (
              <SwiperSlide key={backdrop.file_path} className="!w-max">
                <div className="w-[301px] h-[197px] hover:opacity-100 hover:scale-[0.99] cursor-pointer transition-all">
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${backdrop?.file_path}`}
                    alt={backdrop.file_path}
                    width={301}
                    height={197}
                  />
                </div>
              </SwiperSlide>
            )
          })
        ) : (
          <MediaBackdropSkeleton />
        )}
      </Swiper>
    </div>
  )
}
