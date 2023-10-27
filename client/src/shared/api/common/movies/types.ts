import { IActor } from '../actors'
import { IGenre } from '../genres'

export interface IParameters {
  year: number
  duration: number
  country: string
}

export interface IMovie {
  id: number
  slug: string
  title: string
  poster: string
  bigPoster: string
  parameters: IParameters
  description: string
  rating: number
  countOpened: number
  genres: IGenre[]
  actors: Omit<IActor, 'countMovies'>[]
  videoUrl: string
}

export interface IMovieResponse {
  movie: IMovie
}

export interface IMovieListResponse {
  movies: IMovie[]
  count: number
}

export interface IMovieUpdateDto
  extends Omit<
    IMovie,
    'countOpened' | 'rating' | 'genres' | 'actors' | 'description' | 'id'
  > {
  genres: number[]
  actors: number[]
}
