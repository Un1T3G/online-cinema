import { useRouter } from 'next/router'
import { Icon } from 'shared/ui/icon'
import { Table } from 'shared/ui/table'

import styles from './style.module.scss'

interface IItem {
  id: number
  items: string[]
}

interface IProps {
  rows: IItem[]
  header: string[]
  onDeleteItem: (id: number) => void
  getEditUrl: (id: number) => string
}

export const AdminTable = <T,>({
  rows,
  header,
  onDeleteItem,
  getEditUrl,
}: IProps) => {
  const deleteItem = (id: number) => {
    return () => {
      onDeleteItem(id)
    }
  }

  const router = useRouter()

  const navigateToEditPage = (id: number) => {
    return () => {
      router.push(getEditUrl(id))
    }
  }

  return (
    <Table header={[...header, 'Actions']} className={styles.root}>
      {rows.map((row) => (
        <Table.Row key={row.id}>
          {row.items.map((item) => (
            <Table.Item key={item}>{item}</Table.Item>
          ))}
          <Table.Item>
            <button className={styles.button} onClick={deleteItem(row.id)}>
              <Icon type="MdDelete" />
            </button>
            <button
              className={styles.button}
              onClick={navigateToEditPage(row.id)}
            >
              <Icon type="MdEdit" />
            </button>
          </Table.Item>
        </Table.Row>
      ))}
    </Table>
  )
}
