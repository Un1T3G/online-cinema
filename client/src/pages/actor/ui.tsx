import { Catalog } from 'widgets/catalog/ui'

import { IActorPageProps } from './types'

export const ActorPage = ({ actor, movies }: IActorPageProps) => {
  return (
    <Catalog
      title={actor.name}

      movies={movies}
    />
  )
}
