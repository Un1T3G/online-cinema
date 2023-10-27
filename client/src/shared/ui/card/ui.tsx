import clsx from 'clsx'
import { PropsWithChildren } from 'react'

import styles from './style.module.scss'

interface IProps extends PropsWithChildren {
  className?: string
}

export const Card = ({ children, className }: IProps) => {
  return <div className={clsx(styles.root, className)}>{children}</div>
}
