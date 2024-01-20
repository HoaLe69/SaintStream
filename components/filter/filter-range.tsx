'use client'
import { useRef, useState } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function FilterRange() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [trackPercent, setTrackPercent] = useState<number>()
  const { replace } = useRouter()
  const ref = useRef<HTMLDivElement>(null)
  const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const elDiv = ref.current
    const clientX = e.clientX
    if (elDiv) {
      const trackWrapWidth = elDiv.offsetWidth
      const w =
        ((clientX - elDiv.getBoundingClientRect().left) / trackWrapWidth) * 100

      const params = new URLSearchParams(searchParams)
      if (w) params.set('minRuntime', Math.floor(w * 2).toString())
      replace(`${pathname}?${params.toString()}`)
      setTrackPercent(w)
    }
  }
  return (
    <div className="py-2">
      <p className="py-2">Runtime</p>
      <div className="flex items-center justify-between mb-2 text-gray-300">
        <span>
          From <strong>0 </strong>min
        </span>
        <span>
          To <strong>200 </strong>min
        </span>
      </div>
      <div
        onClick={handleOnClick}
        ref={ref}
        className="w-full bg-black h-2 rounded-md relative group cursor-pointer"
      >
        <div
          style={{ width: `${trackPercent || 100}%` }}
          className={clsx(
            'absolute bg-green-500 rounded-md left-0 top-0 bottom-0'
          )}
        >
          <div className="group-hover:block border-2 bg-green-500 absolute hidden h-3 w-3 rounded-full right-0 top-2/4 translate-y-[-50%]"></div>
        </div>
      </div>
    </div>
  )
}
