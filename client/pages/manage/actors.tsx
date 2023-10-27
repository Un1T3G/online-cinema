import { AdminPanelActorsPage as AdminPanelActorsScreen } from 'pages/manage/actors'
import { TNextPageAuth } from 'shared/types'

const AdminPanelActorsPage: TNextPageAuth = () => {
  return <AdminPanelActorsScreen />
}

AdminPanelActorsPage.isOnlyAdmin = true

export default AdminPanelActorsPage
