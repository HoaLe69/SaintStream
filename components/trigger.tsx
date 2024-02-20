'use client'
import { useCallback } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { Spinner } from './loading/skeletons'

export default function Trigger({ page = 1 }: { page: number }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)

  const triggerRef = useCallback(
    (node: HTMLDivElement) => {
      if (!node) return
      const observer = new IntersectionObserver((entries, observer) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          if (params.has('page')) params.delete('page')
          router.push(
            `${pathname}?${params.toString()}&page=${Number(page) + 4}`,
            { scroll: false }
          )
          observer.disconnect()
        }
      })
      observer.observe(node)
    },
    [page, params, pathname]
  )

  return (
    <div
      ref={triggerRef}
      className="py-10 flex w-full items-center justify-center"
    >
      <Spinner />
    </div>
  )
}
