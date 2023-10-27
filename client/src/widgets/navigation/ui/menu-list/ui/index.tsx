import { IMenuItem } from '../types'

import { MenuItem } from './menu-item/ui'
import styles from './style.module.scss'

interface IProps {
  title: string
  items: IMenuItem[]
}

export const MenuList = ({ title, items }: IProps) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles['menu-list']}>
        {items.map((item) => (
          <li key={item.title}>
            <MenuItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}
