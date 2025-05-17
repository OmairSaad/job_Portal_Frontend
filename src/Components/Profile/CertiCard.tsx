import { Button } from "@mantine/core";
import { useState } from "react";
import CertInput from "./CertInput";
import { Certification } from "../../Interfaces/UserProfile";
import { formatToMonthYear } from "../../Services/DateFormatter";
import { delCertifications } from "../../Services/ProfileService";
import { errorNotf, succesNotf } from "../../Services/Notification";
interface CerIn {
    cert: Certification,
    edit:boolean,
    profileId:number,
    fetchData:()=>void
}
const CertiCard = ({ cert,edit, fetchData,profileId}: CerIn) => {
    const [hide,setHide] = useState<boolean>(false);
    const handleDelCert = ()=>{
        delCertifications(cert.id).then((res)=>{
            console.log(res.data);
            succesNotf("Certification Deleted Successfully","🗑️ Certification Deleted Successfully");
            if(fetchData) fetchData();  
        }).catch((er)=>{
            console.log(er);
            errorNotf("Certification Deletion Failed", er.response.data.errorMessage);
        })
    }
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
                <div>{formatToMonthYear(cert.issueDate)}</div>
                <div>{cert.certificateId}</div>
            </div>

            
                {

                edit &&
                <div className="flex gap-5 mt-4">
                    <Button variant="outline" color="bright-sun.4" onClick={()=>setHide(true)} >Edit</Button>
                    <Button color="red.8" variant="light" onClick={handleDelCert}>Delete</Button>
                </div>
                }
            
        </div> : <CertInput fetchData={fetchData} add={false} profileId={profileId} setHide={setHide} certificate={{certificate:cert.certificate,company:cert.company,certificateId:cert.certificateId,issueDate:cert.issueDate,id:cert.id}} />
    )
}
export default CertiCard;