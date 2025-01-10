import { Button } from "@mantine/core";
import { IconArrowLeftToArc } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import JobDes from "../JobDescription/JobDes";
import RecommendedJob from "../JobDescription/RecommendedJob";
import { useEffect } from "react";
const JobDesPage = () => {
    useEffect(()=>{
        window.scroll({
            top:0,
            behavior:"smooth"
        })
    })
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['Exo 2'] p-4 pb-16">
            <Link to="/find-jobs" className="my-4 inline-block">
                <Button variant="light" leftSection={<IconArrowLeftToArc size={20} />} color="bright-sun.3" >Back</Button>
            </Link>

            <div className="flex gap-5 justify-around">
               <JobDes />
               <RecommendedJob />
            </div>
        </div>
    )
}
export default JobDesPage;