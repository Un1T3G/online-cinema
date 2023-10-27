import { IMovie } from 'shared/api'
import { MoviesCarousel } from 'widgets/movies'

import styles from './style.module.scss'

interface IProps {
  movies: IMovie[]
}

export const SimilarMovies = ({ movies }: IProps) => {
  return (
    <MoviesCarousel
      title="Similar movies"
      movies={movies}
      className={styles.root}
    />
  )
}
