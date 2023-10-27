import { MovieItem } from 'entities/movies'
import { IMovie } from 'shared/api'

import styles from './style.module.scss'

interface IProps {
  movies: IMovie[]
}

export const MoviesList = ({ movies }: IProps) => {
  return (
    <div className={styles.root}>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  )
}
