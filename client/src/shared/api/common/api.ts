import { actorsConfig } from './actors'
import { authConfig } from './auth'
import { filesConfig } from './files'
import { genresConfig } from './genres'
import { moviesConfig } from './movies'
import { ratingConfig } from './rating'
import { usersConfig } from './users'

export const commonApi = {
  auth: authConfig,
  files: filesConfig,
  users: usersConfig,
  movies: moviesConfig,
  genres: genresConfig,
  actors: actorsConfig,
  rating: ratingConfig,
}
