import { SidebarMovieList } from '../movie-list/'
import { useMostPopularMovies } from 'entities/movies'

export const PopularMoviesList = () => {
  const { data, isLoading } = useMostPopularMovies({ limit: 3 })

  return (
    data && (
      <SidebarMovieList
        title="Popular"
        movies={data.data.movies}
        isLoading={isLoading}
        navigatePath="/trending"
      />
    )
  )
}
