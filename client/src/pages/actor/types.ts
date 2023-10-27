import { IActor, IMovie } from 'shared/api'

export interface IActorPageProps {
  actor: IActor
  movies: IMovie[]
}
