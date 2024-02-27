import { fetchMovies } from '@/lib/data'
import { TRENDING, TRENDING_TV } from '@/lib/endpoint'
import Heros from './heros'

export default async function HerosSection({ type }: { type: string }) {
  const path = type === 'movie' ? TRENDING : TRENDING_TV
  const heros = await fetchMovies(path)
  return <Heros movies={heros} type={type} />
}
