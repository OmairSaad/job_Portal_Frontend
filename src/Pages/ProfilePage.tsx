import profile from "../Data/profile";
import Profile from "../Profile/Profile";

const ProfilePage = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['Exo 2'] p-4">
            <Profile profile = {profile}/>
        </div>
    )
}

export default ProfilePage;