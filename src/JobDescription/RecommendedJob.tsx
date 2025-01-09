import JobData from "../Data/JobData";
import JobCard from "../FindJobs/JobCard";

const RecommendedJob =()=>{
    return (
        <div>
        <div className="text-xl font-bold mb-5 text-mine-shaft-100">Recommended Talent</div>
        <div className="flex flex-col flex-wrap gap-3">
            {JobData.map((d,index)=>(
               index<6 && <JobCard key={index} jobdetails={d} />
            ))}
        </div>
    </div>
    )
}
export default RecommendedJob;