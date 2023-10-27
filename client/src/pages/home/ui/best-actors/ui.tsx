import { IActor } from 'shared/api'
import { ActorsCarousel } from 'widgets/actors'

interface IProps {
  actors: IActor[]
}

export const BestActors = ({ actors }: IProps) => {
  return <ActorsCarousel title="Best actors" actors={actors} />
}
