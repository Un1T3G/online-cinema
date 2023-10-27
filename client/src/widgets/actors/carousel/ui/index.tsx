import { IActor } from 'shared/api'
import { Title } from 'shared/ui/title'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ActorsCarouselSlide } from './slide/'
import styles from './style.module.scss'

interface IProps {
  title: string
  actors: IActor[]
  className?: string
}

export const ActorsCarousel = ({ title, actors, className }: IProps) => {
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
        {actors.map((actor) => (
          <SwiperSlide key={actor.id}>
            <ActorsCarouselSlide actor={actor} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
