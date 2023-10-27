import clsx from 'clsx'
import { PropsWithChildren } from 'react'

import styles from './style.module.scss'

interface IPropsWithChildrenAndClassName extends PropsWithChildren {
  className?: string
}

interface IProps extends IPropsWithChildrenAndClassName {
  header: string[]
  className?: string
}

export const Table = ({ header, className, children }: IProps) => {
  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.header}>
        {header.map((item) => (
          <div key={item} className={styles.item}>
            {item}
          </div>
        ))}
      </div>
      {children}
    </div>
  )
}

Table.Row = ({ className, children }: IPropsWithChildrenAndClassName) => {
  return <div className={clsx(styles.row, className)}>{children}</div>
}

Table.Item = ({ className, children }: IPropsWithChildrenAndClassName) => {
  return <div className={clsx(styles.item, className)}>{children}</div>
}
