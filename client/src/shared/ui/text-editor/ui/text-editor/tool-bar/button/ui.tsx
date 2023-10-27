import clsx from 'clsx'
import { Icon, TIconType } from 'shared/ui/icon'

import styles from './style.module.scss'

interface IProps {
  onClick?: VoidFunction
  icon: TIconType
  isActive?: boolean
}

export const Button = ({ onClick, icon, isActive }: IProps) => {
  return (
    <button
      type="button"
      className={clsx(
        styles.root,
        (isActive === undefined || isActive === false) && styles.disabled
      )}
      onClick={onClick}
    >
      <Icon type={icon} wrapWithDiv />
    </button>
  )
}
