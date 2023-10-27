import { IGenre, IMovie } from 'shared/api'

export interface IGenreMoviesProps {
  genre: IGenre
  movies: IMovie[]
}
