import { AxiosResponse } from 'axios'
import { UseMutationOptions, useMutation } from 'react-query'
import { IActorResponse, IActorUpdateDto, commonApi } from 'shared/api'

interface IProps {
  id: number
  dto: IActorUpdateDto
}

export const useActorUpdate = (
  options?: Omit<
    UseMutationOptions<AxiosResponse<IActorResponse, any>, unknown, IProps>,
    'mutationKey' | 'mutationFn'
  >
) => {
  return useMutation(
    ['update actor'],
    ({ id, dto }: IProps) => commonApi.actors.updateActor(id, dto),
    options
  )
}
