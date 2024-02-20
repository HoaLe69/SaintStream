'use client'
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid'
import { useRef } from 'react'

export default function ScrollTopButton() {
  const refButton = useRef<HTMLButtonElement>(null)
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      const elBtn = refButton?.current
      const scrollY = window.scrollY
      if (elBtn) {
        if (scrollY > 0) {
          elBtn.style.display = 'block'
        } else elBtn.style.display = 'none'
      }
    })
  }
  const handleClickToTop = () => {
    if (typeof window !== undefined) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
  return (
    <button
      ref={refButton}
      className="hidden p-2 rounded-full fixed right-10 bottom-10 hover:bg-gray-700 cursor-pointer"
      onClick={handleClickToTop}
    >
      <ArrowUpCircleIcon className="w-6 h-6" />
    </button>
  )
}
