import { IMovie } from 'shared/api'
import { Title } from 'shared/ui/title'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { MoviesCarouselSlide } from './slide'
import styles from './style.module.scss'

interface IProps {
  title: string
  movies: IMovie[]
  className?: string
}

export const MoviesCarousel = ({ title, movies, className }: IProps) => {
  return (
    <div className={className}>
      <div className={styles.row}>
        <Title variant="sm" text={title} />
      </div>
      <Swiper
        className={styles.root}
        slidesPerView={5}
        spaceBetween={20}
        autoplay={true}
        modules={[Autoplay]}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MoviesCarouselSlide movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
