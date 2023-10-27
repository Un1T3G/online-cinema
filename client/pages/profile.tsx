import { ProfilePage as ProfileScreen } from 'pages/profile'
import { TNextPageAuth } from 'shared/types'

const ProfilePage: TNextPageAuth = () => {
  return <ProfileScreen />
}

ProfilePage.isOnlyUser = true

export default ProfilePage
