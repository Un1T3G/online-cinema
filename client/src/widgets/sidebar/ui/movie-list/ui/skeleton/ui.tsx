import { range } from 'shared/lib/math'
import { Skeleton } from 'shared/ui/skeleton'

import styles from './style.module.scss'

export const MovieListSkeleton = () => {
  return (
    <div className={styles.root}>
      <Skeleton className={styles.title} />
      {range(3).map((x) => (
        <Skeleton key={x} className={styles.item} />
      ))}
    </div>
  )
}
