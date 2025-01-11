import { Button, Divider } from "@mantine/core";
import { IconBookmark } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import BelowCardDes from "./BelowCardDes";
import { Des, JobDesData, Skills } from "../Data/JobDes";
import DOMpurify from "dompurify"
interface JobDesIn{
    edit:boolean
}
const JobDes = ({edit}:JobDesIn) => {
    // Load the des from var but filter it if it consists dangerous script by npm i dompurify
    const data = DOMpurify.sanitize(Des);
    return (
        <div className="w-2/3">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 justify-center text-mine-shaft-100">
                    <div className="rounded-lg bg-mine-shaft-50">
                        <img src={`/assets/companies/amzn.png`} alt="" className="h-14" />
                    </div>
                    <div className="flex flex-col gap-1 items-center justify-center">
                        <div className="text-2xl font-bold">Software Engineer</div>
                        <div className="text-sm text-mine-shaft-200">Google &#x2022; 2 days ago &bull; 45 Applicants</div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Link to={edit?"/edit-post":"/apply-job"}>
                        <Button size="sm" variant="light" color="bright-sun.4">{edit?"Edit":"Apply"}</Button>
                    </Link>
                    {
                        edit ? <Button variant="outline" color="red.4">Delete</Button>:<IconBookmark className="text-bright-sun-300 hover:cursor-pointer" />
                    }
                </div>
            </div>
            <Divider my="sm" />
            {/* Adding Job info */}
            <div>
                <div className="flex justify-between items-center">
                    {
                        JobDesData.map((job) => (
                            <BelowCardDes job={job} />
                        ))
                    }
                </div>
            </div>
            <Divider my="sm" />
            {/* Adding Required Skills */}
            <div>
                <div className="text-xl font-semibold text-mine-shaft-100 mb-5">Required Skills</div>
                <div className="flex flex-wrap gap-5">
                    {
                        Skills.map((skill, index) => (
                            <div key={index} className="bg-bright-sun-300 text-bright-sun-400 font-medium text-sm rounded-3xl bg-opacity-15 px-3 py-1">
                                {skill}
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
                    <Link to="/company">
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