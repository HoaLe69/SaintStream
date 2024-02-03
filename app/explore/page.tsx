import FilterFilm from '@/components/filter/filter'
import { Suspense } from 'react'
import ContainerDiscoverFilm from '@/components/container-discover-film'
import { DiscoverSkeletons } from '@/components/loading/skeletons'
import BreadCrumbs from '@/components/breadcrumbs'
import ScrollTopButton from '@/components/scroll-top-button'

export default function Page({
  searchParams
}: {
  searchParams: {
    type?: string
    sort_by?: string
    genres?: string
    minRuntime?: string
    from?: string
    to?: string
    page?: number
  }
}) {
  // const discover = await fetchDiscover(
  //   'tv',
  //   searchParams?.sort_by,
  //   searchParams?.genres,
  //   searchParams?.minRuntime,
  //   searchParams?.from,
  //   searchParams?.to
  // )
  const {
    type = 'tv',
    sort_by,
    minRuntime,
    genres,
    from,
    to,
    page = 1
  } = searchParams
  return (
    <div className="pt-24 max-w-[1400px] mx-auto px-2 min-h-screen">
      <div className="flex items-start gap-x-10">
        <div className="w-[300px] shrink-0">
          <FilterFilm type={type} />
        </div>
        <div className="flex-1">
          <div className="pb-4">
            <BreadCrumbs />
          </div>
          <Suspense fallback={<DiscoverSkeletons />}>
            <ContainerDiscoverFilm
              type={type}
              sort_by={sort_by}
              genres={genres}
              minRuntime={minRuntime}
              from={from}
              to={to}
              page={page}
            />
          </Suspense>
        </div>
      </div>
      <ScrollTopButton />
    </div>
  )
}
