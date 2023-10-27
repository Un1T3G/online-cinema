import { useActors } from 'entities/actors'
import { useMemo } from 'react'

export const useActorsOptions = () => {
  const { data, isLoading } = useActors()

  const options = useMemo(
    () =>
      data?.data.actors.map((actor) => ({
        label: actor.name,
        value: actor.id,
      })),
    [data]
  )

  return {
    isActorsLoading: isLoading,
    actorsOptions: options || [],
  }
}
