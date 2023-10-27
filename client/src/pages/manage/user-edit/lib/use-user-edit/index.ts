import { useUserUpdate } from 'features/users'
import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthDto } from 'shared/api'
import { errorCatch } from 'shared/lib/api'
import { toastMe } from 'shared/lib/toastify'

export const useUserEdit = () => {
  const { register, formState, handleSubmit } = useForm<Partial<IAuthDto>>()

  const { mutate } = useUserUpdate({
    onSuccess: () => {
	router.back()
      toastMe.success('User successfully updated')
    },
    onError: (error) => {
      toastMe.error(errorCatch(error))
    },
  })

  const router = useRouter()
  const { id } = router.query

  const onSubmit: SubmitHandler<Partial<IAuthDto>> = (data) => {
    mutate({ id: Number(id), dto: data })
  }

  return {
    register,
    formState,
    onSubmit: handleSubmit(onSubmit),
  }
}
