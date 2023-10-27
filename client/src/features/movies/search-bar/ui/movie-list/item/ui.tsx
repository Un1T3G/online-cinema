import Image from 'next/image'
import Link from 'next/link'
import { IMovie } from 'shared/api'
import { Icon } from 'shared/ui/icon'
import { Title } from 'shared/ui/title'

import styles from './style.module.scss'

interface IProps {
  movie: IMovie
}

export const MovieItem = ({ movie }: IProps) => {
  return (
    <Link href={`/movie/${movie.slug}`} className={styles.root}>
      <div className={styles.poster}>
        <Image src={movie.poster} alt={movie.title} layout="fill" />
      </div>
      <h3 className={styles.title}>{movie.title}</h3>
      <Icon type="MdChevronRight" wrapWithDiv />
    </Link>
  )
}
