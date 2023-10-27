import { userActions } from 'entities/session'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthDto } from 'shared/api'
import { getThunkType } from 'shared/lib/get-thunk-type'
import { toastMe } from 'shared/lib/toastify'
import { useAppDispatch } from 'shared/lib/use-redux'

export const useAuthForm = () => {
  const [type, setType] = useState<'login' | 'register' | undefined>()

  const {
    formState,
    register: registerForm,
    handleSubmit,
    reset,
  } = useForm<IAuthDto>({ mode: 'onChange' })

  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<IAuthDto> = (data) => {
    if (type === 'login') {
      dispatch(userActions.login(data)).then(({ type, payload }) => {
        const thunkType = getThunkType(type)

        if (thunkType === 'rejected') {
          toastMe.error(payload as string)
        } else if (thunkType === 'fulfilled') {
          toastMe.success('Login successfully')
          reset()
        }
      })
    } else if (type === 'register') {
      dispatch(userActions.register(data)).then(({ type, payload }) => {
        const thunkType = getThunkType(type)

        if (thunkType === 'rejected') {
          toastMe.error(payload as string)
        } else if (thunkType === 'fulfilled') {
          toastMe.success('Register successfully')
          reset()
        }
      })
    }
  }

  return {
    onSubmit: handleSubmit(onSubmit),
    formState,
    registerForm,
    changeType: (type: 'login' | 'register') => () => setType(type),
  }
}
