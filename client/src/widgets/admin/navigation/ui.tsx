import { useRouter } from 'next/router'
import { useEvent } from 'shared/lib/use-event'
import { Tabs } from 'shared/ui/tabs'

import { AdminNavigationItems } from './config'
import styles from './style.module.scss'

export const AdminNavigation = () => {
  const router = useRouter()

  const handleOnChange = useEvent((value: string) => {
    router.push(value)
  })

  return (
    <div className={styles.root}>
      <Tabs value={router.asPath} onChange={handleOnChange}>
        {AdminNavigationItems.map((item) => (
          <Tabs.Item key={item.path} value={item.path}>
            {item.title}
          </Tabs.Item>
        ))}
      </Tabs>
    </div>
  )
}
