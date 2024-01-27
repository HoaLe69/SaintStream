import { fetchMovies } from '@/lib/data'
import { enpoints } from '@/lib/endpoint'
import FilmCarousels from './film-carousels'

type Props = {
  type: string
  title: string
}
export default async function SectionFilm({ type, title }: Props) {
  const films = await fetchMovies(enpoints[type])
  return (
    <>
      <FilmCarousels films={films} title={title} />
    </>
  )
}
