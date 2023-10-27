import { Button } from 'shared/ui/button'
import { Title } from 'shared/ui/title'
import { AuthField } from 'widgets/auth'

import { useAuthForm } from './lib/use-auth-form'
import { useAuthRedirect } from './lib/use-auth-redirect'
import styles from './style.module.scss'

export const AuthPage = () => {
  const { formState, registerForm, onSubmit, changeType } = useAuthForm()

  useAuthRedirect()

  return (
    <div className={styles.page}>
      <form className={styles.card} onSubmit={onSubmit}>
        <Title text="Auth" className="mb-5" />
        <AuthField
          formState={formState}
          register={registerForm}
          requiredPassword
        />
        <div className={styles.actions}>
          <Button
            type="submit"
            className={styles['actions__left-button']}
            variant="primary"
            onClick={changeType('login')}
          >
            Login
          </Button>
          <Button
            type="submit"
            className={styles['actions__right-button']}
            variant="primary-darken"
            onClick={changeType('register')}
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  )
}
