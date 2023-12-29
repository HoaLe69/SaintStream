'use client'
import Image from 'next/image'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Button } from './button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { useRef } from 'react'

export default function Header() {
  const ref = useRef<HTMLHeadElement>(null)
  const pathname = usePathname()
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
  return (
    <header
      ref={ref}
      className="h-[80px] fixed top-0 right-0 left-0 z-50 transition-all"
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
        <nav className="hidden md:flex items-center gap-10">
          <Link
            href="/"
            className={clsx('transition-all', {
              'font-black text-xl': pathname === '/'
            })}
          >
            Home
          </Link>
          <Link
            href="/tv"
            className={clsx('transition-all', {
              'font-black text-xl': pathname === '/tv'
            })}
          >
            TV Shows
          </Link>
          <Link
            href="/explore"
            className={clsx('transition-all', {
              'font-black text-xl': pathname === '/explore'
            })}
          >
            Explore
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <MagnifyingGlassIcon className="w-6 h-6" />
          <Button primary>Login</Button>
        </div>
      </div>
    </header>
  )
}
