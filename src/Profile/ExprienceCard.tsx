import { Button } from "@mantine/core";
import { ExpInterface } from "./Interfaces"
import { useState } from "react";
import ExpInput from "./ExpInput";
interface ExpInt {
    exp: ExpInterface,
    edit: boolean
}
const ExpCard = ({ exp, edit }: ExpInt) => {
    const [hide,setHide] = useState<boolean>(false);
    return !hide ?<div className="flex flex-col gap-2">
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
                {exp.joinDate} - {exp.endDate}
            </div>
        </div>
        <div className="text-justify text-sm">
            {exp.desc}
        </div>
        {
            edit &&
            <div className="flex gap-5 mt-4">
                <Button variant="outline" color="bright-sun.4" onClick={()=>setHide(true)}>Edit</Button>
                <Button color="red.8" variant="light">Delete</Button>
            </div>
        }
    </div>: <ExpInput setHide={setHide} inputData={{role:exp.role,company:exp.company,location:exp.location, desc:exp.desc}} add={false}/>
}
export default ExpCard;