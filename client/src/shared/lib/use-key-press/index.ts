import { useEffect } from 'react'

export const useKeyPress = (
  key: string,
  action: VoidFunction,
  enabled: boolean
) => {
  useEffect(() => {
    const onKeyPress = (e: KeyboardEvent) => {
      if (e.key === key && enabled) {
        action()
      }
    }

    window.addEventListener('keypress', onKeyPress)

    return () => {
      window.removeEventListener('keypress', onKeyPress)
    }
  }, [key, action, enabled])
}
