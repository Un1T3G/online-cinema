import { AdminPanelMoviesPage as AdminPanelMoviesScreen } from 'pages/manage/movies'
import { TNextPageAuth } from 'shared/types'

const AdminPanelMoviesPage: TNextPageAuth = () => {
  return <AdminPanelMoviesScreen />
}

AdminPanelMoviesPage.isOnlyAdmin = true

export default AdminPanelMoviesPage
