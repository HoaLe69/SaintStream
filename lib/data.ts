const accessToken = process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    Accept: 'application/json'
  }
}
export async function fetchMovies(address: string) {
  try {
    const res = await fetch(`${baseUrl}${address}`, config)
    const heros = await res.json()
    return heros.results
  } catch (e) {
    console.error(e)
    throw new Error('Failed to fetch trending movie')
  }
}

export async function fetchMoviesDetail(id: string) {
  try {
    const res = await fetch(`${baseUrl}/movie/${id}?language=en-US`, config)
    return res.json()
  } catch (e) {
    console.error(e)
    throw new Error('Failed to fetch movies detail')
  }
}
