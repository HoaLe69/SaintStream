'use client'
import { fetchMovies } from '@/lib/data'
import { VIDEOS_KEY } from '@/lib/endpoint'
import { Video } from '@/lib/definitions'
import { PlayIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// async function getVideoKeys(movieId: string) {
//   const videos = await fetchMovies(VIDEOS_KEY(movieId))
//   return videos
// }

export default function MediaVideos({ movieId }: { movieId: string }) {
  const [videos, setVideos] = useState<Video[]>([])
  // let you read the value of a resource like a promise or context
  // const videoKeys: Video[] = use(getVideoKeys(movieId))
  useEffect(() => {
    async function getVideoKeys() {
      const res = await fetchMovies(VIDEOS_KEY(movieId))
      setVideos(res)
    }
    getVideoKeys()
  }, [movieId])
  if (!videos?.length) return 'No video'
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        spaceBetween={30}
        slidesPerView="auto"
      >
        {videos &&
          videos.map((video: Video) => (
            <SwiperSlide key={video.id} className="!w-max">
              <div
                className="w-[301px] h-[197px] bg-center bg-no-repeat relative"
                style={{
                  backgroundImage: `url('https://i.ytimg.com/vi/${video?.key}/hqdefault.jpg')`
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-block p-3 bg-[rgba(0,0,0,.6)] rounded-full cursor-pointer group ">
                    <PlayIcon className="w-8 h-8 group-hover:text-gray-400" />
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}
