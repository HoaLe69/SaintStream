import Image from 'next/image'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Button } from './button'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="container px-2 flex  items-center  justify-between fixed top-0 right-0 left-0 z-50  h-[110px] mx-auto">
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
        <p>Home</p>
        <Link href="/discover">Discover</Link>
        <p>Movie Release</p>
        <p>Forum</p>
        <p>About</p>
      </nav>
      <div className="flex items-center gap-3">
        <MagnifyingGlassIcon className="w-6 h-6" />
        <Button primary>Login</Button>
      </div>
    </header>
  )
}
