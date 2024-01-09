const accessToken = process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    Accept: 'application/json'
  }
}

// fetch tredding , popular ,  etc via url param
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
// fetch information movie detail from movie Id
export async function fetchMoviesDetail(id: string) {
  try {
    const res = await fetch(`${baseUrl}/movie/${id}?language=en-US`, config)
    return res.json()
  } catch (e) {
    console.error(e)
    throw new Error('Failed to fetch movies detail')
  }
}

// fetch all cast of movie via movie Id param
export async function fetchCastsOfMovie(id: string) {
  try {
    const res = await fetch(
      `${baseUrl}/movie/${id}/credits?language=en-US`,
      config
    )
    const cast = await res.json()
    return cast.cast
  } catch (e) {
    console.error(e)
    throw new Error('failed to fetch casts')
  }
}
