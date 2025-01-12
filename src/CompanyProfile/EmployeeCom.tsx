import { TalentsData } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const EmployeeCom = () => {
    return (
        <div>
            <div className="flex flex-wrap gap-5 mt-10">
                {
                    TalentsData.map((item, index) => {
                        return (
                            <TalentCard invited={false} key={index} talentsDetails={item} posted={false} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default EmployeeCom;