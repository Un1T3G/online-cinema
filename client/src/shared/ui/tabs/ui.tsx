import clsx from 'clsx'
import { PropsWithChildren } from 'react'

import { useTabsContext } from './lib/use-tab-context'
import { TabsContext } from './model'
import styles from './style.module.scss'

interface ITabsProps<T> extends PropsWithChildren {
  value: T
  onChange: (value: T) => void
  className?: string
}

export const Tabs = <T,>({
  value,
  onChange,
  className,
  children,
}: ITabsProps<T>) => {
  const providerValue = {
    value,
    onChange,
  }

  return (
    <TabsContext.Provider value={providerValue}>
      <div className={clsx(styles.root, className)}>{children}</div>
    </TabsContext.Provider>
  )
}

interface ITabsItemProps<T> extends PropsWithChildren {
  value: T
  className?: string
}

Tabs.Item = <T,>({ children, value, className }: ITabsItemProps<T>) => {
  const { value: selectedValue, onChange } = useTabsContext()

  const handleOnClick = () => {
    onChange(value)
  }

  const isActive = selectedValue === value

  return (
    <button
      onClick={handleOnClick}
      className={clsx(styles.item, isActive && styles.active, className)}
    >
      {children}
    </button>
  )
}
