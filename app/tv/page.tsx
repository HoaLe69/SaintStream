import Heros from '@/components/heros'
import { fetchMovies } from '@/lib/data'
import {
  TRENDING_TV,
  AIRING_TODAY,
  ON_THE_AIR,
  POPULAR_TV,
  TOP_RATE_TV
} from '@/lib/endpoint'
import SectionFilm from '@/components/section-film'
import Separate from '@/components/separate'

export default async function Page() {
  const heros = await fetchMovies(TRENDING_TV)
  const airing = await fetchMovies(AIRING_TODAY)
  const onTheAir = await fetchMovies(ON_THE_AIR)
  const popular = await fetchMovies(POPULAR_TV)
  const topRate = await fetchMovies(TOP_RATE_TV)
  return (
    <div>
      <Heros movies={heros} />
      <Separate distance="50" />
      <SectionFilm title="Airing Today" prefix="tv" movies={airing} />
      <Separate distance="40" />
      <SectionFilm title="On The Air" prefix="tv" movies={onTheAir} />
      <Separate distance="40" />
      <SectionFilm title="Popular" prefix="tv" movies={popular} />
      <Separate distance="40" />
      <SectionFilm title="Top Rate" prefix="tv" movies={topRate} />
    </div>
  )
}
