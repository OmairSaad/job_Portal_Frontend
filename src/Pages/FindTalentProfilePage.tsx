import { Button } from "@mantine/core";
import { IconArrowLeftToArc } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Profile from "../TalentProfile/Profile";
import profile from "../Data/profile";
import RecommendedTalent from "../TalentProfile/RecommendedTalent";
import { useEffect } from "react";

const TalentProfile = () => {
     useEffect(()=>{
                window.scroll({
                    top:0,
                    behavior:"smooth"
                })
            })
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['Exo 2'] p-4 pb-16">
            <Link to="/find-talent" className="my-4 inline-block">
                <Button variant="light" leftSection={<IconArrowLeftToArc size={20} />} color="bright-sun.3" >Back</Button>
            </Link>
            <div className="flex gap-5">
            <Profile profile ={profile}/>
            <RecommendedTalent />
            </div>
        </div>
    )
}
export default TalentProfile;