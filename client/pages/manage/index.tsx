import { AdminPanelHomePage as AdminPanelHomeScreen } from 'pages/manage/home'
import { TNextPageAuth } from 'shared/types'

const AdminPanelHomePage: TNextPageAuth = () => {
  return <AdminPanelHomeScreen />
}

AdminPanelHomePage.isOnlyAdmin = true

export default AdminPanelHomePage
