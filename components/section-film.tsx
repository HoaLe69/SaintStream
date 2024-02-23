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
  // await new Promise(resolve => setTimeout(resolve, 5000))
  let address
  if (typeof endpoints[type] === 'function') {
    //@ts-ignore
    address = endpoints[type](id)
  } else address = endpoints[type]
  console.log(address)
  const films = await fetchMovies(address)
  return (
    <>
      <FilmCarousels films={films} title={title} prefix={prefix} />
    </>
  )
}
