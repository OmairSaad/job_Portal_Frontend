import { Button } from "@mantine/core";
import { IconArrowLeftToArc } from "@tabler/icons-react";
import { Link, useParams } from "react-router-dom";
import Profile from "../Components/TalentProfile/Profile";
import profil from "../Data/profile";
import RecommendedTalent from "../Components/TalentProfile/RecommendedTalent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store";
import { getProfileById } from "../Slices/JobSlice";

const TalentProfile = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const {profile} = useSelector((state: RootState) => state.jobs);
    useEffect(() => {
        dispatch(getProfileById(id))
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
        console.log(id);
    },[id])
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['Exo 2'] p-4 pb-16">
            <Link to="/find-talent" className="my-4 inline-block">
                <Button variant="light" leftSection={<IconArrowLeftToArc size={20} />} color="bright-sun.3" >Back</Button>
            </Link>
            <div className="flex gap-5">
                <Profile profile={profile} />
                <RecommendedTalent />
            </div>
        </div>
    )
}
export default TalentProfile;