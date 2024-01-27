import Heros from '@/components/heros'
import { fetchMovies } from '@/lib/data'
import FilmCarousels from '@/components/film-carousels'
import Separate from '@/components/separate'
import { Suspense } from 'react'
import SectionFilm from '@/components/seciton-film'
import HerosSection from '@/components/heros-section'

export default async function Page() {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <HerosSection type="tv" />
      </Suspense>
      <Separate distance="50" />
      <Suspense fallback={<p>Loading..</p>}>
        <SectionFilm type="airing_today_tv" title="Airing Today" />
      </Suspense>
      <Separate distance="40" />
      <Suspense fallback={<p>Loading...</p>}>
        <SectionFilm type="on_the_air_tv" title="On The Air" />
      </Suspense>
      <Separate distance="40" />
      <Suspense fallback={<p>Loading...</p>}>
        <SectionFilm type="popular_tv" title="Popular" />
      </Suspense>
      <Separate distance="40" />
      <Suspense fallback={<p>Loading...</p>}>
        <SectionFilm type="top_rated_tv" title="Top Rated" />
      </Suspense>
    </div>
  )
}
