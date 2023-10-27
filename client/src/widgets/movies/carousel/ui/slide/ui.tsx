import Image from 'next/image'
import Link from 'next/link'
import { IMovie } from 'shared/api'
import { Title } from 'shared/ui/title'

import styles from './style.module.scss'

interface IProps {
  movie: IMovie
}

export const MoviesCarouselSlide = ({ movie }: IProps) => {
  return (
    <Link href={`/movie/${movie.slug}`} className={styles.root}>
      <Image
        src={movie.poster}
        alt={movie.title}
        className={styles.poster}
        layout="fill"
      />
      <div className={styles.content}>
        <Title text={movie.title} variant="sm" className={styles.title} />
      </div>
    </Link>
  )
}
