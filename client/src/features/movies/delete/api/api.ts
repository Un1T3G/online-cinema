import { useMutation } from 'react-query'
import { commonApi } from 'shared/api'

interface IProps {
  id: number
}

export const useMovieDelete = () => {
  return useMutation(['movies', 'delete'], ({ id }: IProps) =>
    commonApi.movies.deleteMovieById(id)
  )
}
