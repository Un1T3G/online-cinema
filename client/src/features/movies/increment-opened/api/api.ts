import { useMutation } from 'react-query'
import { commonApi } from 'shared/api'

interface IProps {
  slug: string
}

export const useMovieIncrementOpened = () => {
  return useMutation(['movie count increment'], ({ slug }: IProps) =>
    commonApi.movies.incrementOpened(slug)
  )
}
