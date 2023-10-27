import { MovieRating } from 'features/rating'

import styles from './style.module.scss'

interface IProps {
  movieId: number
}

export const Footer = ({ movieId }: IProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.card}>
        <h2 className={styles.title}>How do you like the movie?</h2>
        <p className={styles['sub-title']}>Rating improve recommendations </p>
        <MovieRating movieId={movieId} />
      </div>
    </div>
  )
}
