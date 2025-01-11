import { Button } from "@mantine/core";
import { IconArrowLeftToArc } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import ApplyJobCom from "../ApplyJob/ApplyJobCom";

const ApplyJob = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['Exo 2']">
            <Link to="/jobs" className="my-4 inline-block">
                <Button variant="light" leftSection={<IconArrowLeftToArc size={20} />} color="bright-sun.3" >Back</Button>
            </Link>
            <ApplyJobCom />
        </div>
    )
}
export default ApplyJob;