import { IParameters } from 'shared/api'

export const displayMovieParameters = (parameters: IParameters) => {
  return `${parameters.year}  ·  ${parameters.country}  ·  ${parameters.duration}min`
}
