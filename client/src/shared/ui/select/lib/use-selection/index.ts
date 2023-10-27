import { ISelectOption } from '../../types'
import { useEvent } from 'shared/lib/use-event'

interface IProps<T> {
  values: ISelectOption<T>[]
  onChange: (values: ISelectOption<T>[]) => void
  isComboSelect?: boolean
}

export const useSelection = <T>({
  values,
  onChange,
  isComboSelect = true,
}: IProps<T>) => {
  const addSelection = useEvent((option: ISelectOption<T>) => {
    onChange([...values, option])
  })

  const removeSelection = useEvent((option: ISelectOption<T>) => {
    const index = values.indexOf(option)

    if (index > -1) {
      onChange(values.filter((_, i) => i !== index))
    }
  })

  const toggleSelection = useEvent((option: ISelectOption<T>) => {
    const index = values.indexOf(option)

    if (index > -1) {
      onChange(isComboSelect ? values.filter((_, i) => i !== index) : [])
    } else {
      onChange(isComboSelect ? [...values, option] : [option])
    }
  })

  const isSelected = (option: ISelectOption<T>) => {
    return values.includes(option)
  }

  const clearSelection = useEvent(() => {
    onChange([])
  })

  return {
    addSelection,
    removeSelection,
    toggleSelection,
    isSelected,
    clearSelection,
  }
}
