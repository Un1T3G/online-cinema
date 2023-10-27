import { AxiosResponse } from 'axios'
import { UseMutationOptions, useMutation } from 'react-query'
import { IGenreResponse, IGenreUpdateDto, commonApi } from 'shared/api'

interface IProps {
  id: number
  dto: IGenreUpdateDto
}

export const useGenreUpdate = (
  options?: Omit<
    UseMutationOptions<AxiosResponse<IGenreResponse, any>, unknown, IProps>,
    'mutationKey' | 'mutationFn'
  >
) => {
  return useMutation(
    ['genre'],
    ({ id, dto }: IProps) => commonApi.genres.updateGenre(id, dto),
    options
  )
}
