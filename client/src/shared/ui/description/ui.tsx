import clsx from 'clsx'

import styles from './style.module.scss'

interface IProps {
  text: string
  className?: string
}

export const Description = ({ text, className }: IProps) => {
  return <p className={clsx(styles.description, className)}>{text}</p>
}
