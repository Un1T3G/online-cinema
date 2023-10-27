import { Button } from 'shared/ui/button'

interface IProps {
  redirectUrl: string
  className?: string
}

export const SignInButton = ({ redirectUrl, className }: IProps) => {
  return <Button className={className}>Sign in</Button>
}
