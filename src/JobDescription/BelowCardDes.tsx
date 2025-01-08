import { IconMapPin } from "@tabler/icons-react";
interface JobDesInt{
    job:{
        name:string,
        icon:string,
        value:string
    }
}
const BelowCardDes = ({job}:JobDesInt)=>{
    return (
        <div className="flex flex-col items-center">
            <div className="p-1 bg-bright-sun-400/15 rounded-full">
                <IconMapPin className="text-bright-sun-400" />
            </div>
            <div className="text-sm ">
                {job.name}
            </div>
            <div className="font-semibold text-mine-shaft-100">
                
            </div>
        </div>
    )
}
export default BelowCardDes;