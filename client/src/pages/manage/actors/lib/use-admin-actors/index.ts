import { useActors } from 'entities/actors'
import { useMemo, useState } from 'react'
import { useDebounce } from 'shared/lib/use-debounce'

export const useAdminActors = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const debouncedSearchTerm = useDebounce(searchTerm)

  const { data, refetch } = useActors({ searchTerm: debouncedSearchTerm })

  const items = useMemo(
    () =>
      data?.data.actors.map((actor) => ({
        id: actor.id,
        items: [actor.name, actor.countMovies.toString()],
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
