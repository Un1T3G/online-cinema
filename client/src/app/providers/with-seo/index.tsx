import { NextSeo } from 'next-seo'
import { ComponentType } from 'react'

export const withSeo =
  <T extends object>(Component: ComponentType<T>) =>
  (props: T) => {
    return (
      <>
        <NextSeo nofollow noindex title="Online Cinema" />
        <Component {...props} />
      </>
    )
  }
