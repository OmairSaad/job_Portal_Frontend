import { Button, Checkbox, Textarea } from "@mantine/core";
import { Fields } from "./Field";
import SelectInput from "./SelectInput";
import { useEffect, useState } from "react";
import { MonthPickerInput } from "@mantine/dates";
import { Experience } from "../../Interfaces/UserProfile";
import { addExprience, updateExprience } from "../../Services/ProfileService";
import { formattedDate } from "../../Services/DateFormatter";
import { errorNotf, succesNotf } from "../../Services/Notification";

interface ExpInputInterface {
    setHide: (a: boolean) => void,
    inputData: Experience
    add: boolean,
    profileId?: number,
    fetchData?: () => void
}
const ExpInput = ({ setHide, inputData, add, profileId, fetchData }: ExpInputInterface) => {
    const [des, setDesc] = useState(inputData.des);
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());
    const [check, setCheck] = useState(false);
    const [exp, setExp] = useState<Experience>({
        id: 0,
        role: "",
        company: "",
        location: "",
        joinDate: "",
        endDate: "",
        des: ""
    })
    useEffect(() => {
        if (inputData.endDate) {
            setEndDate(new Date(inputData.endDate));
        } else {
            setCheck(true);
        }
        setStartDate(new Date(inputData.joinDate));
        setExp({ role: inputData.role, company: inputData.company, des: inputData.des, location: inputData.location, endDate: "", id: inputData.id, joinDate: "" })
    }, [])
    const handlInfo = (field: string, val: string) => {
        setExp((prev) => (
            {
                ...prev, [field]: val
            }
        ));
    }
    const handlUpdate = () => {
        setHide(false);
        exp.des = des;
        if (startDate) {
            exp.joinDate = formattedDate(startDate);
        }
        if (endDate) {
            exp.endDate = formattedDate(endDate);
        }
        if (check) {
            exp.endDate = null;
        }
        //for inserting id=0 hibernate create a new id and insert it
        if (add && profileId) {
            addExprience(exp, profileId).then((res) => {
                succesNotf(" Experience Added", "Your Experience has been successfully added! 🎉")
                console.log(res.data);
                if (fetchData) fetchData();
            }).catch((er) => {
                errorNotf("Experience Addition Failed", "Something went wrong while adding your Experience. Please try again.")
                console.log(er);
            })

        }

        //for updating exprience id should not be zero
        else if (profileId && exp.id != 0) {
            updateExprience(exp, profileId).then((res) => {
                succesNotf(" Experience Updated", "Your Experience has been successfully updated! 🎉")
                console.log(res.data);
                if (fetchData) {
                    fetchData();
                }
            }).catch((er) => {
                errorNotf("Experience Updation Failed", "Something went wrong while updating your Experience. Please try again.")
                console.log(er);
            })
        }
    }
    return (
        <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold"> {add ? "Add" : "Edit"} Exprience</div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput field={Fields[0]} setField={inputData.role} info={handlInfo} name="role" />
                <SelectInput field={Fields[1]} setField={inputData.company} info={handlInfo} name="company" />
            </div>
            <SelectInput field={Fields[2]} setField={inputData.location} info={handlInfo} name="location" />
            <Textarea withAsterisk placeholder="Exprience Des.." label="Enter summary" minRows={3} autosize value={des} onChange={(event) => setDesc(event.currentTarget.value)} />
            <div className="flex gap-10 [&>*]:w-1/2">
                <MonthPickerInput label="Start Date" withAsterisk placeholder="Pick Date" maxDate={endDate || undefined} value={startDate} onChange={setStartDate} />
                <MonthPickerInput disabled={check} label="End Date" withAsterisk placeholder="Pick Date" maxDate={new Date()} minDate={startDate || undefined} value={endDate} onChange={setEndDate} />
            </div>
            <Checkbox autoContrast label="Currently working here" checked={check} onChange={(event) => setCheck(event.currentTarget.checked)} />
            <div className="flex gap-3">
                <Button variant="light" onClick={handlUpdate} color="bright-sun.4">Save</Button>
                <Button variant="outline" onClick={() => setHide(false)} color="red.8">Cancel</Button>
            </div>

        </div>
    )
}
export default ExpInput;