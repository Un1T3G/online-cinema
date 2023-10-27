import { IActor, IMovie } from 'shared/api'

export interface IHomePageProps {
  heroMovies: IMovie[]
  trendingMovies: IMovie[]
  bestActors: IActor[]
}
