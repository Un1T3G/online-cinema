import { AxiosResponse } from 'axios'
import { UseMutationOptions, useMutation } from 'react-query'
import { IRatingResponse, commonApi } from 'shared/api'

interface IProps {
  movieId: number
  newValue: number
}

export const useMovieRatingUpdate = (
  options?: Omit<
    UseMutationOptions<AxiosResponse<IRatingResponse, any>, unknown, IProps>,
    'mutationKey' | 'mutationFn'
  >
) => {
  return useMutation(
    ['movie rating'],
    (props: IProps) => commonApi.rating.updateRating(props),
    options
  )
}
