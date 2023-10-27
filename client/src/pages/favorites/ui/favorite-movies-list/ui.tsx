import { MovieItem } from 'entities/movies'
import { useUserFavorites } from 'entities/users'
import { ToggleMovieFavorite } from 'features/movies'

import { FavoriteMovieListSkeleton } from './skeleton'
import styles from './style.module.scss'

export const FavoriteMoviesList = () => {
  const { data, isLoading } = useUserFavorites()

  return isLoading ? (
    <FavoriteMovieListSkeleton />
  ) : (
    data && (
      <div className={styles.root}>
        {data.data.movies.map((movie) => (
          <MovieItem
            key={movie.id}
            movie={movie}
            renderActionButton={
              <ToggleMovieFavorite
                movieId={movie.id}
                className={styles['toggle-favorite-button']}
              />
            }
          />
        ))}
      </div>
    )
  )
}
