import { Button } from "@mantine/core";
import { IconArrowLeftToArc } from "@tabler/icons-react";
import {  useNavigate, useParams } from "react-router-dom";
import ApplyJobCom from "../Components/ApplyJob/ApplyJobCom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store";
import { getJobById } from "../Slices/JobSlice";

const ApplyJob = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const dispatch = useDispatch();
    const {job} = useSelector((state:RootState)=>state.jobs);
    const user = useSelector((state:RootState)=>state.user);
    useEffect(()=>{
      dispatch(getJobById({jobId:id,userId:user.id}));
    },[id,dispatch]);
    

    
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['Exo 2']">
                <Button my="md" variant="light" onClick={()=>navigate(-1)} leftSection={<IconArrowLeftToArc size={20} />} color="bright-sun.3" >Back</Button>
            <ApplyJobCom jobDetails = {job}  />
        </div>
    )
}
export default ApplyJob;