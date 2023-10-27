import { PropsWithChildren } from 'react'
import { Container } from 'shared/ui/container'
import { Navigation } from 'widgets/navigation'
import { Sidebar } from 'widgets/sidebar'

import styles from './style.module.scss'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navigation />
      <main className={styles.layout}>
        <Container>{children}</Container>
      </main>
      <Sidebar />
    </>
  )
}
