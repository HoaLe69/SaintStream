import FilterFilm from '@/components/filter/filter'
import { fetchDiscover } from '@/lib/data'
import Card from '@/components/card'
import { Movie } from '@/lib/definitions'
import {
  BannerSkeleton,
  CardSkeletons,
  SectionFilmSkeletons
} from '@/components/loading/skeletons'

export default async function Page({
  searchParams
}: {
  searchParams: {
    sort_by?: string
    genres?: string
    minRuntime?: string
    from?: string
    to?: string
  }
}) {
  const discover = await fetchDiscover(
    'tv',
    searchParams?.sort_by,
    searchParams?.genres,
    searchParams?.minRuntime,
    searchParams?.from,
    searchParams?.to
  )
  return (
    <div className="pt-24 max-w-[1400px] mx-auto px-2">
      <div className="flex items-start gap-x-10">
        <div className="w-[300px] shrink-0">
          <FilterFilm />
        </div>
        <div className="flex-1 flex flex-wrap gap-4">
          {discover &&
            discover.map((movie: Movie) => {
              if (!movie?.poster_path) return
              const filmInfor = {
                id: movie?.id,
                poster_path: movie?.poster_path,
                original_name: movie?.original_name,
                original_title: movie?.original_title,
                vote_average: movie?.vote_average,
                release_date: movie?.release_date,
                first_air_date: movie?.first_air_date,
                prefix: 'tv'
              }
              return <Card key={movie?.id} {...filmInfor} />
            })}
        </div>
      </div>
      <SectionFilmSkeletons title="hi"></SectionFilmSkeletons>
    </div>
  )
}
