import { ChangeEvent } from 'react'
import { Icon } from 'shared/ui/icon'
import { Input } from 'shared/ui/input'

import styles from './style.module.scss'

interface IProps {
  searchTerm: string
  onChangeSearchTerm: (value: string) => void
}

export const SearchBar = ({ searchTerm, onChangeSearchTerm }: IProps) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeSearchTerm(e.target.value)
  }

  return (
    <Input>
      <Input.FieldContainer className={styles.root}>
        <Input.LeftElement>
          <Icon type="MdSearch" />
        </Input.LeftElement>
        <Input.Field
          variant="rounded"
          value={searchTerm}
          onChange={handleOnChange}
          placeholder="Search..."
        />
      </Input.FieldContainer>
    </Input>
  )
}
