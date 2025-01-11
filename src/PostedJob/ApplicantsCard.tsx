import { TalentsData } from "../Data/TalentData"
import TalentCard from "../FindTalent/TalentCard"

const ApplicantCards = ()=>{
    return <div>
        <div className="flex flex-wrap gap-5 mt-10">
                {
                    TalentsData.map((item, index) => {
                        return (
                            <TalentCard key={index} talentsDetails={item} posted={true} />
                        )
                    })
                }
            </div>
    </div>
}

export default ApplicantCards;