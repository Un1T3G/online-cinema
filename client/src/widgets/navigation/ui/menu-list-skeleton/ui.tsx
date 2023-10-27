import { range } from 'shared/lib/math'
import { Skeleton } from 'shared/ui/skeleton'

import styles from './style.module.scss'

export const MenuListSkeleton = () => {
  return (
    <div>
      <Skeleton className={styles.title} />
      {range(5).map((x) => (
        <Skeleton key={x} className={styles['menu-item']} />
      ))}
    </div>
  )
}
