import { TTitleVariant } from '.'
import clsx from 'clsx'
import { ReactHTML, createElement } from 'react'

import styles from './style.module.scss'

interface IProps {
  as?: keyof ReactHTML
  variant?: TTitleVariant
  text: string
  className?: string
}

export const Title = ({
  as = 'h1',
  variant = 'xl',
  text,
  className,
}: IProps) => {
  return createElement(
    as,
    {
      className: clsx(styles[`title-${variant}`], className),
    },
    text
  )
}
