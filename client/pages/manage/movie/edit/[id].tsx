import { AdminPanelMovieEditPage as AdminPanelMovieEditScreen } from 'pages/manage/movie-edit'
import { TNextPageAuth } from 'shared/types'

const AdminPanelMovieEditPage: TNextPageAuth = () => {
  return <AdminPanelMovieEditScreen />
}

AdminPanelMovieEditPage.isOnlyAdmin = true

export default AdminPanelMovieEditPage
