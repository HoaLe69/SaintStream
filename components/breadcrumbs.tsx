'use client'
import clsx from 'clsx'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function BreadCrumbs() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentTab = searchParams.get('type') || 'tv'
  const [tabName, setTabName] = useState<string>(currentTab)
  const handleClickSelect = () => {
    const tabNameSel = currentTab === 'movie' ? 'tv' : 'movie'
    router.push(`/explore?type=${tabNameSel}`)
    setTabName(tabNameSel)
  }
  return (
    <div>
      <button
        onClick={handleClickSelect}
        className={clsx(
          'p-2 hover:bg-[rgba(255,255,255,0.1)] opacity-70 border-b-2  hover:border-green-300',
          {
            'border-green-500 opacity-100': tabName === 'tv'
          }
        )}
      >
        TV Show
      </button>
      <button
        onClick={handleClickSelect}
        className={clsx(
          'p-2 hover:bg-[rgba(255,255,255,0.1)] opacity-70 border-b-2 hover:border-green-300 ml-2',
          {
            'border-green-500 opacity-100': tabName === 'movie'
          }
        )}
      >
        Movie
      </button>
    </div>
  )
}
