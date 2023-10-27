import { useRef, useState } from 'react'
import { IMovie } from 'shared/api'
import { Icon } from 'shared/ui/icon'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { Autoplay, EffectFade, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { HeroSlide } from './slide/ui'
import styles from './style.module.scss'

interface IProps {
  movies: IMovie[]
}

export const Hero = ({ movies }: IProps) => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null)
  const navigationNextRef = useRef<HTMLButtonElement>(null)

  return (
    <Swiper
      slidesPerView={1}
      className={styles.root}
      modules={[Autoplay, EffectFade, Navigation]}
      autoplay={true}
      navigation={true}
      effect="fade"
      uniqueNavElements={true}
      onBeforeInit={(swiper: any) => {
        swiper.params.navigation.prevEl = navigationPrevRef.current!
        swiper.params.navigation.nextEl = navigationNextRef.current!
      }}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <HeroSlide movie={movie} />
        </SwiperSlide>
      ))}
      <div className={styles.navigation}>
        <button ref={navigationPrevRef} className={styles.navigation__button}>
          <Icon type="MdChevronLeft" />
        </button>
        <button ref={navigationNextRef} className={styles.navigation__button}>
          <Icon type="MdChevronRight" />
        </button>
      </div>
    </Swiper>
  )
}
