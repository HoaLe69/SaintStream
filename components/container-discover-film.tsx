import { fetchDiscover } from '@/lib/data'
import NotFoundResource from './not-found-resouce'
import DiscovevFilms from './discover-films'

type Props = {
  type: string
  sort_by?: string
  minRuntime?: string
  from?: string
  to?: string
  genres?: string
  page?: number
}

export default async function ContainerDiscoverFilm(props: Props) {
  const { type, sort_by, genres, minRuntime, from, to, page } = props
  const discover = await fetchDiscover(
    type,
    sort_by,
    genres,
    minRuntime,
    from,
    to,
    page
  )
  if (!discover.length) return <NotFoundResource />
  return (
    <div className=" flex flex-wrap gap-4">
      <DiscovevFilms {...props} discover={discover} />
    </div>
  )
}
