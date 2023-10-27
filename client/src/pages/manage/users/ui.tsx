import { useUserDelete } from 'features/users'
import { useEvent } from 'shared/lib/use-event'
import { AdminHeader, AdminLayout, AdminTable } from 'widgets/admin'

import { AdminUsersHeader } from './config'
import { useAdminUsers } from './lib/use-admin-users'

export const AdminPanelUsersPage = () => {
  const { searchTerm, setSearchTerm, items } = useAdminUsers()

  const getEditUrl = useEvent((id: number) => {
    return `/manage/user/edit/${id}`
  })

  const { mutate: deleteUserMutation } = useUserDelete()

  const deleteUser = useEvent((id: number) => {
    console.log(id)
    deleteUserMutation({ id })
  })

  return (
    <AdminLayout title="Users">
      <AdminHeader searchTerm={searchTerm} onChangeSearchTerm={setSearchTerm} />
      {items && (
        <AdminTable
          header={AdminUsersHeader}
          rows={items}
          getEditUrl={getEditUrl}
          onDeleteItem={deleteUser}
        />
      )}
    </AdminLayout>
  )
}
