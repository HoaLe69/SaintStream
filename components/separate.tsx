import { useSession } from 'next-auth/react'
export default function Separate({ distance }: { distance: string }) {
  return <div style={{ height: `${distance}px` }} className="min-w-screen" />
}
