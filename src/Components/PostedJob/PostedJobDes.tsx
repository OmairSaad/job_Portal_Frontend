import { Badge, Tabs, TabsList, TabsPanel } from "@mantine/core";
import ApplicantCards from "./ApplicantsCard";
import JobDes from "../JobDescription/JobDes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store";
import { useEffect } from "react";
import { getApplicantsByJobId, getJobById } from "../../Slices/JobSlice";
import { useParams } from "react-router-dom";

const PostedJobDes = () => {
    const { id } = useParams();
    const { job, applicants } = useSelector((state: RootState) => state.jobs);
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user);
    useEffect(() => {
        dispatch(getJobById({ jobId: id, userId: user.id }));
        dispatch(getApplicantsByJobId(id));
        console.log(job);
        console.log(applicants);
    }, [dispatch, id]);
  

    // Categorize applicants based on status
    const appliedApplicants = applicants.filter(app => app.applicationStatus === "APPLIED");
    const invitedApplicants = applicants.filter(app => app.applicationStatus === "INTERVIEWING");
    const offeredApplicants = applicants.filter(app => app.applicationStatus === "OFFERED");
    const rejectedApplicants = applicants.filter(app => app.applicationStatus === "REJECTED")
    return (
        job.id?
        <div className=" w-3/4 py-5 ">
            <div className="text-2xl font-semibold flex items-center"> {job.jobTitle} <Badge variant="light" color="bright-sun.4" size="sm" mx="sm">{job.jobStatus}</Badge>
            </div>
            <div className="font-semibold text-mine-shaft-300"> {job.location}</div>

            <div className="mt-5">
                <Tabs defaultValue="overview" radius="lg" variant="outline">
                    <TabsList className="[&_button]:text-lg [&_button]:font-semibold [&_button[data-active='true']]:text-bright-sun-400">
                        <Tabs.Tab value="overview">Overview</Tabs.Tab>
                        <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                        <Tabs.Tab value="invited">Invited</Tabs.Tab>
                        <Tabs.Tab value="offered">Offered</Tabs.Tab>
                        <Tabs.Tab value="rejected">Rejected</Tabs.Tab>
                    </TabsList>
                    <TabsPanel value="overview" className="[&>div]:w-full">
                    
                        <JobDes edit={true} job={job} />
                    </TabsPanel>
                    <TabsPanel value="applicants">
                        <ApplicantCards invited={false} aplicants={appliedApplicants} />
                    </TabsPanel>
                    <TabsPanel value="invited">
                        <ApplicantCards invited={true} aplicants={invitedApplicants} />
                    </TabsPanel>
                    <TabsPanel value="offered">
                        <ApplicantCards invited={false} aplicants={offeredApplicants} />
                    </TabsPanel>
                    <TabsPanel value="rejected">
                        <ApplicantCards invited={false} aplicants={rejectedApplicants} />
                    </TabsPanel>
                </Tabs>
            </div>
        </div> : <div className="text-center m-auto font-extrabold text-2xl">No Job Selected</div>

    )
}
export default PostedJobDes;