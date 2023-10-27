import { useAuth } from 'entities/session'
import { useUserFavorites } from 'entities/users'

export const useFavoritesList = () => {
  const { user } = useAuth()

  const { data, isLoading } = useUserFavorites({}, { enabled: !!user }, [user])

  return {
    hasUser: !!user,
    isLoading,
    movies: data?.data.movies,
  }
}
