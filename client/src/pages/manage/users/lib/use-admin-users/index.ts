import { useUsers } from 'entities/users'
import { useMemo, useState } from 'react'
import { useDebounce } from 'shared/lib/use-debounce'

export const useAdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const debouncedSearchTerm = useDebounce(searchTerm)

  console.log(debouncedSearchTerm)

  const { data } = useUsers({ searchTerm: debouncedSearchTerm })

  const items = useMemo(
    () =>
      data?.data.users.map((user) => ({
        id: user.id,
        items: [user.email, user.createdAt],
      })),
    [data]
  )

  return {
    searchTerm,
    setSearchTerm,
    items,
  }
}
