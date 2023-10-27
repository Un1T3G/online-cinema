import { VideoPlayer } from 'shared/ui/video-player'

import styles from './style.module.scss'

interface IProps {
  videoUrl: string
}

export const Player = ({ videoUrl }: IProps) => {
  return <VideoPlayer url={videoUrl} className={styles.root} />
}
