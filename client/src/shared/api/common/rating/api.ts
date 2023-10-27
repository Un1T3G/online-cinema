import { commonInstance } from '../config'

import { IRatingResponse, IRatingUpdateDto } from './types'

export const rating = {
  updateRating({ movieId, newValue }: IRatingUpdateDto) {
    return commonInstance.post<IRatingResponse>('/ratings', {
      rating: {
        movieId,
        value: newValue,
      },
    })
  },

  getRatingByMovieId(movieId: number) {
    return commonInstance.get<IRatingResponse>(`/ratings/${movieId}`)
  },
}
