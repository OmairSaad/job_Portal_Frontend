import { Button, Divider, Text } from "@mantine/core";
import { IconBookmark, IconBookmarkFilled, IconClockHour3 } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { Job } from "../../Interfaces/PostJob";
import { calculateTimeDifference } from "../../Services/DateFormatter";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store";
import { useEffect } from "react";
import { errorNotf, succesNotf } from "../../Services/Notification";
import { clearSuccessMessage, saveToggleJob } from "../../Slices/JobSlice";
interface JobInterface {
    jobdetails: Job
}
const JobCard = ({ jobdetails }: JobInterface) => {
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const handleToggleSave = () => {
        dispatch(saveToggleJob({ jobId: jobdetails.id, userId: user.id }));
    }
    return (
        <div className="bg-mine-shaft-900 p-4 w-72 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] shadow-bright-sun-500">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className="p-1 rounded-lg bg-mine-shaft-50">
                        <img src={`/assets/companies/fb.png`} alt="" className="h-7" />
                    </div>
                    <div>
                        <div className="font-semibold">{jobdetails.jobTitle}</div>
                        <div className="text-xs text-mine-shaft-300">{jobdetails.company} &#x2022; {jobdetails.applicants ? jobdetails.applicants.length : 0} Applicants</div>
                    </div>
                </div>
                <div>
                    {
                        jobdetails.saved ? <IconBookmarkFilled className="hover:cursor-pointer text-bright-sun-400" onClick={handleToggleSave} />
                            : <IconBookmark className="text-mine-shaft-300 hover:cursor-pointer hover:text-bright-sun-400" onClick={handleToggleSave} />


                    }
                </div>
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
                    <IconClockHour3 stroke={1.5} className="h-5 w-5" />Posted {calculateTimeDifference(jobdetails.postedAgo)}</div>
            </div>
            <Button variant="light" color="bright-sun.4" onClick={() => navigate(`/jobs/${jobdetails.id}`)}>View Job</Button>
        </div>

    )
}
export default JobCard;