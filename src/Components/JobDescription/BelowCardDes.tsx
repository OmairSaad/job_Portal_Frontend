import {IconProps } from "@tabler/icons-react";
import React from "react";
interface JobDesInt{
    job:{
        name:string,
        icon: React.ComponentType<IconProps> ,
        value:string | number
    }
}
const BelowCardDes = ({job}:JobDesInt)=>{
    return (
        <div className="flex flex-col items-center">
            <div className="p-1 bg-bright-sun-400/15 rounded-full">
                <job.icon className="text-bright-sun-400" />
            </div>
            <div className="text-sm ">
                {job.name}
            </div>
            <div className="font-semibold text-mine-shaft-100">
                { job.name==="Salary"?job.value+' LPA':job.value}
            </div>
        </div>
    )
}
export default BelowCardDes;
