import { TButtonVariant } from '../../types'
import clsx from 'clsx'
import { ComponentProps } from 'react'

import styles from './style.module.scss'

interface IProps extends ComponentProps<'button'> {
  variant?: TButtonVariant
}

export const Button = ({
  type = 'button',
  variant = 'primary',
  children,
  className,
  ...restProps
}: IProps) => {
  return (
    <button
      className={clsx(styles[`button-${variant}`], className)}
      {...restProps}
    >
      {children}
    </button>
  )
}
