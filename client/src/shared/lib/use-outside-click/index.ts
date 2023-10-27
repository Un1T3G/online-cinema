import { RefObject, useEffect } from 'react'

type Handler = (event: MouseEvent) => void

export const useOutsideClick = (
  refs: RefObject<any>[],
  handler: VoidFunction,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown'
): void => {
  useEffect(() => {
    const handle = (event: MouseEvent) => {
      let flag = false

      refs.forEach((e) => {
        const el = e.current
        if (e.current && e.current.contains(event.target as Node)) {
          flag = true
        }
      })

      if (flag === false) {
        handler()
      }
    }

    document.addEventListener('mouseup', handle)

    return () => {
      document.removeEventListener('mouseup', handle)
    }
  }, [refs])
}
