import { useMutation } from 'react-query'
import { commonApi } from 'shared/api'

interface IProps {
  id: number
}

export const useActorDelete = () => {
  return useMutation(['actor delete'], ({ id }: IProps) =>
    commonApi.actors.deleteActorById(id)
  )
}
