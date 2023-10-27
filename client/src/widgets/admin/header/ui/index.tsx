import { SearchBar } from './search-bar'
import styles from './style.module.scss'

interface IProps {
  searchTerm: string
  onChangeSearchTerm: (value: string) => void
  renderActionButton?: JSX.Element
}

export const AdminHeader = ({
  searchTerm,
  onChangeSearchTerm,
  renderActionButton,
}: IProps) => {
  return (
    <div className={styles.root}>
      <SearchBar
        searchTerm={searchTerm}
        onChangeSearchTerm={onChangeSearchTerm}
      />
      {renderActionButton}
    </div>
  )
}
