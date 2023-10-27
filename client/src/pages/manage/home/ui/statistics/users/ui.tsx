import { StatisticsCard, StatisticsCardSkeleton } from '../card'
import { useUsersCount } from 'entities/users'

import styles from './style.module.scss'

export const UsersStatistics = () => {
  const { data, isLoading } = useUsersCount()

  return isLoading ? (
    <StatisticsCardSkeleton />
  ) : (
    <StatisticsCard className={styles.root}>
      <h1 className={styles.title}>{data?.data}</h1>
      <span className={styles['sub-title']}>users</span>
    </StatisticsCard>
  )
}
