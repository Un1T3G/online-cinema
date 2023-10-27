import { IMovie } from 'shared/api'

export interface IMoviePageProps {
  movie: IMovie
  similarMovies: IMovie[]
}
