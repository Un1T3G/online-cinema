import Image from 'next/image'
import { useRouter } from 'next/router'
import { IMovie } from 'shared/api'
import { Button } from 'shared/ui/button'

import styles from './style.module.scss'

interface IProps {
  movie: IMovie
}

export const HeroSlide = ({ movie }: IProps) => {
  const router = useRouter()

  const handleOnClick = () => {
    router.push(`/movie/${movie.slug}`)
  }

  return (
    <div className={styles.root}>
      <Image
        src={movie.bigPoster}
        alt={movie.title}
        className={styles.poster}
        layout="fill"
      />
      <div className={styles.content}>
        <div>
          <h1 className={styles.title}>{movie.title}</h1>
          <span className={styles.genres}>
            {movie.genres.map((x) => x.name).join(', ')}
          </span>
          <Button onClick={handleOnClick} className={styles.button}>
            Watch
          </Button>
        </div>
      </div>
    </div>
  )
}
