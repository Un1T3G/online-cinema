import dynamic from 'next/dynamic'

import { Logo } from './logo'
import { NavigationList } from './navigation-list'
import styles from './style.module.scss'

const DynamicGenresList = dynamic(
  () => import('./genres-list').then((x) => x.GenresList),
  { ssr: false }
)

const DynamicGeneralList = dynamic(
  () => import('./general-list').then((x) => x.GeneralList),
  { ssr: false }
)

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <Logo />
      <NavigationList />
      <DynamicGenresList />
      <DynamicGeneralList />
    </div>
  )
}
