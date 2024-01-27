import Separate from '@/components/separate'
import SectionFilm from '@/components/seciton-film'
import { Suspense } from 'react'
import HerosSection from '@/components/heros-section'
import {
  BannerSkeleton,
  SectionFilmSkeletons
} from '@/components/loading/skeletons'

export default async function Home() {
  return (
    <main className="text-3xl">
      <Suspense fallback={<BannerSkeleton />}>
        <HerosSection type="mv" />
      </Suspense>
      <Suspense fallback={<SectionFilmSkeletons title="Trending" />}>
        <SectionFilm type="trending_mv" title="Trending" />
      </Suspense>
      <Separate distance="40" />
      <Suspense fallback={<SectionFilmSkeletons title="Popular" />}>
        <SectionFilm type="popular_mv" title="Popular" />
      </Suspense>
      <Separate distance="40" />
      <Suspense fallback={<SectionFilmSkeletons title="Top rated" />}>
        <SectionFilm type="top_rated_mv" title="Top rated" />
      </Suspense>
      <Separate distance="40" />
      <Suspense fallback={<SectionFilmSkeletons title="Up Comming" />}>
        <SectionFilm type="up_coming_mv" title="Up Comming" />
      </Suspense>
    </main>
  )
}
