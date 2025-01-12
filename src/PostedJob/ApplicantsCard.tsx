import { TalentsData } from "../Data/TalentData"
import TalentCard from "../FindTalent/TalentCard"
interface Invited{
    invited:boolean
}
const ApplicantCards = ({invited}:Invited)=>{
    return <div>
        <div className="flex flex-wrap gap-5 mt-2">
                {
                    TalentsData.map((item, index) => {
                        return (
                            <TalentCard key={index} talentsDetails={item} posted={true} invited={invited}/>
                        )
                    })
                }
            </div>
    </div>
}

export default ApplicantCards;