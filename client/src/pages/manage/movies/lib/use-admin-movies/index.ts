import { useMovies } from 'entities/movies'
import { useMemo, useState } from 'react'
import { displayRating } from 'shared/lib/display-rating'
import { useDebounce } from 'shared/lib/use-debounce'

export const useAdminMovies = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const debouncedSearchTerm = useDebounce(searchTerm)

  const { data, refetch } = useMovies({ searchTerm: debouncedSearchTerm })

  const items = useMemo(
    () =>
      data?.data.movies.map((movie) => ({
        id: movie.id,
        items: [
          movie.title,
          movie.genres.map((x) => x.name).join(' '),
          displayRating(movie.rating),
        ],
      })),
    [data]
  )

  return {
    searchTerm,
    setSearchTerm,
    items,
    refetch,
  }
}
