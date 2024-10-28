
import Profile from '../../components/profile/Profile.tsx'
import PublicLayout from '../../layouts/PublicLayout'

const ProfilePage = () => {
  return (
    <PublicLayout>
    <div className="py-10 h-auto">
      <Profile />
    </div>
  </PublicLayout>
  )
}

export default ProfilePage
