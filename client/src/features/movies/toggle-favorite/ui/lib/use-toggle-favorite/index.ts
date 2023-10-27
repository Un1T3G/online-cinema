import { useUserFavorites } from 'entities/users'
import { useMovieToggleFavorite } from 'features/movies'
import { useState } from 'react'
import { errorCatch } from 'shared/lib/api'
import { toastMe } from 'shared/lib/toastify'

export const useToggleFavorite = (id: number) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const { isLoading, refetch } = useUserFavorites(
    {},
    {
      onSuccess: ({ data }) => {
        setIsFavorite(data.movies.some((movie) => movie.id === id))
      },
    }
  )

  const { mutate } = useMovieToggleFavorite({
    onSuccess: ({ data }) => {
      refetch()
      const isMovieFavorite = data.movies.some((movie) => movie.id === id)
      setIsFavorite(isMovieFavorite)
      toastMe.success(
        isMovieFavorite
          ? 'Movie added to favorite'
          : 'Movie removed from favorite'
      )
    },
    onError: (error) => {
      toastMe.error(errorCatch(error))
    },
  })

  const toggleFavorite = () => {
    mutate({ id })
  }

  return {
    isFavorite,
    isLoading,
    toggleFavorite,
  }
}
