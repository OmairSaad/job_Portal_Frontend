import { Button } from "@mantine/core";
import { CertificateFileds } from "./Field";
import SelectInput from "./SelectInput";
import { useEffect, useState } from "react";
import { MonthPickerInput } from "@mantine/dates";
import { Certification } from "../../Interfaces/UserProfile";
import { formattedDate } from "../../Services/DateFormatter";
import { addCertifications, updateCertifications } from "../../Services/ProfileService";
import { errorNotf, succesNotf } from "../../Services/Notification";
interface certInterface {
    certificate: Certification,
    setHide: (a: boolean) => void,
    add: boolean,
    profileId?: number,
    fetchData?: () => void
}
const CertInput = ({ setHide, certificate, add, fetchData, profileId }: certInterface) => {
    const [date, setdDate] = useState<Date | null>(new Date());
    const [cert, setCert] = useState<Certification>({
        id: 0,
        certificate: "",
        company: "",
        issueDate: "",// Consider `Date` for non-null values if parsed
        certificateId: ""
    });
    useEffect(() => {
        setCert({ certificate: certificate.certificate, certificateId: certificate.certificateId, company: certificate.company, issueDate: certificate.issueDate, id: certificate.id })
        setdDate(new Date(certificate.issueDate))
    }, [])
    const handlInfo = (field: string, val: string) => {
        setCert((prev) => (
            {
                ...prev, [field]: val
            }
        ))
    }
    const handleUpdate = () => {
        setHide(false);
        if (date)
            cert.issueDate = formattedDate(date);

        if (profileId && cert.id != 0) {
            updateCertifications(cert, profileId).then((res) => {
                console.log(res);
                succesNotf(" Certification Updated", "Your Certification has been successfully updated! 🎉")
                if (fetchData) fetchData();
            }).catch((er) => {
                errorNotf("Certification Updation Failed", "Something went wrong while updating your  Certification. Please try again.")
                console.log(er);
            })
        }
        else if (add && profileId) {
            addCertifications(cert, profileId).then((res) => {
                succesNotf(" Certification Added", "Your Certification has been successfully added! 🎉")
                console.log(res);
                if (fetchData) fetchData();
            }).catch((er) => {
                errorNotf("Certification Addition Failed", "Something went wrong while adding your  Certification. Please try again.")
                console.log(er);
            })
        }
    }
    return (
        <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold"> {add ? "Add" : "Edit"} Certificate</div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput field={CertificateFileds[0]} setField={certificate.certificate} name="certificate" info={handlInfo} />
                <SelectInput field={CertificateFileds[1]} setField={certificate.company} name="company" info={handlInfo} />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput field={CertificateFileds[2]} setField={certificate.certificateId} name="certificateId" info={handlInfo} />
                <MonthPickerInput label="Issued Date" withAsterisk placeholder="Pick Date" maxDate={new Date()} value={date} onChange={setdDate} />
            </div>
            <div className="flex gap-3">
                <Button variant="light" color="bright-sun.4" onClick={handleUpdate}>Save</Button>
                <Button variant="outline" color="red.8" onClick={() => setHide(false)}>Cancel</Button>
            </div>
        </div>
    )
}
export default CertInput;