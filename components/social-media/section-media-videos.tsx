import { fetchMovies } from '@/lib/data'
import { Video } from '@/lib/definitions'
import { PlayIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useParams, usePathname } from 'next/navigation'
import VideoPlayer from './videos'
import { MediaVideoSkeletons } from '@/components/loading/skeletons'

// async function getVideoKeys(movieId: string) {
//   const videos = await fetchMovies(VIDEOS_KEY(movieId))
//   return videos
// }
type Props = {
  endpoint: (id: string) => string
}
export default function MediaVideos({ endpoint }: Props) {
  const pathname = usePathname()
  const { id } = useParams()
  const [videos, setVideos] = useState<Video[] | string>([])
  const [showVideo, setShowVideo] = useState({ videoKey: '', name: '' })
  // let you read the value of a resource like a promise or context
  // const videoKeys: Video[] = use(getVideoKeys(movieId))
  useEffect(() => {
    async function getVideoKeys() {
      const res = await fetchMovies(endpoint(id.toString()))
      if (res.length) setVideos(res)
      else setVideos('No videos')
    }
    getVideoKeys()
  }, [])
  const createUrl = (key: string, name: string) => {
    window.history.replaceState(null, name, `${pathname}?play=${key}`)
    setShowVideo({ videoKey: key, name: name })
  }
  if (typeof videos === 'string') {
    return <p>{videos}</p>
  }
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        spaceBetween={30}
        slidesPerView="auto"
      >
        {videos && videos!.length > 0 ? (
          typeof videos === 'object' &&
          videos?.map((video: Video) => (
            <SwiperSlide key={video.id} className="!w-max">
              <div
                className="w-[301px] h-[197px] bg-center bg-no-repeat relative"
                style={{
                  backgroundImage: `url('https://i.ytimg.com/vi/${video?.key}/hqdefault.jpg')`
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    onClick={() => createUrl(video?.key, video?.name)}
                    className="inline-block p-3 bg-[rgba(0,0,0,.6)] rounded-full cursor-pointer group "
                  >
                    <PlayIcon className="w-8 h-8 group-hover:text-gray-400" />
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <MediaVideoSkeletons />
        )}
      </Swiper>
      {showVideo.videoKey && (
        <VideoPlayer {...showVideo} setShow={setShowVideo} />
      )}
    </div>
  )
}
