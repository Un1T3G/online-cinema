import { ComboBox } from '..'

import styles from './style.module.scss'

type ComboBoxProps<T> = Parameters<typeof ComboBox<T>>[0]

interface IProps<T> extends ComboBoxProps<T> {
  label: string
  comboBoxClassName?: string
}

export const ComboBoxWithLabel = <T,>({
  label,
  className,
  comboBoxClassName,
  ...comboBoxProps
}: IProps<T>) => {
  return (
    <div className={className}>
      <span className={styles.label}>{label}</span>
      <ComboBox {...comboBoxProps} className={comboBoxClassName} />
    </div>
  )
}
