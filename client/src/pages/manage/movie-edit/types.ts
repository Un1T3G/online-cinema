import { IMovie } from 'shared/api'

export interface IMovieEditInput
  extends Omit<IMovie, 'id' | 'rating' | 'countOpened' | 'genres' | 'actors'> {
  genres: number[]
  actors: number[]
}
