import { useSelection } from '../../lib/use-selection'
import { ISelectOption } from '../../types'
import { SelectBase } from '../select-base'
import clsx from 'clsx'
import { useRef, useState } from 'react'
import { useEvent } from 'shared/lib/use-event'
import { Icon } from 'shared/ui/icon'
import { Popover } from 'shared/ui/popover'
import { Spinner } from 'shared/ui/spinner/ui'

import styles from './style.module.scss'

interface IProps<T> {
  placeholder: string
  values: ISelectOption<T>[]
  options: ISelectOption<T>[]
  onChange: (values: ISelectOption<T>[]) => void
  isLoading?: boolean
  error?: string
  className?: string
}

export const ComboBox = <T,>(props: IProps<T>) => {
  return (
    <SelectBase
      {...props}
      renderSelectedLabel={({ values, removeSelection }) => (
        <ul className={styles['selected-list']}>
          {values.map((option) => (
            <li key={option.label} className={styles['selected-list__item']}>
              {option.label}
              <button type="button" onClick={() => removeSelection(option)}>
                <Icon type="MdClose" />
              </button>
            </li>
          ))}
        </ul>
      )}
      renderSelectionList={({ options, toggleSelection, isSelected }) => (
        <ul className={styles.list}>
          {options.map((option) => (
            <li
              key={option.label}
              className={styles['list__item']}
              onClick={() => toggleSelection(option)}
            >
              {option.label}
              {isSelected(option) && <Icon type="MdDone" />}
            </li>
          ))}
        </ul>
      )}
    />
  )
}
