import Separate from '@/components/separate'
import TopCast from '@/components/top-cast'
import SectionSocial from '@/components/social-media/section-social-media'
import BannerTV from '@/components/banner-tv'
import Seasons from '@/components/seasons'
import SectionFilm from '@/components/section-film'
import { Suspense } from 'react'
import { SectionFilmSkeletons } from '@/components/loading/skeletons'

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <BannerTV movieId={params?.id} />
      <Separate distance="50" />
      <TopCast title="Series Cast" />
      <Separate distance="40" />
      <SectionSocial movieId={params?.id} tvshow />
      <Separate distance="40" />
      <Suspense fallback={<p>Loading...</p>}>
        <Seasons id={params?.id} />
      </Suspense>
      <Separate distance="40" />
      <Suspense fallback={<SectionFilmSkeletons title="Recommendations" />}>
        <SectionFilm
          prefix="tv"
          title="Recommendations"
          type="recomendation_tv"
          id={params?.id}
        />
      </Suspense>
    </div>
  )
}
