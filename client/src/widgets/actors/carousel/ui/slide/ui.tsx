import Image from 'next/image'
import Link from 'next/link'
import { IActor } from 'shared/api'
import { Title } from 'shared/ui/title'

import styles from './style.module.scss'

interface IProps {
  actor: IActor
}

export const ActorsCarouselSlide = ({ actor }: IProps) => {
  return (
    <Link href={`/actor/${actor.slug}`} className={styles.root}>
      <Image
        src={actor.photo}
        alt={actor.name}
        className={styles.poster}
        layout="fill"
      />
      <div className={styles.content}>
        <span>+{actor.countMovies} movies</span>
        <Title text={actor.name} variant="sm" className={styles.title} />
      </div>
    </Link>
  )
}
