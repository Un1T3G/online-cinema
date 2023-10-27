import { Icon } from '../icon'
import { Slider } from '../slider/ui'
import clsx from 'clsx'

import { displayTime } from './lib/display-time'
import { useVideoPlayer } from './lib/use-video-player'
import styles from './style.module.scss'

interface IProps {
  url: string
  className?: string
}

export const VideoPlayer = ({ url, className }: IProps) => {
  const { refs, video, actions, props } = useVideoPlayer({ url })

  const { rootRef, videoRef } = refs

  const { currentTime, duration, isPlaying } = video

  const { revert, forward, toggle, fullscreen } = actions

  const { slider } = props

  return (
    <div ref={rootRef} className={clsx(styles.root, className)}>
      <video ref={videoRef} src={url} controls={false} />
      <div>
        <Slider {...slider} />
        <div className={styles.row}>
          <div>
            <button className={styles.button} onClick={revert}>
              <Icon type="MdReplay10" />
            </button>
            <button className={styles.button} onClick={toggle}>
              <Icon type={isPlaying ? 'MdPause' : 'MdPlayArrow'} />
            </button>
            <button className={styles.button} onClick={forward}>
              <Icon type="MdForward10" />
            </button>
            <div>
              <span>{displayTime(currentTime)}</span>
              <span>/</span>
              <span>{displayTime(duration)}</span>
            </div>
          </div>
          <button className={styles.button} onClick={fullscreen}>
            <Icon type="MdFullscreen" />
          </button>
        </div>
      </div>
    </div>
  )
}
