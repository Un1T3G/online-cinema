import { Button } from 'shared/ui/button'
import { AdminLayout } from 'widgets/admin'
import { AuthField } from 'widgets/auth'

import { useUserEdit } from './lib/use-user-edit/'
import styles from './style.module.scss'

export const AdminPanelUserEditPage = () => {
  const { register, formState, onSubmit } = useUserEdit()

  return (
    <AdminLayout title="User edit">
      <div className={styles.root}>
        <form className={styles.form} onSubmit={onSubmit}>
          <AuthField register={register} formState={formState} />
          <Button type="submit">Update</Button>
        </form>
      </div>
    </AdminLayout>
  )
}
