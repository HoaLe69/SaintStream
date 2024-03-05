import clsx from 'clsx'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/service/firebase'
const accessToken = process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    Accept: 'application/json'
  }
}
// get lít movie search
export async function fetchSeachMovie(q: string | undefined, page: number = 1) {
  try {
    const res = await fetch(
      `${baseUrl}/search/multi?query=${q}&include_adult=false&language=en-US&page=${page}`,
      config
    )
    return res.json()
  } catch (e) {
    console.error(e)
  }
}
// get list search for keywords by their name
export async function fetchKeywords(q: string) {
  try {
    const res = await fetch(
      `${baseUrl}/search/keyword?query=${q}&page=1`,
      config
    )
    const data = await res.json()
    return data.results
  } catch (e) {
    console.error(e)
  }
}
//get list movie id
export async function fetchMovieListBookMark(email: string) {
  const movieCol = collection(db, 'movies')
  const movieSnapshot = await getDocs(movieCol)
  const movieList = movieSnapshot.docs.map(doc => ({
    id: doc.id,
    data: doc.data()
  }))
  const newMovieList = movieList.filter(mv => mv.data.email === email)
  return newMovieList
}
//fetch movie and tv section bookmark
export async function fetchEachFilm(id: string, type: string) {
  try {
    const res = await fetch(`${baseUrl}/${type}/${id}?language=en-US`, config)
    return await res.json()
  } catch (e) {
    console.error(e)
    throw new Error('failed to fetch resource')
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
  type: string = 'tv',
  sort_by: string = 'popularity.desc',
  with_genres?: string,
  with_runtime?: string,
  from?: string,
  to?: string,
  page: number = 1
) {
  try {
    // await new Promise(resolve => setTimeout(resolve, 4000))
    const fromDate =
      type === 'tv'
        ? 'air_date.gte=' + from
        : 'primary_release_date.gte=' + from

    const toDate =
      type === 'tv' ? 'air_date.lte=' + to : 'primary_release_date.lte=' + to

    const url = clsx(
      `${baseUrl}/discover/${type}?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=${sort_by}&with_runtime.gte=0`,
      with_genres && `&with_genres=${with_genres}`,
      with_runtime && `&with_runtime.lte=${with_runtime}`,
      from && `&${fromDate}`,
      to && `&${toDate}`
    )
    // console.log(toggleUrl)
    // const url = `${baseUrl}/discover/${type}?page=${page}&${
    //   with_genres ? 'with_genres=' + with_genres + '&' : ''
    // }include_adult=false&language=en-US&with_runtime.gte=0&${
    //   with_runtime ? 'with_runtime.lte=' + with_runtime + '&' : ''
    // }${from ? fromDate + '&' : ''}${
    //   to ? toDate + '&' : ''
    // }include_video=false&sort_by=${sort_by}`
    //
    const res = await fetch(url, { ...config })

    const data = await res.json()
    return data.results
  } catch (e) {
    console.error(e)
    throw new Error(`Failed to fetch ${type} discover`)
  }
}

// fetch backdrops images
export async function fetchImage(address: string) {
  try {
    const res = await fetch(`${baseUrl}${address}`, config)
    const images = await res.json()
    return images.backdrops
  } catch (e) {
    console.error(e)
    throw new Error('failed to fetch Image about film')
  }
}

// fetch feedback
export async function fetchReview(address: string) {
  try {
    const res = await fetch(`${baseUrl}${address}`, config)
    const data = await res.json()
    return data.results
  } catch (e) {
    console.error(e)
    throw new Error('failed to fetch review')
  }
}
