'use client'

import { Icon } from '../icon'
import clsx from 'clsx'
import { range } from 'shared/lib/math'

import { useRating } from './lib/use-rating'
import styles from './style.module.scss'

interface IProps {
  value: number
  onChange: (value: number) => void
  starCount?: number
  className?: string
}

export const Rating = ({
  value,
  onChange,
  starCount = 5,
  className,
}: IProps) => {
  const { rating, setIsHovering, setHoverValue } = useRating({ value })

  const onMouseEnter = () => {
    setIsHovering(true)
  }

  const onMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <ul
      className={clsx(styles.root, className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {range(starCount).map((x) => (
        <li
          key={x}
          className={clsx(
            styles.item,
            x + 1 <= rating && styles['item-is-active']
          )}
          onClick={() => onChange(x + 1)}
          onMouseEnter={() => setHoverValue(x + 1)}
        >
          <Icon type={x + 1 <= rating ? 'MdStar' : 'MdStarBorder'} />
        </li>
      ))}
    </ul>
  )
}
