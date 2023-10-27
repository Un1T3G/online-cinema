import Image from 'next/image'
import Link from 'next/link'
import { ICollection } from 'shared/api'
import { Title } from 'shared/ui/title'

import styles from './style.module.scss'

interface IProps {
  collection: ICollection
}

const CollectionImage = ({
  collection: { image, title },
}: {
  collection: ICollection
}) => {
  return <Image alt={title} src={image} layout="fill" draggable={false} />
}

export const CollectionItem = ({ collection }: IProps) => {
  return (
    <Link href={`/genre/${collection.slug}`} className={styles.root}>
      <CollectionImage collection={collection} />
      <div className={styles.content}>
        <Title variant="sm" text={collection.title} />
      </div>
      <div className={`${styles.behind} ${styles.second}`}>
        <CollectionImage collection={collection} />
      </div>
      <div className={`${styles.behind} ${styles.third}`}>
        <CollectionImage collection={collection} />
      </div>
    </Link>
  )
}
