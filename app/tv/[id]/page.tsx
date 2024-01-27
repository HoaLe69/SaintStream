import { fetchDetail, fetchMovies } from '@/lib/data'
import Separate from '@/components/separate'
import TopCast from '@/components/top-cast'
import SectionSocial from '@/components/social-media/section-social-media'
import BannerTV from '@/components/banner-tv'
import { DETAIL_TV, RECOMENDATION_TV } from '@/lib/endpoint'
import Seasons from '@/components/seasons'
import FilmCarousels from '@/components/film-carousels'
import { TVSHOW } from '@/lib/definitions'

export default async function Page({ params }: { params: { id: string } }) {
  const seasons: TVSHOW = await fetchDetail(DETAIL_TV(params?.id))
  const recommen = await fetchMovies(RECOMENDATION_TV(params?.id))
  return (
    <div>
      <BannerTV movieId={params?.id} />
      <Separate distance="50" />
      <TopCast title="Series Cast" />
      <Separate distance="40" />
      <SectionSocial movieId={params?.id} tvshow />
      <Separate distance="40" />
      <Seasons seasons={seasons.seasons} name={seasons.original_name} />
      <Separate distance="40" />
      <FilmCarousels prefix="tv" title="Recommendations" movies={recommen} />
    </div>
  )
}
