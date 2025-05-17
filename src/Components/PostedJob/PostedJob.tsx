import { Tabs, TabsList, TabsPanel } from "@mantine/core";
import PostedJobCard from "./PostedJobCard";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../Store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearSuccessMessage, getJobsByUserId } from "../../Slices/JobSlice";
import { succesNotf } from "../../Services/Notification";

const PostedJob = () => {
    const { id } = useParams();
    const { jobs, successMessage } = useSelector((state: RootState) => state.jobs);
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user);
    const navigate = useNavigate();
    useEffect(() => {
        if(jobs.length>0 && Number(id)==0){
        navigate(`/posted-jobs/${jobs[0].id}`)
        }
        if (successMessage) {
            succesNotf(successMessage.message, "Updated Successfully");
        } 
        dispatch(clearSuccessMessage())
    }, [successMessage])
    useEffect(() => {
        dispatch(getJobsByUserId(user.id));
    }, [id, user.id]);
    return (
        <div className="w-1/6 py-5 ">
            <div className="text-2xl font-semibold mb-5">Jobs</div>
            <div>
                <Tabs variant="pills" defaultValue="active" autoContrast>
                    <TabsList className="[&_button[aria-selected='false']]:bg-mine-shaft-900 font-medium">
                        <Tabs.Tab value="active">Active [{jobs.filter(job => job.jobStatus == "ACTIVE").length}]</Tabs.Tab>
                        <Tabs.Tab value="drafts">Drafts [{jobs.filter(job => job.jobStatus == "DRAFT").length}]</Tabs.Tab>
                    </TabsList>

                    <TabsPanel value="active">
                        <div className="mt-5 flex flex-col gap-5">
                            {jobs.map((job, index) => job.jobStatus == "ACTIVE" && (<PostedJobCard key={index} job={job} />))}
                        </div>
                    </TabsPanel>
                    <TabsPanel value="drafts">
                        <div className="mt-5 flex flex-col gap-5">
                            {jobs.map((job, index) => job.jobStatus == "DRAFT" && (<PostedJobCard key={index} job={job} />))}
                        </div>
                    </TabsPanel>
                </Tabs>
            </div>
        </div>
    )
}
export default PostedJob;