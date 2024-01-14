import { fetchCasts, fetchDetail, fetchMovies } from '@/lib/data'
import Separate from '@/components/separate'
import TopCast from '@/components/top-cast'
import SectionSocial from '@/components/social-media/section-social-media'
import BannerTV from '@/components/banner-tv'
import {
  CAST_TV,
  DETAIL_TV,
  RECOMENDATION_TV,
  VIDEOS_KEY,
  VIDEOS_KEY_TV
} from '@/lib/endpoint'
import Seasons from '@/components/seasons'
import SectionFilm from '@/components/section-film'

export default async function Page({ params }: { params: { id: string } }) {
  const cast = await fetchCasts(CAST_TV(params?.id))
  const seasons = await fetchDetail(DETAIL_TV(params?.id))
  const recommen = await fetchMovies(RECOMENDATION_TV(params?.id))
  return (
    <div>
      <BannerTV movieId={params?.id} />
      <Separate distance="50" />
      <TopCast casts={cast} title="Series Cast" />
      <Separate distance="40" />
      <SectionSocial movieId={params?.id} tvshow />
      <Separate distance="40" />
      <Seasons seasons={seasons.seasons} />
      <Separate distance="40" />
      <SectionFilm prefix="tv" title="Recommendations" movies={recommen} />
    </div>
  )
}
