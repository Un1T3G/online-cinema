import { useMutation } from 'react-query'
import { commonApi } from 'shared/api'

interface IProps {
  id: number
}

export const useUserDelete = () => {
  return useMutation(['user delete'], ({ id }: IProps) =>
    commonApi.users.deleteUserById(id)
  )
}
