import { useActorById } from 'entities/actors'
import { useActorUpdate } from 'features/actors'
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { IActorUpdateDto } from 'shared/api'
import { errorCatch } from 'shared/lib/api'
import { setFormValues } from 'shared/lib/set-form-values'
import { toastMe } from 'shared/lib/toastify'

export const useActorEdit = (setValue: UseFormSetValue<IActorUpdateDto>) => {
  const router = useRouter()

  const actorId = Number(router.query.id)

  const {} = useActorById(actorId, {
    onSuccess: ({ data }) => {
      setFormValues(setValue, data.actor, ['id', 'countMovies'])
    },
  })

  const { mutate } = useActorUpdate({
    onSuccess: ({ data }) => {
      toastMe.success(`${data.actor.name} successfully updated`)
    },
    onError: (error) => {
      toastMe.error(errorCatch(error))
    },
  })

  const onSubmit: SubmitHandler<IActorUpdateDto> = async (data) => {
    mutate({ id: actorId, dto: data })
  }

  return {
    onSubmit,
  }
}
