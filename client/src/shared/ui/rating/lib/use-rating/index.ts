import { useState } from 'react'

interface IProps {
  value: number
}

export const useRating = ({ value }: IProps) => {
  const [isHovering, setIsHovering] = useState(false)
  const [hoverValue, setHoverValue] = useState(0)

  return {
    rating: isHovering ? Math.max(value, hoverValue) : value,
    isHovering,
    hoverValue,
    setIsHovering,
    setHoverValue,
  }
}
