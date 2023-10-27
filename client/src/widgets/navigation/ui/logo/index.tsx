import Image from 'next/image'
import logo from 'shared/assets/images/logo.png'

import styles from './style.module.scss'

export const Logo = () => {
  return <Image src={logo} alt="Online cinema" className={styles.logo} />
}
