import { Button, Divider, Text } from "@mantine/core";
import { IconBookmark, IconBookmarkFilled, IconCalendarMonth, IconClockHour3 } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { Applicant, Job } from "../../Interfaces/PostJob";
import { calculateTimeDifference, formattedDate, formatToTime } from "../../Services/DateFormatter";
interface JobInterface{
    jobdetails:Job
    applied:boolean,
    saved:boolean,
    offered:boolean,
    interviewing:boolean,
    timestamp:string,
    applicant?: Applicant
}
const HistoryCard = ({jobdetails,applied,saved, offered, interviewing, timestamp, applicant}:JobInterface) => {
   const interviewDate = applicant?.interviewDate ? new Date(applicant.interviewDate) : new Date();
    const interviewTime = applicant?.interviewTime ? applicant.interviewTime : "Not Scheduled";

    return (
        <div className="bg-mine-shaft-900 p-4 w-72 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] shadow-bright-sun-400">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className="p-1 rounded-lg bg-mine-shaft-50">
                        <img src={`/assets/companies/meta.png`} alt="" className="h-7" />
                    </div>
                    <div>
                        <div className="font-semibold">{jobdetails.jobTitle}</div>
                        <div className="text-xs text-mine-shaft-300">{jobdetails.company} &#x2022; {jobdetails.applicants? jobdetails.applicants.length:0} Applicants</div>
                    </div>
                </div>
                <div>
                    {
                        saved ? <IconBookmarkFilled className="text-bright-sun-400 hover:cursor-pointer" /> : <IconBookmark className="text-mine-shaft-300 hover:cursor-pointer"/>
                    }                </div>
            </div>
            <div className="flex gap-2 [&_div]:text-bright-sun-400 [&_div]:bg-mine-shaft-800 [&_div]:py-1 [&_div]:rounded-lg [&_div]:px-2 text-xs font-semibold">
                <div>{jobdetails.experience}</div>
                <div>{jobdetails.jobType}</div>
                <div>{jobdetails.location}</div>
            </div>
             <Text lineClamp={3} className="!text-xs !text-justify !text-mine-shaft-200">
                {jobdetails.about}
             </Text>
            <Divider size="sm" color="mine-shaft.6" />
            <div className="flex justify-between">
                <div className="font-semibold text-mine-shaft-200">&#8377; {jobdetails.salary} LPA</div>
                <div className="flex gap-1 text-xs items-center">
                <IconClockHour3 stroke={1.5} className="h-5 w-5"/>{applied || interviewing ?"Applied": (offered?"Interviewed":"Posted")} {calculateTimeDifference(timestamp)}</div>
            </div>
            {
              (offered || interviewing) && <Divider color="mine-shaft.7" />
            }
            {   
                offered && <div className="flex gap-2">
                    <Button fullWidth variant="outline" color="bright-sun.4">Accept</Button>
                    <Button fullWidth variant="light" color="bright-sun.4">Reject</Button>
                </div>
            }
            {
                interviewing && <div className="flex items-center gap-2">
                    <IconCalendarMonth className="text-bright-sun-400 h-5 w-5" stroke={1.5}/>
                    <div className="text-sm"> {formattedDate(interviewDate)} &bull; <span className="text-mine-shaft-400">{formatToTime(interviewTime)}</span></div>
                </div>
            }
            <Link to={`/jobs/${jobdetails.id}`}>
            <Button variant="outline" color="bright-sun.4" fullWidth  >View Job</Button>
            </Link>
        </div>
    )
}
export default HistoryCard;