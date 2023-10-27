import { useMutation } from 'react-query'
import { commonApi } from 'shared/api'

interface IProps {
  id: number
}

export const useGenreDelete = () => {
  return useMutation(['genres delete'], ({ id }: IProps) =>
    commonApi.genres.deleteGenreById(id)
  )
}
