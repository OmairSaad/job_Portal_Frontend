import { useParams } from "react-router-dom";
import { TalentsData } from "../../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store";
import { useEffect } from "react";
import { getAllProfiles } from "../../Slices/JobSlice";
import { UserProfile } from "../../Interfaces/UserProfile";

const RecommendedTalent = () => {
    const { id } = useParams();
    const dispach = useDispatch();
    const { profiles } = useSelector((state: RootState) => state.jobs);

    useEffect(() => {
        dispach(getAllProfiles());
    }, [id])

    function shuffleArray(arr: UserProfile[]) {
        const shuffledArray = [...arr];   // arr can not modify coz it is from react-state
 
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Get random index
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
        }
        return shuffledArray;
    }
    return (
        <div>
            <div className="text-xl font-bold mb-5 text-mine-shaft-100">Recommended Talent</div>
            <div className="flex flex-col flex-wrap gap-3">
                {shuffleArray(profiles).map((profile: UserProfile, index) => (
                    index < 4 && profile.id != Number(id) && <TalentCard invited={false} key={index} talentsDetails={{ applicantId: 0, applicationStatus: "APPLIED", cover: "", email: "", interviewDate: "", interviewTime: "", name: "", phone: "", profile: profile, resume: "", timestamp: "", website: "" }} posted={false} />
                ))}
            </div>
        </div>
    )
}
export default RecommendedTalent;