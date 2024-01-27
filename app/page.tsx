import Separate from '@/components/separate'
import SectionFilm from '@/components/seciton-film'
import { Suspense } from 'react'
import HerosSection from '@/components/heros-section'

export default async function Home() {
  return (
    <main className="text-3xl">
      <Suspense fallback={<p>Loading....</p>}>
        <HerosSection type="mv" />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <SectionFilm type="trending_mv" title="Trending" />
      </Suspense>
      <Separate distance="40" />
      <Suspense fallback={<p>Loading....</p>}>
        <SectionFilm type="popular_mv" title="Popular" />
      </Suspense>
      <Separate distance="40" />
      <Suspense fallback={<p>Loading...</p>}>
        <SectionFilm type="top_rated_mv" title="Top rated" />{' '}
      </Suspense>
      <Separate distance="40" />
      <Suspense fallback={<p>Loading...</p>}>
        <SectionFilm type="up_coming_mv" title="Up Comming" />
      </Suspense>
    </main>
  )
}
