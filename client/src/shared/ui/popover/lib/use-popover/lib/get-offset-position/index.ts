import { getElementCoordinate } from 'shared/lib/get-element-coordinate'
import { TAlignment } from 'shared/ui/popover/types'

export const getOffsetPosition = (
  anchorElement: HTMLElement,
  popoverElement: HTMLElement,
  alignment: TAlignment,
  offset: number
) => {
  const {
    top: aTop,
    bottom: aBottom,
    left: aLeft,
    right: aRight,
  } = getElementCoordinate(anchorElement)

  const {
    top: pTop,
    bottom: pBottom,
    left: pLeft,
    right: pRight,
  } = getElementCoordinate(popoverElement)

  const aWidth = aRight - aLeft
  const aHeight = aBottom - aTop

  const pWidth = pRight - pLeft
  const pHeight = pBottom - pTop

  const positions: Record<TAlignment, { x: number; y: number }> = {
    topLeft: {
      x: aLeft,
      y: aTop - offset - pHeight,
    },
    topCenter: {
      x: aLeft + aWidth / 2 - pWidth / 2,
      y: aTop - offset - pHeight,
    },
    topRight: {
      x: aRight - pWidth,
      y: aTop - offset - pHeight,
    },
    leftTop: {
      x: aLeft - pWidth - offset,
      y: aTop,
    },
    leftCenter: {
      x: aLeft - pWidth - offset,
      y: aTop + aHeight / 2 - pHeight / 2,
    },
    leftBottom: {
      x: aLeft - pWidth - offset,
      y: aBottom - pHeight,
    },
    bottomLeft: {
      x: aLeft,
      y: aBottom + offset,
    },
    bottomCenter: {
      x: aLeft + aWidth / 2 - pWidth / 2,
      y: aBottom + offset,
    },
    bottomRight: {
      x: aRight - pWidth,
      y: aBottom + offset,
    },
    rightTop: {
      x: aRight + offset,
      y: aTop,
    },
    rightCenter: {
      x: aRight + offset,
      y: aTop + aHeight / 2 - pHeight / 2,
    },
    rightBottom: {
      x: aRight + offset,
      y: aBottom - pHeight,
    },
  }

  return positions[alignment]
}
