import { AdminNavigation } from '..'
import { NextSeo } from 'next-seo'
import { PropsWithChildren } from 'react'
import { Title } from 'shared/ui/title'

interface IProps extends PropsWithChildren {
  title: string
  titleClassName?: string
}

export const AdminLayout = ({ title, children, titleClassName }: IProps) => {
  return (
    <>
      <NextSeo title={title} />
      <AdminNavigation />
      <Title
        text={title}
        variant="lg"
        className={titleClassName ? titleClassName : 'mb-5'}
      />
      {children}
    </>
  )
}
