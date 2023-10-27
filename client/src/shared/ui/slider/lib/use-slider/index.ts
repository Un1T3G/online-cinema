import { useEffect, useRef, useState } from 'react'
import { getElementCoordinate } from 'shared/lib/get-element-coordinate'
import { useEvent } from 'shared/lib/use-event'

import { getNormalizedValue } from './lib/get-normalized-value'

interface IProps {
  value: number
  onBeginChange?: VoidFunction
  onChange: (value: number) => void
  onChangeCommitted?: VoidFunction
  minValue: number
  maxValue: number
}

export const useSlider = ({
  value,
  onBeginChange,
  onChange,
  onChangeCommitted,
  minValue,
  maxValue,
}: IProps) => {
  const rootRef = useRef<HTMLDivElement>(null)

  const [isSliding, setIsSliding] = useState(false)
  const [sliderValue, setSliderValue] = useState(0)

  const moveSlider = useEvent(
    (pageX: number, pageY: number, costil: boolean = true) => {
      if (!isSliding && costil) {
        return
      }

      const node = rootRef.current

      if (!node) {
        return
      }

      const { left, right } = getElementCoordinate(node)

      const value = getNormalizedValue(left, right, pageX)

      setSliderValue(value)

      onChange(minValue + (maxValue - minValue) * value)
    }
  )

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      moveSlider(e.pageX, e.pageY)
    }

    const onMouseUp = () => {
      setIsSliding(false)

      if (onChangeCommitted) {
        onChangeCommitted()
      }
    }

    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0]

      if (!touch) {
        return
      }

      moveSlider(touch.pageX, touch.pageY)
    }

    const onTouchEnd = () => {
      setIsSliding(false)

      if (onChangeCommitted) {
        onChangeCommitted()
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('touchmove', onTouchMove)
    window.addEventListener('touchend', onTouchEnd)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [onChangeCommitted])

  useEffect(() => {
    const root = rootRef.current

    if (!root) {
      return
    }

    const onMouseDown = (e: MouseEvent) => {
      setIsSliding(true)
      moveSlider(e.pageX, e.pageY, false)
      if (onBeginChange) {
        onBeginChange()
      }
    }

    const onTouchStart = (e: TouchEvent) => {
      setIsSliding(true)

      const touch = e.touches[0]

      if (!touch) {
        return
      }

      moveSlider(touch.pageX, touch.pageY, false)

      if (onBeginChange) {
        onBeginChange()
      }
    }

    root.addEventListener('mousedown', onMouseDown)
    root.addEventListener('touchstart', onTouchStart)

    return () => {
      root.removeEventListener('mousedown', onMouseDown)
      root.removeEventListener('touchstart', onTouchStart)
    }
  }, [rootRef, onBeginChange])

  useEffect(() => {
    if (isSliding) {
      return
    }

    setSliderValue(getNormalizedValue(minValue, maxValue, value))
  }, [minValue, maxValue, value, isSliding])

  return {
    rootRef,
    isSliding,
    sliderValue,
  }
}
