import Banner from '@/components/banner'
import TopCast from '@/components/top-cast'
import Separate from '@/components/separate'
import { fetchMovies } from '@/lib/data'
import { SIMILAR_MOVIES, RECOMMENDATIONS } from '@/lib/endpoint'
import FilmCarousels from '@/components/film-carousels'
import SectionSocial from '@/components/social-media/section-social-media'
import { BannerSkeleton } from '@/components/loading/skeletons'
import { Suspense } from 'react'

export default async function Page({ params }: { params: { id: string } }) {
  const similarMovies = await fetchMovies(SIMILAR_MOVIES(params?.id))
  const recommendations = await fetchMovies(RECOMMENDATIONS(params?.id))
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
      <Suspense fallback={<p>Loading...</p>}>
        <FilmCarousels title="Similar movies for you" films={similarMovies} />
      </Suspense>
      <Separate distance="40" />
      <Suspense fallback={<p>Loading...</p>}>
        <FilmCarousels title="Recommendation" films={recommendations} />
      </Suspense>
      <BannerSkeleton />
    </div>
  )
}
