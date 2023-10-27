import clsx from 'clsx'

import styles from './style.module.scss'

interface IProps {
  className?: string
}

export const Spinner = ({ className }: IProps) => {
  return <div className={clsx(styles.spinner, className)}></div>
}
