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
}
export type Genres = {
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
  genres: Genres[]
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
