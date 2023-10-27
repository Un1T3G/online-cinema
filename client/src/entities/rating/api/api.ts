import { useQuery } from 'react-query'
import { commonApi } from 'shared/api'

export const useMovieRating = (movieId: number) => {
  return useQuery(['movie rating', movieId], () =>
    commonApi.rating.getRatingByMovieId(movieId)
  )
}
