import { useMutation } from 'react-query'
import { commonApi } from 'shared/api'

export const useGenresCreate = () => {
  return useMutation(['genres create'], () => commonApi.genres.createGenre())
}
