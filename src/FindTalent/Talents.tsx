import { TalentsData } from "../Data/TalentData";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";
const Talents = () => {
    return (
        <div className="px-5 pb-20">
            <div className="text-2xl font-semibold text-mine-shaft-50 flex justify-between items-center">
                Talents
                <Sort />
            </div>
            <div className="flex flex-wrap gap-5 mt-10 justify-between">
                {
                    TalentsData.map((item,index)=>{
                        return(
                            <TalentCard key={index} talentsDetails={item} posted={false} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Talents;