import { Certification } from "../../Interfaces/UserProfile";
import { formatToMonthYear } from "../../Services/DateFormatter";
interface CerIn {
    cert:Certification
}
const CertiCard = ({cert}:CerIn)=>{
    return (
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-1 rounded-lg bg-mine-shaft-50">
                    <img src={`/assets/companies/meta.png`} alt="" className="h-7" />
                </div>
                <div>
                    <div className="font-semibold">{cert.certificate}</div>
                    <div className="text-sm text-mine-shaft-300">{cert.company}</div>
                </div>
            </div>
            <div className="flex flex-col items-end text-sm text-mine-shaft-300">
                <div>{formatToMonthYear(cert.issueDate)}</div>
                <div>{cert.certificateId}</div>
            </div>
        </div>
    )
}
export default CertiCard;