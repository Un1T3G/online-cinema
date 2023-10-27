import { IconSelect } from '../icon-select'

import styles from './style.module.scss'

type IconSelectProps = Parameters<typeof IconSelect>[0]

interface IProps extends IconSelectProps {
  label: string
}

export const IconSelectWithLabel = ({ label, ...restProps }: IProps) => {
  return (
    <>
      <span className={styles.root}>{label}</span>
      <IconSelect {...restProps} />
    </>
  )
}
