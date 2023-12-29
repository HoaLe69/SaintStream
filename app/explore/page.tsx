import Heros from '@/components/heros'
import { fetchMovies } from '@/lib/data'
import { TRENDING_TV } from '@/lib/endpoint'
export default async function Page() {
  const heros = await fetchMovies(TRENDING_TV)
  console.log(heros)
  return (
    <div>
      <Heros movies={heros} />
    </div>
  )
}
