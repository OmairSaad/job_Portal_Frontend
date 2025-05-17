import { Button } from "@mantine/core";
import { useState } from "react";
import ExpInput from "./ExpInput";
import { Experience } from "../../Interfaces/UserProfile";
import { deleteExprience } from "../../Services/ProfileService";
import { formatToMonthYear } from "../../Services/DateFormatter";
import { errorNotf, succesNotf } from "../../Services/Notification";
interface ExpInt {
    exp: Experience,
    edit: boolean,
    profileId: number,
    fetchData: () => void
}
const ExpCard = ({ exp, edit, profileId, fetchData }: ExpInt) => {
    const [hide, setHide] = useState<boolean>(false);

    const handlDeleteExp = () => {
        deleteExprience(exp.id).then((res) => {
            succesNotf("Experience Deleted Successfully", "🗑️ Experience Deleted Successfully"); console.log(res.data);
            fetchData();
        }).catch((er) => {
            errorNotf("Experience Deletion Failed", er.response.data.errorMessage);
            console.log(er);
        })
    }
    return !hide ? <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <div className="p-1 rounded-lg bg-mine-shaft-50">
                    <img src={`/assets/companies/meta.png`} alt="" className="h-7" />
                </div>
                <div>
                    <div className="font-semibold">{exp.role}</div>
                    <div className="text-sm text-mine-shaft-300">{exp.company} &bull; {exp.location}</div>
                </div>
            </div>
            <div>
                {formatToMonthYear(exp.joinDate)} - {exp.endDate ? formatToMonthYear(exp.endDate) : "Present"}
            </div>
        </div>
        <div className="text-justify text-sm">
            {exp.des}
        </div>
        {
            edit &&
            <div className="flex gap-5 mt-4">
                <Button variant="outline" color="bright-sun.4" onClick={() => setHide(true)}>Edit</Button>
                <Button color="red.8" variant="light" onClick={handlDeleteExp}>Delete</Button> 
            </div>
        }
    </div> : <ExpInput fetchData={fetchData} profileId={profileId} setHide={setHide} inputData={{ role: exp.role, company: exp.company, location: exp.location, des: exp.des, id: exp.id, endDate: exp.endDate, joinDate: exp.joinDate }} add={false} />
}
export default ExpCard;