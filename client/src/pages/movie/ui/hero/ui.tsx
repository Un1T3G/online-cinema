import { ToggleMovieFavorite } from 'features/movies'
import Image from 'next/image'
import { IActor, IGenre, IParameters } from 'shared/api'
import { displayGenres } from 'shared/lib/display-genres'
import { displayRating } from 'shared/lib/display-rating'
import { Icon } from 'shared/ui/icon'

import { displayActors } from './lib/display-actors'
import { displayMovieParameters } from './lib/display-movie-parameters'
import styles from './style.module.scss'

interface IProps {
  id: number
  title: string
  bigPoster: string
  parameters: IParameters
  genres: IGenre[]
  actors: Omit<IActor, 'countMovies'>[]
  rating: number
}

export const Hero = ({
  id,
  title,
  bigPoster,
  parameters,
  genres,
  actors,
  rating,
}: IProps) => {
  return (
    <div className={styles.root}>
      <Image
        src={bigPoster}
        alt={title}
        layout="fill"
        className={styles.poster}
      />
      <div className={styles.content}>
        <div>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.row}>
            <div>
              <span className={styles.parameters}>
                {displayMovieParameters(parameters)}
              </span>
              <div className={styles.genres}>
                <span>Genres:</span>
                <div>{displayGenres(genres)}</div>
              </div>
              <div className={styles.actors}>
                <span>Actors:</span>
                <div>{displayActors(actors)}</div>
              </div>
            </div>
            <div>
              <ToggleMovieFavorite movieId={id} />
              <div className={styles.rating}>
                <span>{displayRating(rating)}</span>
                <Icon type="MdStar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
