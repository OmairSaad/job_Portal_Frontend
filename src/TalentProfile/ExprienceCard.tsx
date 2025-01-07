import {ExpInterface} from "./Interaces"
interface ExpInt{
exp:ExpInterface
}
const ExpCard = ({exp}:ExpInt) => {
    return <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <div className="p-1 rounded-lg bg-mine-shaft-50">
                    <img src={`src/assets/companies/meta.png`} alt="" className="h-7" />
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
    </div>
}
export default ExpCard;