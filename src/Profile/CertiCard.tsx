import { Button } from "@mantine/core";
import { CerInterface } from "./Interfaces"
import { useState } from "react";
import CertInput from "./CertInput";
interface CerIn {
    cert: CerInterface,
    edit:boolean
}
const CertiCard = ({ cert,edit}: CerIn) => {
    const [hide,setHide] = useState<boolean>(false);
    return (
        !hide ? <div className="flex justify-between">
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
                <div>{cert.date}</div>
                <div>{cert.id}</div>
            </div>

            
                {

                edit &&
                <div className="flex gap-5 mt-4">
                    <Button variant="outline" color="bright-sun.4" onClick={()=>setHide(true)} >Edit</Button>
                    <Button color="red.8" variant="light">Delete</Button>
                </div>
                }
            
        </div> : <CertInput add={false} setHide={setHide} certificate={{certificate:cert.certificate,company:cert.company,id:cert.id,date:"22"}} />
    )
}
export default CertiCard;