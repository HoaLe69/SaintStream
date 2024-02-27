'use client'
import { useState } from 'react'
import clsx from 'clsx'
import MediaVideos from './section-media-videos'
import MediaBackdrop from './section-media-backdrops'
import MediaReview from './section-social-review'
import { VIDEOS_KEY, VIDEOS_KEY_TV } from '@/lib/endpoint'

export default function SectionSocial({
  movieId,
  tvshow
}: {
  movieId: string
  tvshow?: boolean
}) {
  const [tabIndex, setTabIndex] = useState<string>('Reviews')
  const tabs = ['Media', 'Reviews', 'Backdrops']
  const handleSwitchTab = (tabname: string) => {
    setTabIndex(tabname)
  }
  let endpoints = { videoEp: VIDEOS_KEY }
  if (tvshow) {
    endpoints = { ...endpoints, videoEp: VIDEOS_KEY_TV }
  }

  const section: { [key: string]: React.ReactNode } = {
    Media: <MediaVideos endpoint={endpoints.videoEp} />,
    Reviews: <MediaReview />,
    Backdrops: <MediaBackdrop />
  }
  return (
    <div className="container mx-auto px-2">
      <div className="flex items-center gap-x-5 ">
        {tabs.map(tab => (
          <TabItems
            title={tab}
            key={tab}
            active={tab === tabIndex}
            swichTab={handleSwitchTab}
          ></TabItems>
        ))}
      </div>
      <div className="mt-2">
        <span>{section[tabIndex]}</span>
      </div>
    </div>
  )
}
function TabItems({
  title,
  active,
  swichTab
}: {
  title: string
  active?: boolean
  swichTab: (tabname: string) => void
}) {
  return (
    <span
      onClick={() => swichTab(title)}
      className={clsx(
        'inline-block py-1 text-[16px] text-gray-400 font-semibold cursor-pointer ',
        {
          'text-white border-b-2 border-green-500': active
        }
      )}
    >
      {title}
    </span>
  )
}
