import { IMovieEditInput } from '../../types'
import { useMovieById } from 'entities/movies'
import { useMovieUpdate } from 'features/movies'
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { errorCatch } from 'shared/lib/api'
import { setFormValues } from 'shared/lib/set-form-values'
import { toastMe } from 'shared/lib/toastify'

export const useMovieEdit = (setValue: UseFormSetValue<IMovieEditInput>) => {
  const router = useRouter()

  const movieId = Number(router.query.id)

  const { isLoading } = useMovieById(movieId, {
    onSuccess({ data }) {
      const {
        title,
        description,
        poster,
        bigPoster,
        videoUrl,
        slug,
        parameters,
        actors,
        genres,
      } = data.movie

      setFormValues(setValue, data.movie, ['actors', 'genres', 'id'])

      /*
      setValue('title', title)
      setValue('description', description)
      setValue('poster', poster)
      setValue('bigPoster', bigPoster)
      setValue('videoUrl', videoUrl)

      setValue('slug', slug)

      setValue('parameters.country', parameters.country)
      setValue('parameters.duration', parameters.duration)
      setValue('parameters.year', parameters.year)
      */

      setValue(
        'actors',
        actors.map((actor) => actor.id)
      )

      setValue(
        'genres',
        genres.map((genre) => genre.id)
      )
    },
    onError(error) {
      toastMe.error(error as string)
    },
    enabled: !!router.query.id,
  })

  const { mutate } = useMovieUpdate({
    onSuccess: (data) => {
      toastMe.success(`${data.data.movie.title} successfully updated`)
    },
    onError: (error) => {
      toastMe.error(errorCatch(error))
    },
  })

  const onSubmit: SubmitHandler<IMovieEditInput> = async (data) => {
    mutate({ id: movieId, dto: data })
  }

  return {
    onSubmit,
  }
}
