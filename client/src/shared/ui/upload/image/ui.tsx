import clsx from 'clsx'
import Image from 'next/image'
import { UploadButton } from 'shared/ui/button/'
import { Skeleton } from 'shared/ui/skeleton'

import styles from './style.module.scss'

interface IProps {
  image?: string
  onChange: (...event: any[]) => void
  label: string
  error?: string
  isLoading?: boolean
  className?: string
}

export const ImageUpload = ({
  label,
  onChange,
  image,
  error,
  isLoading = false,
  className,
}: IProps) => {
  return (
    <div className={clsx(styles.root, className)}>
      <div>
        <span className={styles.label}>{label}</span>
        <UploadButton type="image" onChange={onChange}>
          Choose file
        </UploadButton>
        {error && <span className={styles.error}>{error}</span>}
      </div>
      {isLoading ? (
        <Skeleton className={styles.skeleton} />
      ) : (
        <div>
          {image && <Image src={image} alt="" layout="fill" unoptimized />}
        </div>
      )}
    </div>
  )
}
