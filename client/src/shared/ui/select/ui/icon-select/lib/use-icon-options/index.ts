import { useEffect, useState } from 'react'
import { TIconType } from 'shared/ui/icon'
import { ISelectOption } from 'shared/ui/select/types'

export const useIconOptions = () => {
  const [isPending, setIsPending] = useState(false)
  const [options, setOptions] = useState<ISelectOption<TIconType>[]>([])

  useEffect(() => {
    ;(async () => {
      setIsPending(true)

      const icons = await import('react-icons/md')

      const options = Object.keys(icons).map((key) => ({
        label: key,
        value: key as TIconType,
      }))
      setOptions(options)

      setIsPending(false)
    })()
  }, [])

  return {
    isPending,
    options,
  }
}
