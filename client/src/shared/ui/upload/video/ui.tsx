import { UploadButton } from 'shared/ui/button/'

import styles from './style.module.scss'

interface IProps {
  label: string
  error?: string
  onChange: (...event: any[]) => void
}

export const VideoUpload = ({ label, error, onChange }: IProps) => {
  return (
    <div className={styles.root}>
      <span className={styles.label}>{label}</span>
      <UploadButton type="video" onChange={onChange}>
        Choose file
      </UploadButton>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}
