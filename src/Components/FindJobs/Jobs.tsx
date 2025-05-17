import { useEffect } from "react";
import JobCard from "./JobCard";
import Sort from "./Sort";
import { useDispatch, useSelector } from "react-redux";
import { clearSuccessMessage, getAllJobs } from "../../Slices/JobSlice";
import { RootState } from "../../Store";
import { succesNotf } from "../../Services/Notification";
const Jobs = () => {
    const dispatch = useDispatch();
    const { jobs, successMessage } = useSelector((state:RootState) => state.jobs);
    const user = useSelector((state:RootState)=>state.user);

    useEffect(() => {
        // Handle success message
        if (successMessage && successMessage.id === 3) {
            succesNotf("Success", successMessage.message);
    
            // Clear the success message after handling it
            dispatch(clearSuccessMessage());
        }
    }, [successMessage, dispatch]);

    useEffect(() => {
        // Fetch jobs when the component mounts or when user.id changes
        dispatch(getAllJobs({ userId: user.id }));
    }, [dispatch, user.id]);
    return (
        <div className="px-5 pb-20">
            <div className="text-2xl font-semibold text-mine-shaft-50 flex justify-between items-center">
                Recommended Jobs
                <Sort />
            </div>
            <div className="flex flex-wrap gap-5 mt-10">
                {
                    jobs.map((job)=>{
                        return (
                           job.jobStatus=="ACTIVE" && <JobCard jobdetails = {job} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Jobs;