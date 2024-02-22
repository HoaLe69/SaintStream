import Banner from '@/components/banner'
import TopCast from '@/components/top-cast'
import Separate from '@/components/separate'
import SectionSocial from '@/components/social-media/section-social-media'
import {
  BannerSkeleton,
  SectionFilmSkeletons
} from '@/components/loading/skeletons'
import { Suspense } from 'react'
import SectionFilm from '@/components/section-film'

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <Suspense fallback={<BannerSkeleton />}>
        <Banner movieId={params?.id} />
      </Suspense>
      <Separate distance="50" />
      <TopCast title="Top cast" />
      <Separate distance="40" />
      <Suspense fallback={<p>Loading...</p>}>
        <SectionSocial movieId={params?.id} />
      </Suspense>
      <Separate distance="40" />
      <Suspense
        fallback={<SectionFilmSkeletons title="Smilar movies for you" />}
      >
        <SectionFilm
          title="Similar movies for you"
          id={params?.id}
          type="similar_movie"
        />
      </Suspense>
      <Separate distance="40" />
      <Suspense fallback={<SectionFilmSkeletons title="Recommendation" />}>
        <SectionFilm
          title="Recommendation"
          id={params?.id}
          type="recomendation_movies"
        />
      </Suspense>
    </div>
  )
}
