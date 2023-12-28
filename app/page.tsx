import Heros from '@/components/heros'
import SectionFilm from '@/components/section-film'
import Separate from '@/components/separate'
import {
  fetchPopularMovie,
  fetchTopRateMovie,
  fetchTrendingMovies
} from '@/lib/data'

export default async function Home() {
  const heros = await fetchTrendingMovies()
  const popular = await fetchPopularMovie()
  const topRate = await fetchTopRateMovie()
  return (
    <main className="text-3xl">
      <Heros movies={heros} />
      <Separate distance="50" />
      <SectionFilm title="Popular" movies={popular} />
      <Separate distance="40" />
      <SectionFilm title="Top rate" movies={topRate} />
    </main>
  )
}
