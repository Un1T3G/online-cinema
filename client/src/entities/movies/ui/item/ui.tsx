import Image from 'next/image'
import Link from 'next/link'
import { IMovie } from 'shared/api'
import { Title } from 'shared/ui/title'

import styles from './style.module.scss'

interface IProps {
  movie: IMovie
  renderActionButton?: JSX.Element
}

export const MovieItem = ({ movie, renderActionButton }: IProps) => {
  return (
    <Link href={`/movie/${movie.slug}`} className={styles.root}>
      <Image
        src={movie.bigPoster}
        alt={movie.title}
        layout="fill"
        className={styles.poster}
      />
      <div className={styles.content}>
        {renderActionButton}
        <Title variant="sm" text={movie.title} className="z-10" />
      </div>
    </Link>
  )
}
