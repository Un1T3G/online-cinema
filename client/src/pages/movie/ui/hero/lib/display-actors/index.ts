import { IActor } from 'shared/api'

export const displayActors = (
  actors: Omit<IActor, 'countMovies'>[],
  separator = ', '
) => {
  return actors.map((actor) => actor.name).join(separator)
}
