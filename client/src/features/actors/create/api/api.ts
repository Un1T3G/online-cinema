import { useMutation } from "react-query"
import { commonApi } from "shared/api"

export const useActorCreate = () => {
  return useMutation(['movie create'], () => commonApi.actors.createActor())
}