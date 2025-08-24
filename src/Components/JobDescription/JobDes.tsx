import { Button, Divider } from "@mantine/core";
import { IconBookmark, IconBookmarkFilled, IconBriefcase, IconMapPin, IconPremiumRights, IconRecharging } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import BelowCardDes from "./BelowCardDes";
import DOMpurify from "dompurify"
import { Job } from "../../Interfaces/PostJob";
import { calculateTimeDifference } from "../../Services/DateFormatter";
import { deleteJob, saveToggleJob } from "../../Slices/JobSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store";
interface JobDesIn {
    edit: boolean,
    job: Job
}
const JobDes = ({ edit, job }: JobDesIn) => {
    // Load the des from var but filter it if it consists dangerous script by npm i dompurify
    const data = DOMpurify.sanitize(job.jobDescription);
    const user = useSelector((state: RootState) => state.user);
    const {successMessage,error} = useSelector((state:RootState)=> state.jobs);
    const dispatch = useDispatch();
    const handleToggleSave = () => {
        dispatch(saveToggleJob({ jobId: job.id, userId: user.id }));

    }

    const handleDelete = (id: number) => {
        dispatch(deleteJob(id));
    }

    return (
        <div className="w-2/3">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 justify-center text-mine-shaft-100">
                    <div className="rounded-lg bg-mine-shaft-50">
                        <img src={`/assets/companies/amzn.png`} alt="" className="h-14" />
                    </div>
                    <div className="flex flex-col gap-1  justify-center">
                        <div className="text-2xl font-bold">{job.jobTitle}</div>
                        <div className="text-sm text-mine-shaft-200">{job.company} &#x2022; {calculateTimeDifference(job.postedAgo)} &bull; {job.applicants ? job.applicants.length : 0} Applicants</div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    {
                        (job.applicationStatus == "INTERVIEWING" || job.applicationStatus=="APPLIED" || job.applicationStatus=="OFFERED" || job.applicationStatus=="REJECTED")  && !edit && <Button color="green.8" variant="light">Applied</Button>
                    }
                    {
                        (job.applicationStatus==null || edit) && <Link to={edit ? "/edit-post"+"/"+job.id : "/apply-job/" + job.id}>
                            <Button size="sm" variant="light" color="bright-sun.4">{edit ? "Edit" : "Apply"}</Button>
                        </Link>
                    }

                    {
                        edit ? <Button variant="outline" color="red.4" onClick={()=>handleDelete(job.id ? job.id :0)}>Delete</Button> : job.saved ? <IconBookmarkFilled onClick={handleToggleSave} className="text-bright-sun-300 hover:cursor-pointer" /> : <IconBookmark onClick={handleToggleSave} className="text-bright-sun-300 hover:cursor-pointer" />
                    }
                </div>
            </div>
            <Divider my="sm" />
            {/* Adding Job info */}
            <div>
                <div className="flex justify-between items-center">
                    <BelowCardDes job={{ name: "Location", icon: IconMapPin, value: job.location }} />
                    <BelowCardDes job={{ name: "Experience", icon: IconBriefcase, value: job.experience }} />
                    <BelowCardDes job={{ name: "Salary", icon: IconPremiumRights, value: job.salary }} />
                    <BelowCardDes job={{ name: "Job Type", icon: IconRecharging, value: job.jobType }} />
                </div>
            </div>
            <Divider my="sm" />
            {/* Adding Required Skills */}
            <div>
                <div className="text-xl font-semibold text-mine-shaft-100 mb-5">Required Skills</div>
                <div className="flex flex-wrap gap-5">
                    {
                        job.skills?.map((skill, index) => (
                            <div key={index} className="bg-bright-sun-300 text-bright-sun-400 font-medium text-sm rounded-3xl bg-opacity-15 px-3 py-1">
                                {skill.skillName}
                            </div>
                        ))
                    }
                </div>
            </div>
            <Divider my="sm" />
            {/* Adding Job Des */}
            <div className="[&_h4]:text-xl [&_h4]:font-semibold [&_h4]:py-2 text-justify [&>*]:text-mine-shaft-300 [&_h4]:text-mine-shaft-200 [&_li]:marker:text-bright-sun-400 [&_li]:mb-1 " dangerouslySetInnerHTML={{ __html: data }}>
            </div>
            <Divider my="sm" />
            <div className="flex flex-col gap-3">
                <div className="text-xl font-semibold text-mine-shaft-100" >About the Companay</div>
                <div className="flex mt-1 justify-between">
                    <div className="flex gap-2 justify-center text-mine-shaft-100">
                        <div className="rounded-lg bg-mine-shaft-50">
                            <img src={`/assets/companies/amzn.png`} alt="logo" />
                        </div>
                        <div className="flex flex-col gap-1 -center">
                            <div className="text-xl font-semibold text-mine-shaft-200">Google</div>
                            <div className="text-sm text-mine-shaft-300">10K+ Employees</div>
                        </div>
                    </div>
                    <Link to={`/company/${job.company}`}>
                        <Button size="sm" variant="light" color="bright-sun.4">Company Page</Button>
                    </Link>
                </div>

                <div className="text-mine-shaft-300 text-justify">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, sit optio? Distinctio maiores fuga ex tempora reiciendis animi qui commodi accusamus officiis! Dolorum nostrum enim debitis recusandae quia quis modi? Sapiente quam dolorum fugit, officiis quaerat placeat molestiae ratione explicabo?
                </div>
            </div>
        </div>
    )
}

export default JobDes;
