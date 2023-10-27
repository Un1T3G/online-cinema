import { AdminLayout } from 'widgets/admin'

import { MoviesStatistics, UsersStatistics } from './statistics'
import styles from './style.module.scss'

export const AdminPanelHomePage = () => {
  return (
    <AdminLayout title="Statistics">
      <div className={styles.row}>
        <UsersStatistics />
        <MoviesStatistics />
      </div>
    </AdminLayout>
  )
}
