import { TalentsData } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const EmployeeCom = () => {
    return (
        <div>
            <div className="flex flex-wrap gap-5 mt-10">
                {
                    TalentsData.map((item, index) => {
                        return (
                            <TalentCard key={index} talentsDetails={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default EmployeeCom;