import { Button } from "@mantine/core";
import { IconArrowLeftToArc } from "@tabler/icons-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Company from "../Components/CompanyProfile/Company";
import SimilarCom from "../Components/CompanyProfile/SimilarCom";

const CompanyJob = () => {
    useEffect(()=>{
        window.scrollTo({top:0,behavior:"smooth"})
    })
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['Exo 2'] px-4 pb-20">
            <Link to="/jobs" className="my-4 inline-block">
                <Button variant="light" leftSection={<IconArrowLeftToArc size={20} />} color="bright-sun.3" >Back</Button>
            </Link>
            <div className="flex gap-1 justify-between">
            <Company />
            <SimilarCom />
            </div>
        </div>
    )
}
export default CompanyJob;