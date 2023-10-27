import { IMovie } from 'shared/api'

import { MovieItem } from './item'
import styles from './style.module.scss'

interface IProps {
  movies: IMovie[]
}

export const MovieList = ({ movies }: IProps) => {
  return (
    <ul className={styles.root}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieItem movie={movie} />
        </li>
      ))}
    </ul>
  )
}
