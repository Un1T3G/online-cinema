import { useState } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'
import { Icon } from 'shared/ui/icon'
import { Input } from 'shared/ui/input'

import { validEmailRegex } from './lib/valid-email'

interface IProps {
  register: UseFormRegister<any>
  formState: FormState<any>
  requiredPassword?: boolean
}

export const AuthField = ({
  register,
  formState,
  requiredPassword,
}: IProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleOnClick = () => {
    setShowPassword((prev) => !prev)
  }

  return (
    <>
      <Input>
        <Input.Label>Email</Input.Label>
        <Input.FieldContainer>
          <Input.Field
            {...register('email', {
              required: 'Email is required!',
              pattern: {
                value: validEmailRegex,
                message: 'Please enter a valid email',
              },
            })}
            placeholder="E-mail"
          />
          <Input.RightElement className="flex items-center justify-center">
            <Icon type="MdEmail" />
          </Input.RightElement>
        </Input.FieldContainer>
        <Input.ErrorMessage
          message={formState.errors.email?.message?.toString()}
        />
      </Input>
      <Input>
        <Input.Label>Password</Input.Label>
        <Input.FieldContainer>
          <Input.Field
            {...register(
              'password',
              requiredPassword
                ? {
                    required: 'Password is required!',
                    minLength: {
                      value: 6,
                      message: 'Min length should more 6 symbols!',
                    },
                  }
                : {}
            )}
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
          />
          <Input.RightElement className="flex items-center justify-center">
            <button onClick={handleOnClick}>
              <Icon
                type={
                  showPassword
                    ? 'MdOutlineVisibilityOff'
                    : 'MdOutlineVisibility'
                }
              />
            </button>
          </Input.RightElement>
        </Input.FieldContainer>
        <Input.ErrorMessage
          message={formState.errors.password?.message?.toString()}
        />
      </Input>
    </>
  )
}
