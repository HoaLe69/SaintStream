'use client'
import Image from 'next/image'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { useRef, useState } from 'react'
import UserProfile from './user-profile'
import BookMarkModal from './bookmark-modal'
import { createContext } from 'react'
import Search from './search/search'

type IModalContext = [boolean, React.Dispatch<React.SetStateAction<boolean>>]
export const ModalContext = createContext<IModalContext>([false, () => null])

export default function Header() {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [isOpenSearch, setOpenSearch] = useState<boolean>(false)
  const ref = useRef<HTMLHeadElement>(null)
  const pathname = usePathname()

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      const header = ref?.current
      const scrollY = window.scrollY
      if (header) {
        if (scrollY > 0) {
          header.style.backgroundColor = 'rgba(0 , 0 ,0 ,0.7)'
          header.style.backdropFilter = 'blur(5px)'
        } else {
          header.style.backgroundColor = 'transparent'
          header.style.backdropFilter = 'blur(0)'
        }
      }
    })
  }
  return (
    <ModalContext.Provider value={[isOpen, setOpen]}>
      <header
        ref={ref}
        className="h-[60px] fixed top-0 right-0 left-0 z-50 transition-all"
      >
        <div className="container px-2 flex  items-center justify-between mx-auto h-full">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              priority
              alt="logo"
              width={150}
              height={100}
              style={{ width: '100%', height: 'auto' }}
            />
          </Link>
          <nav className="hidden md:flex items-center gap-10 transition-all">
            <Link
              href="/"
              className={clsx(
                'p-1 border-b-[3px]  transition-all inline-block',
                {
                  'font-bold border-green-500': pathname === '/'
                },
                { 'border-transparent': pathname !== '/' }
              )}
            >
              Home
            </Link>
            <Link
              href="/tv"
              className={clsx(
                'transition-all border-b-[3px] inline-block p-1 ',
                {
                  'font-black border-green-500': pathname === '/tv'
                },
                { 'border-transparent': pathname !== '/tv' }
              )}
            >
              TV Shows
            </Link>
            <Link
              href="/explore"
              className={clsx(
                'transition-all border-b-[3px] inline-block p-1',
                {
                  'font-black  border-green-500': pathname === '/explore'
                },
                { 'border-transparent': pathname !== '/explore' }
              )}
            >
              Explore
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <MagnifyingGlassIcon
              className="w-6 h-6 cursor-pointer"
              onClick={() => setOpenSearch(true)}
            />
            <UserProfile />
          </div>
        </div>
      </header>
      <Search isOpenSearch={isOpenSearch} setOpenSearch={setOpenSearch} />
      <BookMarkModal />
    </ModalContext.Provider>
  )
}
