import { TalentsData } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const RecommendedTalent = ()=>{
    return (
        <div>
            <div className="text-xl font-bold mb-5 text-mine-shaft-100">Recommended Talent</div>
            <div className="flex flex-col flex-wrap gap-3">
                {TalentsData.map((d,index)=>(
                   index<4 && <TalentCard key={index} talentsDetails={d} />
                ))}
            </div>
        </div>
    )
}
export default RecommendedTalent;