import clsx from 'clsx'
import { ComponentProps } from 'react'

import styles from './style.module.scss'

export const Container = ({
  className,
  children,
  ...restProps
}: ComponentProps<'div'>) => {
  return (
    <div className={clsx(styles.container, className)} {...restProps}>
      {children}
    </div>
  )
}
