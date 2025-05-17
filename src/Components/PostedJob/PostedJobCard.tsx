import { Link, useParams } from "react-router-dom";
import { Job } from "../../Interfaces/PostJob";
import { calculateTimeDifference } from "../../Services/DateFormatter";

interface activeJobIn{
    job:Job
}
const PostedJobCard = ({job}:activeJobIn)=>{
    const {id} = useParams();
    return (
        <Link to={`/posted-jobs/${job.id}`} className={` p-2 rounded-lg border-l-2 border-l-bright-sun-400 ${id==job.id ? "bg-emerald-200 [&>div]:text-mine-shaft-900":"bg-mine-shaft-900"}`}>
            <div className="text-sm font-semibold">{job.jobTitle}</div>
            <div className="text-xs font-medium text-mine-shaft-300">{job.location}</div>
            <div className="text-xs text-mine-shaft-300">{calculateTimeDifference(job.postedAgo)}</div>
        </Link>
    )
}
export default PostedJobCard;