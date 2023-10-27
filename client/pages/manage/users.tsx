import { AdminPanelUsersPage as AdminPanelHomeScreen } from 'pages/manage/users'
import { TNextPageAuth } from 'shared/types'

const AdminPanelUsersPage: TNextPageAuth = () => {
  return <AdminPanelHomeScreen />
}

AdminPanelUsersPage.isOnlyAdmin = true

export default AdminPanelUsersPage
