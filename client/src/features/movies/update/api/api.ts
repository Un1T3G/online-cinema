import { AxiosResponse } from 'axios'
import { UseMutationOptions, useMutation } from 'react-query'
import { IMovieResponse, IMovieUpdateDto, commonApi } from 'shared/api'

interface IProps {
  id: number
  dto: IMovieUpdateDto
}

export const useMovieUpdate = (
  options?: Omit<
    UseMutationOptions<AxiosResponse<IMovieResponse, any>, unknown, IProps>,
    'mutationKey' | 'mutationFn'
  >
) => {
  return useMutation(
    ['update movie'],
    ({ id, dto }: IProps) => commonApi.movies.updateMovie(id, dto),
    options
  )
}
