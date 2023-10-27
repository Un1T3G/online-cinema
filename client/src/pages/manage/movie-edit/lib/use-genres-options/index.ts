import { useGenres } from 'entities/genres'
import { useMemo } from 'react'

export const useGenresOptions = () => {
  const { data, isLoading } = useGenres()

  const options = useMemo(
    () =>
      data?.data.genres.map((genre) => ({
        label: genre.name,
        value: genre.id,
      })),
    [data]
  )

  return {
    isGenresLoading: isLoading,
    genresOptions: options || [],
  }
}
