// movie enpoint
export const TRENDING = '/trending/movie/day?language=en-US'
export const NOW_PLAYING = '/movie/now_playing?language=en-US&page=1'
export const POPULAR = '/movie/popular?language=en-US&page=1'
export const TOP_RATE = '/movie/top_rated?language=en-US&page=1'
export const UP_COMING = '/movie/upcoming?language=en-US&page=2'

//tv enpoint
export const TRENDING_TV = '/trending/tv/day?language=en-US'
export const AIRING_TODAY = '/tv/airing_today?language=en-US&page=2'
export const ON_THE_AIR = '/tv/on_the_air?language=en-US&page=1'
export const POPULAR_TV = '/tv/popular?language=en-US&page=1'
export const TOP_RATE_TV = '/tv/top_rated?language=en-US&page=1'

//movie defailt similar
export const SIMILAR_MOVIES = (id: string): string =>
  `/movie/${id}/similar?language=en-US&page=1`
export const RECOMMENDATIONS = (id: string): string =>
  `/movie/${id}/recommendations?language=es-US&page=1`
export const VIDEOS_KEY = (id: string): string =>
  `/movie/${id}/videos?language=en-US`
export const DETAIL_MOVIES = (id: string): string =>
  `/movie/${id}?language=en-US`
export const CAST_MOVIE = (id: string): string =>
  `/movie/${id}/credits?language=en-US`

//tv detail
export const DETAIL_TV = (id: string): string => `/tv/${id}?language=en-US`
export const CAST_TV = (id: string): string =>
  `/tv/${id}/credits?language=en-US`
export const RECOMENDATION_TV = (id: string): string =>
  `/tv/${id}/recommendations?language=es-US`
export const VIDEOS_KEY_TV = (id: string): string =>
  `/tv/${id}/videos?language=en-US`
// fetch list genre movie and tv
export const GENRE_TV = '/genre/tv/list?language=en'
export const GENRE_MV = '/genre/movie/list?language=en'

export const GENRE = (type: string): string => `/genre/${type}/list?language=en`

// get backdrop
export const IMAGES_MV = (id: string): string => `/movie/${id}/images`
export const IMAGES_TV = (id: string): string => `/tv/${id}/images`

export const enpoints: Record<string, string> = {
  trending_mv: TRENDING,
  now_playing_mv: NOW_PLAYING,
  popular_mv: POPULAR,
  top_rated_mv: TOP_RATE,
  up_coming_mv: UP_COMING,
  trending_tv: TRENDING_TV,
  airing_today_tv: AIRING_TODAY,
  on_the_air_tv: ON_THE_AIR,
  popular_tv: POPULAR_TV,
  top_rated_tv: TOP_RATE_TV
}
