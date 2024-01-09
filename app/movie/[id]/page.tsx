import Banner from '@/components/banner'
import TopCast from '@/components/top-cast'
import { fetchCastsOfMovie } from '@/lib/data'
import Separate from '@/components/separate'
import { fetchMovies } from '@/lib/data'
import { SIMILAR_MOVIES, RECOMMENDATIONS } from '@/lib/endpoint'
import SectionFilm from '@/components/section-film'

export default async function Page({ params }: { params: { id: string } }) {
  const cast = await fetchCastsOfMovie(params?.id)
  const similarMovies = await fetchMovies(SIMILAR_MOVIES(params?.id))
  const recommendations = await fetchMovies(RECOMMENDATIONS(params?.id))
  console.log(RECOMMENDATIONS(params?.id))
  console.log(recommendations)
  return (
    <div>
      <Banner movieId={params?.id} />
      <Separate distance="50" />
      <TopCast casts={cast} />
      <Separate distance="40" />
      <SectionFilm title="Similar movies for you" movies={similarMovies} />
      <Separate distance="40" />
      <SectionFilm title="Recommendation" movies={recommendations} />
    </div>
  )
}
