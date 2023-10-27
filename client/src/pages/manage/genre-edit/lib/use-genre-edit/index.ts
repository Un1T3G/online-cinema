import { useGenreById } from 'entities/genres'
import { useGenreUpdate } from 'features/genres'
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { IGenreUpdateDto } from 'shared/api'
import { errorCatch } from 'shared/lib/api'
import { setFormValues } from 'shared/lib/set-form-values'
import { toastMe } from 'shared/lib/toastify'

export const useGenreEdit = (setValue: UseFormSetValue<IGenreUpdateDto>) => {
  const router = useRouter()

  const genreId = Number(router.query.id)

  const {} = useGenreById(genreId, {
    onSuccess: ({ data }) => {
	  console.log(data.genre)
      setFormValues(setValue, data.genre, ['id', 'createdAt'])
    },
  })

  const { mutate } = useGenreUpdate({
    onSuccess: (data) => {
      toastMe.success(`${data.data.genre.name} successfully updated`)
    },
    onError: (error) => {
      toastMe.error(errorCatch(error))
    },
  })

  const onSubmit: SubmitHandler<IGenreUpdateDto> = async (data) => {
    mutate({ id: genreId, dto: data })
  }

  return {
    onSubmit,
  }
}
