import { IMovie } from 'shared/api'
import { MoviesCarousel } from 'widgets/movies'

import styles from './style.module.scss'

interface IProps {
  movies: IMovie[]
}

export const TrendingMovies = ({ movies }: IProps) => {
  return (
    <MoviesCarousel
      title="Trending now"
      movies={movies}
      className={styles.root}
    />
  )
}
