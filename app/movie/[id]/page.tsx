import Banner from '@/components/banner'

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <Banner movieId={params?.id} />
    </div>
  )
}
