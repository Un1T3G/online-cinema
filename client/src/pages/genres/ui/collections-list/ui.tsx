import { CollectionItem } from 'entities/genres'
import { ICollection } from 'shared/api'

import styles from './style.module.scss'

interface IProps {
  collections: ICollection[]
}

export const CollectionsList = ({ collections }: IProps) => {
  return (
    <div className={styles.root}>
      {collections.map((collection) => (
        <CollectionItem key={collection.id} collection={collection} />
      ))}
    </div>
  )
}
