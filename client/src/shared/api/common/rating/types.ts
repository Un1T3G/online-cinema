export interface IRating {
  value: number
}

export interface IRatingResponse {
  rating: IRating
}

export interface IRatingUpdateDto {
  movieId: number
  newValue: number
}
