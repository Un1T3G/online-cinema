import clsx from 'clsx'

import { useSlider } from './lib/use-slider'
import styles from './style.module.scss'

interface IProps {
  value: number
  onBeginChange?: VoidFunction
  onChange: (value: number) => void
  onChangeCommitted?: VoidFunction
  minValue?: number
  maxValue?: number
  className?: string
}

export const Slider = ({
  value,
  onBeginChange,
  onChange,
  onChangeCommitted,
  minValue = 0,
  maxValue = 1,
  className,
}: IProps) => {
  const { rootRef, isSliding, sliderValue } = useSlider({
    value,
    onBeginChange,
    onChange,
    onChangeCommitted,
    minValue,
    maxValue,
  })

  return (
    <div ref={rootRef} className={clsx(styles.root, className)}>
      <div
        className={styles.track}
        style={{
          width: `${sliderValue * 100}%`,
        }}
      >
        <div
          className={clsx(styles.thumb, isSliding && styles['thumb-is-active'])}
        ></div>
      </div>
    </div>
  )
}
