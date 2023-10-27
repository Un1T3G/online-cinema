import { useGenres } from 'entities/genres'
import { useMemo, useState } from 'react'
import { useDebounce } from 'shared/lib/use-debounce'

export const useAdminGenres = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const debouncedSearchTerm = useDebounce(searchTerm)

  const { data, refetch } = useGenres(debouncedSearchTerm)

  const items = useMemo(
    () =>
      data?.data.genres.map((genre) => ({
        id: genre.id,
        items: [genre.name, genre.slug],
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
