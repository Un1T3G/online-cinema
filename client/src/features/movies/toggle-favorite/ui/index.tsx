import clsx from 'clsx'
import { MouseEvent } from 'react'
import { Icon } from 'shared/ui/icon'
import { Spinner } from 'shared/ui/spinner'

import { useToggleFavorite } from './lib/use-toggle-favorite'
import styles from './style.module.scss'

interface IProps {
  movieId: number
  className?: string
}

export const ToggleMovieFavorite = ({ movieId, className }: IProps) => {
  const { isFavorite, isLoading, toggleFavorite } = useToggleFavorite(movieId)

  const handleOnClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault()
    toggleFavorite()
  }

  return (
    <button
      onClick={handleOnClick}
      className={clsx(styles.root, className)}
      disabled={isLoading}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <Icon
          type={isFavorite ? 'MdFavorite' : 'MdFavoriteBorder'}
          wrapWithDiv
        />
      )}
    </button>
  )
}
