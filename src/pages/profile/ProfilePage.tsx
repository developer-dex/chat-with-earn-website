
import Profile from '../../components/profile/Profile.tsx'
import PublicLayout from '../../layouts/PublicLayout'

const ProfilePage = () => {
  return (
    <PublicLayout>
    <div className="pt-12 pb-24">
      <Profile />
    </div>
  </PublicLayout>
  )
}

export default ProfilePage
