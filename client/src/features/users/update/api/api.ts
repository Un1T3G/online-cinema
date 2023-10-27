import { AxiosResponse } from 'axios'
import { UseMutationOptions, useMutation } from 'react-query'
import { IAuthDto, IUserResponse, commonApi } from 'shared/api'

interface IProps {
  id: number
  dto?: Partial<IAuthDto>
}

export const useUserUpdate = (
  options?: Omit<
    UseMutationOptions<AxiosResponse<IUserResponse, any>, unknown, IProps>,
    'mutationKey' | 'mutationFn'
  >
) => {
  return useMutation(
    ['user update'],
    ({ id, dto }: IProps) =>
      commonApi.users.updateUserById(id, dto?.email, dto?.password),
    options
  )
}
