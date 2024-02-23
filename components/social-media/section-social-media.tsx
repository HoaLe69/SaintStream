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
  const [tabIndex, setTabIndex] = useState<number>(1)
  const tabs = ['Media', 'Reviews', 'Backdrops']
  const handleSwitchTab = (index: number) => {
    setTabIndex(index)
  }
  let endpoints = { videoEp: VIDEOS_KEY }
  if (tvshow) {
    endpoints = { ...endpoints, videoEp: VIDEOS_KEY_TV }
  }

  const section: { [key: number]: React.ReactNode } = {
    0: <MediaVideos endpoint={endpoints.videoEp} />,
    1: <MediaReview />,
    2: <MediaBackdrop />
  }

  return (
    <div className="container mx-auto px-2">
      <div className="flex items-center gap-x-5 ">
        {tabs.map((tab, index) => (
          <TabItems
            title={tab}
            key={tab}
            index={index}
            active={index === tabIndex}
            swichTab={handleSwitchTab}
          ></TabItems>
        ))}
      </div>
      <div className="mt-2">
        <TabPannel>{section[tabIndex]}</TabPannel>
      </div>
    </div>
  )
}
function TabPannel({ children }: { children: React.ReactNode }) {
  return <span>{children}</span>
}
function TabItems({
  title,
  active,
  index,
  swichTab
}: {
  title: string
  active?: boolean
  index: number
  swichTab: (index: number) => void
}) {
  return (
    <span
      onClick={() => swichTab(index)}
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
