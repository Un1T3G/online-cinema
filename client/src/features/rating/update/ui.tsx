import { useMovieRatingUpdate } from '.'
import { useMovieRating } from 'entities/rating'
import { errorCatch } from 'shared/lib/api'
import { toastMe } from 'shared/lib/toastify'
import { Rating } from 'shared/ui/rating'

interface IProps {
  movieId: number
  className?: string
}

export const MovieRating = ({ movieId, className }: IProps) => {
  const { data, refetch } = useMovieRating(movieId)

  const { mutate } = useMovieRatingUpdate({
    onSuccess: () => {
      refetch()
      toastMe.success('Movie rated successfully')
    },
    onError: (error) => {
      toastMe.error(errorCatch(error))
    },
  })

  const rating = data?.data.rating.value || 0

  const handleOnChange = (newValue: number) => {
    mutate({ movieId, newValue })
  }

  return (
    <Rating value={rating} onChange={handleOnChange} className={className} />
  )
}
