import axios from "axios";
import { base_url } from "../Baseurl";

export interface userIn {
    password: string,
    confirmPassword?:string,
    email: string,
    name: string,
    role: string
}
export interface loginIn{
    password: string,
    email: string,
}
const registerUser = async(user: userIn) => {
    return axios.post(`${base_url}register`, user)
        .then((res) => res.data)
        .catch((e) => {
            throw e;
        })
}

const loginUser = async(user: loginIn) => {
    return axios.post(`${base_url}login`, user)
        .then((res) => res.data)
        .catch((e) => {
            throw e;
        })
}

const sendOtp =async (email:string)=>{
    return axios.post(`${base_url}send-otp/${email}`)
    .then((res)=>res.data)
    .catch((er)=>{
        throw er;
    })
}
const verifyOtp =async (email:string, otp:string)=>{
    return axios.get(`${base_url}verify-otp/${email}/${otp}`)
    .then((res)=>res.data)
    .catch((er)=>{
        throw er;
    });
}
const changePassword = async (email:string, password:string)=>{
    return axios.post(`${base_url}change-password`,{email,password})
    .then((res)=>res.data)
    .catch((er)=>{
        throw er;
    });
}


export {registerUser,loginUser, sendOtp,verifyOtp,changePassword};