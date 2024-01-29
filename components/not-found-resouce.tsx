import Image from 'next/image'

export default function NotFoundResource() {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-20">
      <Image
        src="/images/not-found-resource.png"
        alt="not found resouce picture"
        width={400}
        height={400}
      />
      <p className="text-xl font-medium">There is no such film</p>
    </div>
  )
}
