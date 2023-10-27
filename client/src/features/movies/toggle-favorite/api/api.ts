import { AxiosResponse } from 'axios'
import { UseMutationOptions, useMutation } from 'react-query'
import { IMovieListResponse, commonApi } from 'shared/api'

interface IProps {
  id: number
}

export const useMovieToggleFavorite = (
  options?: Omit<
    UseMutationOptions<AxiosResponse<IMovieListResponse, any>, unknown, IProps>,
    'mutationKey' | 'mutationFn'
  >
) => {
  return useMutation(
    ['movie toggle favorite'],
    ({ id }: IProps) => commonApi.users.toggleFavorite(id),
    options
  )
}
