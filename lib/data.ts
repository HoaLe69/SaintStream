const accessToken = process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

export async function fetchTrendingMovies() {
  try {
    const res = await fetch(`${baseUrl}/trending/movie/week?language=en-US`, {
      cache: 'no-cache',
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

export async function fetchPopularMovie() {
  try {
    const res = await fetch(`${baseUrl}/movie/popular?language=en-US&page=1`, {
      cache: 'no-cache',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json'
      }
    })
    const popular = await res.json()
    return popular.results
  } catch (e) {
    console.log(e)
    throw new Error('Failed to fetch popular movie')
  }
}

export async function fetchTopRateMovie() {
  try {
    const res = await fetch(
      `${baseUrl}/movie/top_rated?language=en-US&page=1`,
      {
        cache: 'no-cache',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json'
        }
      }
    )
    const topRate = await res.json()
    return topRate.results
  } catch (e) {
    console.log(e)
    throw new Error('Failed to fetch top rate movie')
  }
}
