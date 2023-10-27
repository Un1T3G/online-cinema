import { useUserProfileUpdate } from 'features/users'
import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthDto } from 'shared/api'
import { errorCatch } from 'shared/lib/api'
import { toastMe } from 'shared/lib/toastify'

export const useProfileUpdateForm = () => {
  const { handleSubmit, reset, register, formState } =
    useForm<Partial<IAuthDto>>()

  const router = useRouter()

  const { mutate: updateProfile } = useUserProfileUpdate({
    onSuccess: () => {
      router.push('/')
      toastMe.success('Profile successfully updated')
    },
    onError: (error: any) => {
      toastMe.error(errorCatch(error))
    },
  })

  const onSubmit: SubmitHandler<Partial<IAuthDto>> = (data) => {
    updateProfile(data)
    reset()
  }

  return {
    onSubmit: handleSubmit(onSubmit),
    register,
    formState,
  }
}
