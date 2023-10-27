import { Input } from '../input'
import { UseFormRegister } from 'react-hook-form'

import styles from './style.module.scss'

interface IProps {
  error?: string
  register: UseFormRegister<any>
  onGenerate: VoidFunction
  labelClassName?: string
}

export const SlugField = ({
  register,
  error,
  onGenerate,
  labelClassName,
}: IProps) => {
  return (
    <Input>
      <Input.Label className={labelClassName}>Slug</Input.Label>
      <Input.FieldContainer>
        <Input.Field
          {...register('slug', {
            required: 'Slug is required!',
          })}
          className="pr-[90px]"
        />
        <Input.RightElement className="w-auto">
          <button type="button" className={styles.button} onClick={onGenerate}>
            Generate
          </button>
        </Input.RightElement>
      </Input.FieldContainer>
      <Input.ErrorMessage message={error} />
    </Input>
  )
}
