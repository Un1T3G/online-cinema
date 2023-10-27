import { useMutation } from 'react-query'
import { commonApi } from 'shared/api'

export const useMovieCreate = () => {
  return useMutation(['movie create'], () => commonApi.movies.createMovie())
}
