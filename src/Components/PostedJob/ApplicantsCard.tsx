import { TalentsData } from "../../Data/TalentData"
import { UserProfile } from "../../Interfaces/UserProfile"
import { ApplicantWithProfile } from "../../Slices/JobSlice"
import TalentCard from "../FindTalent/TalentCard"
interface Invited{
    invited:boolean,
    aplicants:ApplicantWithProfile[]
}
const ApplicantCards = ({invited, aplicants}:Invited)=>{
    return  <div>
        <div className="flex flex-wrap gap-5 mt-2">
                {
                    aplicants.map((applicant, index) => {
                        return (
                            <TalentCard key={index} talentsDetails={applicant} posted={true} invited={invited}/>
                        )
                    })
                }
            </div>
    </div>
}

export default ApplicantCards;