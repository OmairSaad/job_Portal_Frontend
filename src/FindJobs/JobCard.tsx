import { Divider, Text } from "@mantine/core";
import { IconBookmark, IconClockHour3 } from "@tabler/icons-react";
interface JobInterface{
    jobdetails:{
        jobTitle:string,
        company:string,
        icon:string,
        applicants:number,
        exprience:string,
        jobType:string,
        location:string,
        postDaysAgo:number,
        description:string,
        package:number
    }
}
const JobCard = ({jobdetails}:JobInterface) => {
    return (
        <div className="bg-mine-shaft-900 p-4 w-72 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] shadow-bright-sun-400">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className="p-1 rounded-lg bg-mine-shaft-50">
                        <img src={`src/assets/companies/${jobdetails.icon}.png`} alt="" className="h-7" />
                    </div>
                    <div>
                        <div className="font-semibold">{jobdetails.jobTitle}</div>
                        <div className="text-xs text-mine-shaft-300">{jobdetails.company} &#x2022; {jobdetails.applicants} Applicants</div>
                    </div>
                </div>
                <div>
                    <IconBookmark className="text-mine-shaft-300 hover:cursor-pointer"/>
                </div>
            </div>
            <div className="flex gap-2 [&_div]:text-bright-sun-400 [&_div]:bg-mine-shaft-800 [&_div]:py-1 [&_div]:rounded-lg [&_div]:px-2 text-xs font-semibold">
                <div>{jobdetails.exprience}</div>
                <div>{jobdetails.jobType}</div>
                <div>{jobdetails.location}</div>
            </div>
             <Text lineClamp={3} className="!text-xs !text-justify !text-mine-shaft-200">
                {jobdetails.description}
             </Text>
            <Divider size="sm" color="mine-shaft.6" />
            <div className="flex justify-between">
                <div className="font-semibold text-mine-shaft-200">&#8377; {jobdetails.package} LPA</div>
                <div className="flex gap-1 text-xs items-center">
                <IconClockHour3 stroke={1.5} className="h-5 w-5"/>Posted {jobdetails.postDaysAgo} days ago</div>
            </div>
        </div>
    )
}
export default JobCard;