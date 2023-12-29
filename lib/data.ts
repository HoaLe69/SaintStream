const accessToken = process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

export async function fetchMovies(address: string) {
  try {
    const res = await fetch(`${baseUrl}${address}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json'
      }
    })
    const heros = await res.json()
    return heros.results
  } catch (e) {
    console.error(e)
    throw new Error('Failed to fetch trending movie')
  }
}
