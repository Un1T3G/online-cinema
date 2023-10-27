import { MovieSearchBar } from 'features/movies'

import { FavoriteMoviesList } from './favorites-list'
import { PopularMoviesList } from './popular-list'
import styles from './style.module.scss'

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <MovieSearchBar />
      <PopularMoviesList />
      <FavoriteMoviesList />
    </aside>
  )
}
