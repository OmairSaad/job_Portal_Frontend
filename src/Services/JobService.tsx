import axios from "axios"
import { base_url } from "../Baseurl"
import { PostJobIn } from "../Interfaces/PostJob"
import { AppIn } from "../Components/ApplyJob/ApplicationForm";

const addJob = (data:PostJobIn, id:number)=>{
    const transformedData = {
        ...data,
        skills: data.skills.map(skill => ({ skillName: skill })),
    };
    return axios.post(`${base_url}jobs/user/${id}`,transformedData).then((res)=>res)
    .catch((er)=>{
        throw er;
    })
}

const getAllJobs = ()=>{
    return axios.get(`${base_url}jobs`).then((res)=>res)
    .catch((er)=>{
        throw er;
    })
}

const getJobById = (id:number)=>{
    return axios.get(`${base_url}jobs/${id}`).then((res)=>res)
    .catch((er)=>{
        throw er;
    })
}

const getJobByUserId = (id:number)=>{
    return axios.get(`${base_url}jobs/user/${id}`).then((res)=>res)
    .catch((er)=>{
        throw er;
    })
}

const applyJob = (jobId:number, userId:number, data:AppIn)=>{
    return axios.post(`${base_url}jobs/${jobId}/user/${userId}`,data).then((res)=>res)
    .catch((er)=>{
        throw er;
    })
}
export {addJob, getAllJobs, getJobById,getJobByUserId, applyJob};