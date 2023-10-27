import { IMenuItem } from '../../types'
import Link from 'next/link'
import { Icon } from 'shared/ui/icon'

import styles from './style.module.scss'

interface IProps {
  item: IMenuItem
}

export const MenuItem = ({ item }: IProps) => {
  const isLink = item.path !== undefined

  if (isLink) {
    return (
      <Link className={styles['menu-item']} href={item.path!}>
        <Icon wrapWithDiv type={item.icon} />
        <span>{item.title}</span>
      </Link>
    )
  }

  return (
    <button className={styles['menu-item']} onClick={item.onClick}>
      <Icon wrapWithDiv type={item.icon} />
      <span>{item.title}</span>
    </button>
  )
}
