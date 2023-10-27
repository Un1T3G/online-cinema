import { NextSeo } from 'next-seo'
import { Button } from 'shared/ui/button'
import { Title } from 'shared/ui/title'
import { AuthField } from 'widgets/auth'

import { useProfileUpdateForm } from './lib/use-profile-update-form'
import styles from './style.module.scss'

export const ProfilePage = () => {
  const { onSubmit, register, formState } = useProfileUpdateForm()

  return (
    <>
      <NextSeo title="Profile" />
      <div className={styles.root}>
        <form onSubmit={onSubmit} className={styles.card}>
          <Title variant="xl" text="Profile" className="mb-3" />
          <AuthField register={register} formState={formState} />
          <Button type="button" className={styles.button}>
            Update
          </Button>
        </form>
      </div>
    </>
  )
}
