import { useParams } from "react-router-dom";
import JobCard from "../FindJobs/JobCard";
import { useEffect, useState } from "react";
import { getAllJobs } from "../../Services/JobService";
import { Job } from "../../Interfaces/PostJob";

const RecommendedJob =()=>{
    const {id}= useParams();
    const [jobs,setJobs] = useState<Job[]>([]);
    useEffect(()=>{
     getAllJobs().then((res)=>{
        setJobs(res.data);
        console.log(res.data);
     }).catch((er)=>{
        console.log(er);
     })
    },[])

    function shuffleArray(arr:Job[]) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Get random index
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
        }
        return arr;
    }
    return (
        <div>
        <div className="text-xl font-bold mb-5 text-mine-shaft-100">Recommended Job </div>
        <div className="flex flex-col flex-wrap gap-3">
            {shuffleArray(jobs).map((d,index)=>(
              d.id !=id && index<6 && <JobCard key={index} jobdetails={d} />
            ))}
        </div>
    </div>
    )
}
export default RecommendedJob;