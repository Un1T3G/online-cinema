import { AxiosResponse } from 'axios'
import { UseMutationOptions, useMutation } from 'react-query'
import { IAuthDto, IUserResponse, commonApi } from 'shared/api'

interface IProps extends Partial<IAuthDto> {}

export const useUserProfileUpdate = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<IUserResponse, any>,
      unknown,
      IProps,
      unknown
    >,
    'mutationKey' | 'mutationFn'
  >
) => {
  return useMutation(
    ['user profile'],
    (props: IProps) => commonApi.users.updateProfile(props),
    options
  )
}
