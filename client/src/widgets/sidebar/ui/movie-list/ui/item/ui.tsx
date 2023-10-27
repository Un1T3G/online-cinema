import Image from 'next/image'
import Link from 'next/link'
import { IMovie } from 'shared/api'
import { displayGenres } from 'shared/lib/display-genres'
import { displayRating } from 'shared/lib/display-rating'
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
      <div className={styles.content}>
        <Title variant="sm" text={movie.title} className={styles.title} />
        <span className={styles.genres}>{displayGenres(movie.genres)}</span>
        <div className={styles.rating}>
          <Icon type="MdStar" />
          <span>{displayRating(movie.rating)}</span>
        </div>
      </div>
    </Link>
  )
}
