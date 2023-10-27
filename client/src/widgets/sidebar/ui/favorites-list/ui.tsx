import { SidebarMovieList } from '../movie-list'
import { Card } from 'shared/ui/card'

import { useFavoritesList } from './lib/use-favorites-list'
import styles from './style.module.scss'

export const FavoriteMoviesList = () => {
  const { hasUser, isLoading, movies } = useFavoritesList()

  return hasUser ? (
    movies?.length ? (
      <SidebarMovieList
        title="Favorites"
        movies={movies}
        isLoading={isLoading}
        navigatePath="/favorites"
      />
    ) : (
      <Card className={styles.card}>You have no favorites movies</Card>
    )
  ) : (
    <Card className={styles.card}>For viewing favorites plz authorize</Card>
  )
}
