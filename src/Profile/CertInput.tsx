import { Button} from "@mantine/core";
import { CertificateFileds } from "./Field";
import SelectInput from "./SelectInput";
import { useState } from "react";
import { MonthPickerInput } from "@mantine/dates";
import { CerInterface } from "./Interfaces";
interface certInterface {
    certificate: CerInterface,
    setHide: (a:boolean)=> void,
    add:boolean
}
const CertInput = ({setHide,certificate , add}:certInterface) => {
    const [date, setdDate] = useState<Date | null>(new Date());

    return (
        <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold"> {add ? "Add" :"Edit"} Certificate</div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput field={CertificateFileds[0]} setField={certificate.certificate}  />
                <SelectInput field={CertificateFileds[1]} setField={certificate.company} />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput field={CertificateFileds[2]} setField={certificate.id} />
                <MonthPickerInput label="Start Date" withAsterisk placeholder="Pick Date" value={date} onChange={setdDate}/>
            </div>
            <div className="flex gap-3">
                <Button variant="light" color="bright-sun.4" onClick={()=>setHide(false)}>Save</Button>
                <Button variant="outline" color="red.8" onClick={()=>setHide(false)}>Cancel</Button>
            </div>
        </div>
    )
}
export default CertInput;