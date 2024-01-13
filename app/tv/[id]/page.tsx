import { fetchCasts } from '@/lib/data'
import Separate from '@/components/separate'
import TopCast from '@/components/top-cast'
import SectionSocial from '@/components/social-media/section-social-media'
import BannerTV from '@/components/banner-tv'
import { CAST_TV } from '@/lib/endpoint'

export default async function Page({ params }: { params: { id: string } }) {
  const cast = await fetchCasts(CAST_TV(params?.id))
  return (
    <div>
      <BannerTV movieId={params?.id} />
      <Separate distance="50" />
      <TopCast casts={cast} title="Series Cast" />
      <Separate distance="40" />
      <SectionSocial movieId={params?.id} />
      <Separate distance="40" />
    </div>
  )
}
