import { fetchMovies } from '@/lib/data'
import { endpoints } from '@/lib/endpoint'
import FilmCarousels from './film-carousels'

type Props = {
  type: string
  title: string
  prefix?: string
  id?: string
}
export default async function SectionFilm({
  type,
  id,
  title,
  prefix = 'movie'
}: Props) {
  let address
  if (typeof endpoints[type] === 'function') {
    address = endpoints[type]()
  }
  const films = await fetchMovies(endpoints[type])
  return (
    <>
      <FilmCarousels films={films} title={title} prefix={prefix} />
    </>
  )
}
