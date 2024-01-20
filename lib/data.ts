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
    const data = await res.json()
    return data.results
  } catch (e) {
    console.error(e)
    throw new Error('Failed to fetch trending movie')
  }
}
// fetch information movie detail via movie Id
export async function fetchDetail(address: string) {
  try {
    const res = await fetch(`${baseUrl}/${address}`, config)
    return res.json()
  } catch (e) {
    console.error(e)
    throw new Error('Failed to fetch movies detail')
  }
}
// fetch all cast of movie via movie Id param
export async function fetchCasts(address: string) {
  try {
    const res = await fetch(`${baseUrl}${address}`, config)
    const cast = await res.json()
    return cast.cast
  } catch (e) {
    console.error(e)
    throw new Error('failed to fetch casts')
  }
}

// fetch list genre
export async function fetchListGenre(address: string) {
  try {
    const res = await fetch(`${baseUrl}${address}`, config)
    const data = await res.json()
    return data.genres
  } catch (e) {
    console.error(e)
    throw new Error('Failed to fetch list genres')
  }
}

//fetch list movie , tv discover
export async function fetchDiscover(
  type: string,
  sort_by: string = 'popularity.desc',
  with_genres?: string,
  page: number = 1
) {
  try {
    const res = await fetch(
      `${baseUrl}/discover/${type}?page=${page}&${
        with_genres && 'with_genres=' + with_genres
      }&include_adult=false&language=en-US&include_video=false&sort_by=${sort_by}`,
      config
    )
    // console.log(
    //   `${baseUrl}/discover/${type}?page=${page}&${
    //     with_genres && 'with_genres=' + with_genres
    //   }&include_adult=false&language=en-US&include_video=false&sort_by=${sort_by}`
    // )
    const data = await res.json()
    return data.results
  } catch (e) {
    console.error(e)
    throw new Error(`Failed to fetch ${type} discover`)
  }
}
