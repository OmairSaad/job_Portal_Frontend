import {CerInterface} from "./Interaces"
interface CerIn {
    cert:CerInterface
}
const CertiCard = ({cert}:CerIn)=>{
    return (
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-1 rounded-lg bg-mine-shaft-50">
                    <img src={`src/assets/companies/meta.png`} alt="" className="h-7" />
                </div>
                <div>
                    <div className="font-semibold">{cert.certificate}</div>
                    <div className="text-sm text-mine-shaft-300">{cert.company}</div>
                </div>
            </div>
            <div className="flex flex-col items-end text-sm text-mine-shaft-300">
                <div>{cert.date}</div>
                <div>{cert.id}</div>
            </div>
        </div>
    )
}
export default CertiCard;