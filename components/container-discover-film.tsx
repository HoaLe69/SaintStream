import { fetchDiscover } from '@/lib/data'
import { Movie } from '@/lib/definitions'
import Card from './card'
import NotFoundResource from './not-found-resouce'

type Props = {
  type: string
  sort_by?: string
  minRuntime?: string
  from?: string
  to?: string
  genres?: string
}

export default async function ContainerDiscoverFilm({
  type,
  sort_by,
  genres,
  minRuntime,
  from,
  to
}: Props) {
  const discover = await fetchDiscover(
    type,
    sort_by,
    genres,
    minRuntime,
    from,
    to
  )
  console.log(discover)
  if (!discover.length) return <NotFoundResource />
  return (
    <div className=" flex flex-wrap gap-4">
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
  )
}
