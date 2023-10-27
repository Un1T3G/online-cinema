import { FavoritesPage as FavoritesScreen } from 'pages/favorites'
import { TNextPageAuth } from 'shared/types'

const FavoritesPage: TNextPageAuth = () => {
  return <FavoritesScreen />
}

FavoritesPage.isOnlyUser = true

export default FavoritesPage
