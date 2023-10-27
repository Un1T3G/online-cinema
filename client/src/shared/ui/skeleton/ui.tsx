import clsx from 'clsx'

import styles from './style.module.scss'

interface IProps {
  width?: number | 'string'
  height?: number | 'string'
  className?: string
}

export const Skeleton = ({ width, height, className }: IProps) => {
  return (
    <div
      style={{
        width: width
          ? typeof width === 'number'
            ? `${width}px`
            : width
          : undefined,
        height: height
          ? typeof height === 'number'
            ? `${height}px`
            : height
          : undefined,
      }}
      className={clsx(styles.skeleton, className)}
    ></div>
  )
}
