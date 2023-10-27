import { useMovieSearchBar } from '../lib/use-movie-search-bar'
import { Card } from 'shared/ui/card'
import { Spinner } from 'shared/ui/spinner/ui'

import { MovieList } from './movie-list'
import { SearchBar } from './search-bar/ui'
import styles from './style.module.scss'

export const MovieSearchBar = () => {
  const { searchTerm, setSearchTerm, isLoading, movies } = useMovieSearchBar()

  return (
    <div className={styles.root}>
      <SearchBar searchTerm={searchTerm} onChangeSearchTerm={setSearchTerm} />
      {isLoading ||
        (movies && (
          <Card className="py-3 flex justify-center">
            {isLoading ? (
              <Spinner />
            ) : movies.length ? (
              <MovieList movies={movies} />
            ) : (
              <span>Movies not found</span>
            )}
          </Card>
        ))}
    </div>
  )
}
