import Separate from '@/components/separate'
import { Suspense } from 'react'
import SectionFilm from '@/components/seciton-film'
import HerosSection from '@/components/heros-section'
import {
  BannerSkeleton,
  SectionFilmSkeletons
} from '@/components/loading/skeletons'

export default async function Page() {
  return (
    <div>
      <Suspense fallback={<BannerSkeleton />}>
        <HerosSection type="tv" />
      </Suspense>
      <Separate distance="50" />
      <Suspense fallback={<SectionFilmSkeletons title="Airing Today" />}>
        <SectionFilm type="airing_today_tv" title="Airing Today" />
      </Suspense>
      <Separate distance="40" />
      <Suspense fallback={<SectionFilmSkeletons title="On The Air" />}>
        <SectionFilm type="on_the_air_tv" title="On The Air" />
      </Suspense>
      <Separate distance="40" />
      <Suspense fallback={<SectionFilmSkeletons title="Popular" />}>
        <SectionFilm type="popular_tv" title="Popular" />
      </Suspense>
      <Separate distance="40" />
      <Suspense fallback={<SectionFilmSkeletons title="Top Rated" />}>
        <SectionFilm type="top_rated_tv" title="Top Rated" />
      </Suspense>
    </div>
  )
}
