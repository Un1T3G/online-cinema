import { ISelectOption } from '../../types'
import { ComboBoxWithLabel } from '../combo-box-with-label'
import { ControllerRenderProps } from 'react-hook-form'

interface IProps<T> {
  label: string
  placeholder: string
  error?: string
  options: ISelectOption<T>[]
  field: ControllerRenderProps<any, any>
  isLoading?: boolean
  className?: string
}

export const FormComboBox = <T,>({
  label,
  placeholder,
  error,
  options,
  field,
  isLoading = false,
  className,
}: IProps<T>) => {
  return (
    <ComboBoxWithLabel
      label={label}
      error={error}
      placeholder={placeholder}
      isLoading={isLoading}
      values={
        field.value
          ? options.filter((option) => field.value.indexOf(option.value) >= 0)
          : []
      }
      onChange={(newValue) =>
        field.onChange(newValue.map((option) => option.value))
      }
      options={options}
      className={className}
    />
  )
}
