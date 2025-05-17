import { Button } from "@mantine/core";
import { IconArrowLeftToArc } from "@tabler/icons-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import JobDes from "../Components/JobDescription/JobDes";
import RecommendedJob from "../Components/JobDescription/RecommendedJob";
import { useEffect } from "react";
import { Job } from "../Interfaces/PostJob";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store";
import { getJobById } from "../Slices/JobSlice";
const JobDesPage = () => {
    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    })
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();
    const {job} = useSelector((state:RootState)=>state.jobs);
    const user = useSelector((state:RootState)=>state.user);
    
    useEffect(() => {
        dispatch(getJobById({jobId:id,userId:user.id}));
        console.log(job);
    },[dispatch,id])
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['Exo 2'] p-4 pb-16">
            <div  className="my-4 inline-block">
                <Button onClick={()=> navigate(-1)} variant="light" leftSection={<IconArrowLeftToArc size={20} />} color="bright-sun.3" >Back</Button>
            </div>

            <div className="flex gap-5 justify-around">
                <JobDes edit={false} job={job} />
                <RecommendedJob />
            </div>
        </div>
    )
}
export default JobDesPage;