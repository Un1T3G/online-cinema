import { AdminPanelUserEditPage as AdminPanelUserEditScreen } from 'pages/manage/user-edit'
import { TNextPageAuth } from 'shared/types'

const AdminPanelUserEditPage: TNextPageAuth = () => {
  return <AdminPanelUserEditScreen />
}

AdminPanelUserEditPage.isOnlyAdmin = true

export default AdminPanelUserEditPage
