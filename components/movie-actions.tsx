'use client'
import { HeartIcon } from '@heroicons/react/16/solid'
import { BookmarkIcon } from '@heroicons/react/16/solid'
import { StarIcon } from '@heroicons/react/16/solid'
import { Button } from './button'
import { PlayIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { fetchMovies } from '@/lib/data'
import { Video } from '@/lib/definitions'
import VideoPlayer from './social-media/videos'
import { VIDEOS_KEY, VIDEOS_KEY_TV } from '@/lib/endpoint'

export default function MovieActions({
  movieId,
  tvshow
}: {
  movieId: string
  tvshow?: boolean
}) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const [showVideo, setShowVideo] = useState({
    videoKey: searchParams.get('play') || '',
    name: ''
  })
  let endpoint = VIDEOS_KEY
  if (tvshow) endpoint = VIDEOS_KEY_TV
  const handlePlayTrailer = () => {
    async function getTrailerKey() {
      const res = await fetchMovies(endpoint(movieId))
      if (res) {
        const [video] = res.filter((vd: Video) => vd.type === 'Trailer')
        if (video) {
          setShowVideo({ videoKey: video.key, name: video.name })
          window.history.replaceState(
            null,
            video.name,
            `${pathname}?play=${video.key}`
          )
        }
      }
    }
    getTrailerKey()
  }
  return (
    <div className="flex items-center gap-3">
      <span className="inline-block p-2 rounded-full bg-black">
        <HeartIcon className="w-6 h-6" />
      </span>
      <span className="inline-block p-2 rounded-full bg-black">
        <BookmarkIcon className="w-6 h-6" />
      </span>
      <span className="inline-block p-2 rounded-full bg-black">
        <StarIcon className="w-6 h-6" />
      </span>
      <div className="ml-4">
        <Button primary handleClick={handlePlayTrailer}>
          <span className="flex items-center gap-2">
            <PlayIcon className="w-5 h-5" />
            Watch Trailer
          </span>
        </Button>
      </div>
      {showVideo.videoKey && (
        <VideoPlayer {...showVideo} setShow={setShowVideo} />
      )}
    </div>
  )
}
