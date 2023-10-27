import { AdminPanelGenresPage as AdminPanelGenresScreen } from 'pages/manage/genres'
import { TNextPageAuth } from 'shared/types'

const AdminPanelGenresPage: TNextPageAuth = () => {
  return <AdminPanelGenresScreen />
}

AdminPanelGenresPage.isOnlyAdmin = true

export default AdminPanelGenresPage
