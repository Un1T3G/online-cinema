export interface IActor {
  id: number
  name: string
  photo: string
  slug: string
  countMovies: number
}

export interface IActorResponse {
  actor: IActor
}

export interface IActorListResponse {
  actors: IActor[]
}

export interface IActorUpdateDto extends Omit<IActor, 'id' | 'countMovies'> {}
