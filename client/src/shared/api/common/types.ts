export * from './actors/types'
export * from './auth/types'
export * from './files/types'
export * from './genres/types'
export * from './movies/types'
export * from './rating/types'
export * from './users/types'

export interface IFeed {
  limit?: number
  offset?: number
}

export interface IFeedWithSearchTerm extends IFeed {
  searchTerm?: string
}
