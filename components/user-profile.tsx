import Image from 'next/image'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { Button } from './button'
import { useSession } from 'next-auth/react'
import {
  BookmarkIcon,
  ArrowLeftStartOnRectangleIcon
} from '@heroicons/react/24/outline'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { useContext } from 'react'
import { ModalContext } from './header'

export default function UserProfile() {
  const session = useSession()
  if (!session?.data?.user) {
    return (
      <Button primary>
        <Link href="/api/auth/signin">Login</Link>
      </Button>
    )
  }
  const fallback =
    'https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png'
  return (
    <div className="group flex items-center gap-2 ml-3 relative">
      <Image
        src={session?.data?.user?.image || fallback}
        alt={session?.data?.user?.name || fallback}
        width={32}
        height={32}
        className="rounded-full border-2"
      />
      <span className="cursor-pointer">
        <ChevronDownIcon className="w-6 h-6" />
      </span>
      <SubMenu />
    </div>
  )
}

function SubMenu() {
  const [isOpen, setOpen] = useContext(ModalContext)
  return (
    <div className="absolute w-[200px] bg-gray-900 transition-all h-0 group-hover:h-[100px] top-full right-0 overflow-hidden mt-2">
      <ul className="py-2">
        <li
          onClick={() => setOpen(true)}
          className="p-2 hover:opacity-90 hover:bg-gray-600 cursor-pointer flex gap-1 items-center"
        >
          <BookmarkIcon className="w-6 h-6" />
          Your Bookmark
        </li>
        <li
          onClick={async () => {
            await signOut()
          }}
          className="p-2 hover:opacity-90 hover:bg-gray-600 cursor-pointer flex gap-1 items-center"
        >
          <ArrowLeftStartOnRectangleIcon className="w-6 h-6" />
          Sign out
        </li>
      </ul>
    </div>
  )
}
