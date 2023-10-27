import { TAlignment } from '../../types'
import { useLayoutEffect, useState } from 'react'

import { getOffsetPosition } from './lib/get-offset-position'

interface IProps {
  open: boolean
  offset: number
  anchorElement: HTMLElement
  popoverElement: HTMLElement | null
  alignment: TAlignment
}

export const usePopover = ({
  open,
  offset,
  anchorElement,
  popoverElement,
  alignment,
}: IProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useLayoutEffect(() => {
    if (!open || !popoverElement) {
      return
    }

    const setPopoverPosition = () => {
      const position = getOffsetPosition(
        anchorElement,
        popoverElement,
        alignment,
        offset
      )

      setPosition(position)
    }

    setPopoverPosition()
    window.addEventListener('resize', setPopoverPosition)
    window.addEventListener('scroll', setPopoverPosition)

    return () => {
      window.removeEventListener('resize', setPopoverPosition)
      window.removeEventListener('scroll', setPopoverPosition)
    }
  }, [open, offset, anchorElement, popoverElement, alignment])

  return {
    popoverProps: {
      style: {
        top: `${position.y}px`,
        left: `${position.x}px`,
      },
    },
  }
}
