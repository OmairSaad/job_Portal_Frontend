import { Button, Checkbox, Textarea } from "@mantine/core";
import { Fields } from "./Field";
import SelectInput from "./SelectInput";
import { useState } from "react";
import { MonthPickerInput } from "@mantine/dates";
interface ExpInputInterface{
    setHide: (a:boolean)=> void,
    inputData: {
        role:string,
        company:string,
        location:string,
        desc:string,
    },
    add:boolean
}
const ExpInput = ({setHide,inputData, add}:ExpInputInterface) => {
    const [des, setDesc] = useState(inputData.desc);
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());
    const [check, setCheck] = useState(false);
    return (
        <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold"> {add ? "Add" :"Edit"} Exprience</div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput field={Fields[0]}  setField={inputData.role}/>
                <SelectInput field={Fields[1]} setField={inputData.company} />
            </div>
            <SelectInput field={Fields[2]} setField={inputData.location} />
            <Textarea withAsterisk placeholder="Exprience Des.." label="Enter summary" minRows={3} autosize value={des} onChange={(event) => setDesc(event.currentTarget.value)} />
            <div className="flex gap-10 [&>*]:w-1/2">
                <MonthPickerInput label="Start Date" withAsterisk placeholder="Pick Date" maxDate={endDate || undefined} value={startDate} onChange={setStartDate} />
                <MonthPickerInput disabled={check} label="End Date" withAsterisk placeholder="Pick Date" maxDate={new Date()} minDate={startDate || undefined} value={endDate} onChange={setEndDate} />
            </div>
            <Checkbox autoContrast label="Currently working here" checked={check} onChange={(event) => setCheck(event.currentTarget.checked)} />
                <div className="flex gap-3">
                    <Button variant="light" onClick={()=>setHide(false)} color="bright-sun.4">Save</Button>
                    <Button variant="outline" onClick={()=>setHide(false)} color="red.8">Cancel</Button>
                </div>
        </div>
    )
}
export default ExpInput;