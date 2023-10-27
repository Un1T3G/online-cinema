import { useMovieIncrementOpened } from 'features/movies'
import { useEffect, useRef } from 'react'

export const useMovieOpenedIncrement = (slug: string) => {
  const { mutate } = useMovieIncrementOpened()

  const isIncremented = useRef(false)

  useEffect(() => {
    if (isIncremented.current) {
      return
    }

    mutate({ slug })

    isIncremented.current = false
  }, [])
}
