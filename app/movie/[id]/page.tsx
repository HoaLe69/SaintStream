import Banner from '@/components/banner'
import TopCast from '@/components/top-cast'
import { fetchCasts } from '@/lib/data'
import Separate from '@/components/separate'
import { fetchMovies } from '@/lib/data'
import { SIMILAR_MOVIES, RECOMMENDATIONS, CAST_MOVIE } from '@/lib/endpoint'
import SectionFilm from '@/components/section-film'
import SectionSocial from '@/components/social-media/section-social-media'

export default async function Page({ params }: { params: { id: string } }) {
  const cast = await fetchCasts(CAST_MOVIE(params?.id))
  const similarMovies = await fetchMovies(SIMILAR_MOVIES(params?.id))
  const recommendations = await fetchMovies(RECOMMENDATIONS(params?.id))
  return (
    <div>
      <Banner movieId={params?.id} />
      <Separate distance="50" />
      <TopCast casts={cast} title="Top cast" />
      <Separate distance="40" />
      <SectionSocial movieId={params?.id} />
      <Separate distance="40" />
      <SectionFilm title="Similar movies for you" movies={similarMovies} />
      <Separate distance="40" />
      <SectionFilm title="Recommendation" movies={recommendations} />
    </div>
  )
}
