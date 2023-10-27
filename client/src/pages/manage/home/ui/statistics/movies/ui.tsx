import { StatisticsCard, StatisticsCardSkeleton } from '../card'
import { useMostPopularMovies } from 'entities/movies'
import Image from 'next/image'

import styles from './style.module.scss'

export const MoviesStatistics = () => {
  const { isLoading, data } = useMostPopularMovies()

  const movie = data?.data.movies[0]

  return isLoading ? (
    <StatisticsCardSkeleton />
  ) : (
    <StatisticsCard className={styles.root}>
      <h1 className={styles.title}>The most popular movie</h1>
      <span className={styles['sub-title']}>
        Opened {movie?.countOpened} times
      </span>
      <div className={styles.poster}>
        <Image src={movie!.bigPoster} alt={movie!.title} layout="fill" />
      </div>
    </StatisticsCard>
  )
}
