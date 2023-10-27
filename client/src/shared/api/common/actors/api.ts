import { IActorListResponse } from '.'
import { commonInstance } from '../config'
import { IActorResponse, IActorUpdateDto, IFeed } from 'shared/api/common/types'

export const actors = {
  getAllActors(feed?: IFeed) {
    return commonInstance.get<IActorListResponse>('/actors', {
      params: {
        limit: feed?.limit,
        offset: feed?.offset,
      },
    })
  },

  getActorById(id: number) {
    return commonInstance.get<IActorResponse>(`/actors/${id}`)
  },

  getActorBySlug(slug: string) {
    return commonInstance.get<IActorResponse>(`/actors/by-slug/${slug}`)
  },

  createActor() {
    return commonInstance.post<IActorResponse>('/actors')
  },

  deleteActorById(id: number) {
    return commonInstance.delete<void>(`/actors/${id}`)
  },

  updateActor(id: number, actor: IActorUpdateDto) {
    return commonInstance.put<IActorResponse>(`/actors/${id}`, { actor })
  },
}
