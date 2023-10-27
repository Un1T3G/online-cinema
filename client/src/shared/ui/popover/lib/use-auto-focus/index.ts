import { useEffect } from 'react'

interface IProps {
  focus: boolean
  popoverElement: HTMLElement | null
}

export const useAutoFocus = ({ focus, popoverElement }: IProps) => {
  useEffect(() => {
    if (!focus || !popoverElement) {
      return
    }

    popoverElement.focus()
  }, [focus, popoverElement])
}
