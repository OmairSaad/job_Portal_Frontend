import JobData from "../Data/JobData";
import JobCard from "../FindJobs/JobCard";

const JobCom = ()=>{
    return(
        <div>
            <div className="flex flex-wrap gap-3 mt-10">
                {
                    JobData.map((job,index)=>{
                        return (
                           index<6 && <JobCard key={index} jobdetails = {job}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default JobCom;