'use client'
import { useState } from 'react'
import clsx from 'clsx'
import MediaVideos from './media-videos'
import { VIDEOS_KEY, VIDEOS_KEY_TV } from '@/lib/endpoint'

export default function SectionSocial({
  movieId,
  tvshow
}: {
  movieId: string
  tvshow?: boolean
}) {
  const [tabIndex, setTabIndex] = useState<number>(0)
  const tabs = ['Media', 'Reviews', 'Backdrops', 'Posters']
  const handleSwitchTab = (index: number) => {
    setTabIndex(index)
  }
  let endpoints = { videoEp: VIDEOS_KEY }
  if (tvshow) {
    endpoints = { ...endpoints, videoEp: VIDEOS_KEY_TV }
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
        <TabPannel id={0} index={tabIndex}>
          <MediaVideos movieId={movieId} endpoint={endpoints.videoEp} />
        </TabPannel>
        <TabPannel id={1} index={tabIndex}>
          Reviews
        </TabPannel>
        <TabPannel id={2} index={tabIndex}>
          Back drop
        </TabPannel>
        <TabPannel id={3} index={tabIndex}>
          poster
        </TabPannel>
      </div>
    </div>
  )
}
function TabPannel({
  children,
  id,
  index
}: {
  children: React.ReactNode
  id: number
  index?: number
}) {
  return (
    <span className={clsx('hidden', { '!block': id === index })}>
      {children}
    </span>
  )
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
