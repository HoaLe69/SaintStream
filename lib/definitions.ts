export type Movie = {
  adult: boolean
  backdrop_path: string
  id: number
  title: string
  original_title?: string
  original_name?: string
  overview: string
  poster_path: string
  media_type: string
  genre_ids: Array<number>
  popularity: number
  release_date?: string
  first_air_date?: string
  vote_average: number
  vote_count: number
  tagline: string
}

export type Genre = {
  id: number
  name: string
}
export type ProductionCompany = {
  id: number
  logo_path: string
  name: string
  origin_country: string
}
export type ProductionCountry = {
  iso_3166_1: string
  name: string
}
export type MovieDetail = Movie & {
  budget: number
  genres: Genre[]
  homepage: string
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  revenue: number
  runtime: number
  status: string
  tagline?: string
}

export type Cast = {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  cast_id: number
  character: string
  credit_id: string
  order: number
}

export type Video = {
  iso_639_1: string
  iso_3166_1: string
  name: string
  key: string
  site: string
  size: number
  type: string
  official: string
  published_at: string
  id: string
}

/* Type of tv*/
export type TVSHOW = {
  adult: false
  backdrop_path: string
  created_by: {
    id: number
    create_id: string
    name: string
    gender: number
    profile_path: string | null
  }
  first_air_date: string
  genres: Genre[]
  homepage: string
  original_name: string
  id: number
  last_air_date: string
  name: string
  number_of_episodes: string
  number_of_seasons: number
  overview: string
  popularity: number
  poster_path: number
  production_countries: ProductionCountry
  tagline: string
  seasons: Season[]
}

export type Season = {
  air_date: string
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: string
  season_number: number
  vote_average: number
}

// type backdrops
export type Backdrop = {
  aspect_ratio: number
  height: number
  file_path: string
  vote_average: number
  vote_count: number
  width: number
}
//reviews
export type Reviews = {
  author: string
  author_details: {
    avatar_path: string | null
    name: string
    rating: number
    username: string
  }
  content: string
  created_at: string
  id: string
  updated_at: string
  url: string
}
