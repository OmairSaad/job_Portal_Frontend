import { Button, Divider } from "@mantine/core";
import { IconBookmark } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import BelowCardDes from "./BelowCardDes";
import { JobDesData } from "../Data/JobDes";

const JobDes = () => {
    return (
        <div className="w-2/3">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 justify-center text-mine-shaft-100">
                    <div className="rounded-lg bg-mine-shaft-50">
                        <img src={`src/assets/companies/amzn.png`} alt="" className="h-14" />
                    </div>
                    <div className="flex flex-col gap-1 items-center justify-center">
                        <div className="text-2xl font-bold">Software Engineer</div>
                        <div className="text-sm text-mine-shaft-200">Google &#x2022; 2 days ago &bull; 45 Applicants</div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Link to="apply-job">
                    <Button size="sm" variant="light" color="bright-sun.4">Apply</Button>
                    </Link>
                    <IconBookmark  className="text-bright-sun-300 hover:cursor-pointer" />
                </div>
            </div>
            <Divider my="sm" />
            <div>
                <div className="flex justify-between items-center">
                   {
                    JobDesData.map((job,index)=>(
                      <BelowCardDes key={index} />
                    ))
                   }
                </div>
            </div>
        </div>
    )
}

export default JobDes;