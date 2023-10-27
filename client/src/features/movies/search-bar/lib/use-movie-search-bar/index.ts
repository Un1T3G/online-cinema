import { useMovies } from 'entities/movies'
import { useState } from 'react'
import { useDebounce } from 'shared/lib/use-debounce'

export const useMovieSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const debouncedSearchTerm = useDebounce(searchTerm)

  const { data, isLoading } = useMovies(
    { searchTerm: debouncedSearchTerm, limit: 3 },
    { enabled: !!debouncedSearchTerm }
  )

  return {
    searchTerm,
    setSearchTerm,
    isLoading,
    movies: data?.data.movies,
  }
}
