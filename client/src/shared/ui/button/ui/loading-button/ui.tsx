'use client'

import { Button } from '..'
import clsx from 'clsx'
import { Spinner } from 'shared/ui/spinner/ui'

import styles from './style.module.scss'

type TButtonProps = Parameters<typeof Button>[0]

interface IProps extends TButtonProps {
  loading?: boolean
}

export const LoadingButton = ({
  loading = false,
  disabled,
  children,
  className,
  ...restProps
}: IProps) => {
  return (
    <Button
      disabled={loading || disabled}
      className={clsx(styles.root, className)}
      {...restProps}
    >
      {loading && (
        <div className={styles['loading-container']}>
          <Spinner />
        </div>
      )}
      <span className={clsx(styles.content, loading && styles['hide-content'])}>
        {children}
      </span>
    </Button>
  )
}
