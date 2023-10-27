import { BestActors } from './best-actors'
import { Hero } from './hero'
import { TrendingMovies } from './trending-movies'
import { IHomePageProps } from './types'

export const HomePage = ({
  heroMovies,
  trendingMovies,
  bestActors,
}: IHomePageProps) => {
  return (
    <>
      <Hero movies={heroMovies} />
      <TrendingMovies movies={trendingMovies} />
      <BestActors actors={bestActors} />
    </>
  )
}
