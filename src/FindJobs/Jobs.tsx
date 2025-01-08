import { Link } from "react-router-dom";
import JobData from "../Data/JobData";
import JobCard from "./JobCard";
import Sort from "./Sort";
const Jobs = () => {
    return (
        <div className="px-5 pb-20">
            <div className="text-2xl font-semibold text-mine-shaft-50 flex justify-between items-center">
                Recommended Jobs
                <Sort />
            </div>
            <div className="flex flex-wrap gap-5 mt-10">
                {
                    JobData.map((job)=>{
                        return (
                            <Link to="/jobs">
                            <JobCard jobdetails = {job}/>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Jobs;