import Banner from '@/components/banner'
import TopCast from '@/components/top-cast'
import { fetchCastsOfMovie } from '@/lib/data'
import Separate from '@/components/separate'

export default async function Page({ params }: { params: { id: string } }) {
  const cast = await fetchCastsOfMovie(params?.id)
  return (
    <div>
      <Banner movieId={params?.id} />
      <Separate distance="50" />
      <TopCast casts={cast} />
    </div>
  )
}
