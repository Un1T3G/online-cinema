import { AdminPanelActorEditPage as AdminPanelActorEditScreen } from 'pages/manage/actor-edit'
import { TNextPageAuth } from 'shared/types'

const AdminPanelActorEditPage: TNextPageAuth = () => {
  return <AdminPanelActorEditScreen />
}

AdminPanelActorEditPage.isOnlyAdmin = true

export default AdminPanelActorEditPage
