import Heros from '@/components/heros'
import SectionFilm from '@/components/section-film'
import Separate from '@/components/separate'
import { fetchMovies } from '@/lib/data'
import { TRENDING, TOP_RATE, POPULAR, UP_COMING } from '@/lib/endpoint'

export default async function Home() {
  const heros = await fetchMovies(TRENDING)
  const popular = await fetchMovies(POPULAR)
  const topRate = await fetchMovies(TOP_RATE)
  const upComing = await fetchMovies(UP_COMING)
  return (
    <main className="text-3xl">
      <Heros movies={heros} />
      <Separate distance="40" />
      <SectionFilm title="Popular" movies={popular} />
      <Separate distance="40" />
      <SectionFilm title="Top rate" movies={topRate} />
      <Separate distance="40" />
      <SectionFilm title="Up coming" movies={upComing} />
    </main>
  )
}
