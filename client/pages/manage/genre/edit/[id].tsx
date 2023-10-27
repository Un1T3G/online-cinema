import { AdminPanelGenreEditPage as AdminPanelGenreEditScreen } from 'pages/manage/genre-edit'
import { TNextPageAuth } from 'shared/types'

const AdminPanelGenreEditPage: TNextPageAuth = () => {
  return <AdminPanelGenreEditScreen />
}

AdminPanelGenreEditPage.isOnlyAdmin = true

export default AdminPanelGenreEditPage
