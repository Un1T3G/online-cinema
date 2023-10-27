import { ISelectOption } from '../../types'
import { SelectBase } from '../select-base'
import List from 'rc-virtual-list'
import { useMemo, useRef } from 'react'
import { Icon, TIconType } from 'shared/ui/icon'

import { useIconOptions } from './lib/use-icon-options'
import styles from './style.module.scss'

interface IProps {
  value: ISelectOption<TIconType>
  onChange: (values: ISelectOption<TIconType>[]) => void
  isLoading?: boolean
  error?: string
  className?: string
}

export const IconSelect = ({
  value,
  onChange,
  isLoading,
  error,
  className,
}: IProps) => {
  const values = useMemo(() => (value ? [value] : []), [value])

  const { isPending, options } = useIconOptions()

  const parentRef = useRef<HTMLDivElement>(null)

  return (
    <SelectBase
      error={error}
      isLoading={isLoading || isPending}
      placeholder="Select Icon"
      options={options}
      values={values}
      onChange={onChange}
      className={className}
      isComboSelect={false}
      renderSelectedLabel={({ values }) => {
        const [item] = values

        return (
          <div className={styles.label}>
            <Icon type={item.value} />
            <span>{item.label}</span>
          </div>
        )
      }}
      renderSelectionList={({ options, toggleSelection }) => (
        <div ref={parentRef}>
          <List
            data={options}
            itemKey="id"
            height={300}
            itemHeight={35}
            role="ul"
            className={styles.list}
          >
            {(item) => (
              <li
                key={item.value}
                onClick={() => {
                  console.log(item)
                  toggleSelection(item)
                }}
                className={styles['list__item']}
              >
                <div>
                  <Icon type={item.value} wrapWithDiv />
                  <span>{item.label}</span>
                </div>
              </li>
            )}
          </List>
        </div>
      )}
    />
  )
}
