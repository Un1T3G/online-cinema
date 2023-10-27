import { ReactNode } from 'react'
import { IMovie } from 'shared/api'

import styles from './style.module.scss'

interface IProps {
  movies: IMovie[]
  renderItem: (movie: IMovie) => ReactNode
}

export const MovieList = ({ movies, renderItem }: IProps) => {
  return (
    <ul className={styles.root}>
      {movies.map((movie) => (
        <li key={movie.id} className={styles['root__item']}>
          {renderItem(movie)}
        </li>
      ))}
    </ul>
  )
}
