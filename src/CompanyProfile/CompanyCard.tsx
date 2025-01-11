import { ActionIcon } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
interface comIn{
    company:{
        name:string,
        employees:number,
        src:string
    }
}
const CompanyCard = ({company}:comIn) => {
    return <div className="flex justify-between items-center bg-mine-shaft-900 p-2 rounded-lg">
        <div className="flex gap-2 items-center">
            <div className="bg-mine-shaft-100 p-1 rounded-xl">
                <img src={`/src/assets/companies/${company.src}.png`} className="h-10"  alt="logo" />
            </div>
            <div>
                <div className="text-mine-shaft-100 font-semibold">{company.name}</div>
                <div>{company.employees} Employees</div>
            </div>
        </div>
        <ActionIcon color="bright-sun.4" variant="subtle" >
        <IconExternalLink/>
        </ActionIcon>
    </div>
}
export default CompanyCard;