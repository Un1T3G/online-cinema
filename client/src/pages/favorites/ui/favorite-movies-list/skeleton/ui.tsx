import { range } from 'shared/lib/math'
import { Skeleton } from 'shared/ui/skeleton'

import styles from '../style.module.scss'

export const FavoriteMovieListSkeleton = () => {
  return (
    <div className={styles.root}>
      {range(6).map((x) => (
        <Skeleton height={180} />
      ))}
    </div>
  )
}
