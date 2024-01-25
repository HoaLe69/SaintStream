import Image from 'next/image'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { Button } from './button'
import { useSession } from 'next-auth/react'

export default function UserProfile() {
  const session = useSession()
  console.log(session)
  if (!session?.data?.user) {
    return <Button primary>Login</Button>
  }
  const fallback =
    'https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png'
  return (
    <div className="flex items-center gap-2 ml-3">
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
    </div>
  )
}
