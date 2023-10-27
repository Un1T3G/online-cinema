export interface IGenre {
  id: number
  name: string
  slug: string
  description: string
  icon: string
  createdAt: string
}

export interface ICollection {
  id: number
  image: string
  title: string
  slug: string
}

export interface IGenreResponse {
  genre: IGenre
}

export interface IGenreListResponse {
  genres: IGenre[]
  count: number
}

export interface ICollectionListResponse {
  collections: ICollection[]
}

export interface IGenreUpdateDto extends Omit<IGenre, 'id' | 'createdAt'> {}
