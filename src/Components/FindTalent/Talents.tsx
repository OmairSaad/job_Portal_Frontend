import { useDispatch, useSelector } from "react-redux";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";
import { RootState } from "../../Store";
import { useEffect } from "react";
import { getAllProfiles } from "../../Slices/JobSlice";
const Talents = () => {
    const dispatch = useDispatch();
    const {profiles} = useSelector((state: RootState) => state.jobs);
    useEffect(() => {
        dispatch(getAllProfiles())
        console.log(profiles);
    }, []);
    return (
        <div className="px-5 pb-20">
            <div className="text-2xl font-semibold text-mine-shaft-50 flex justify-between items-center">
                Talents
                <Sort />
            </div>
            <div className="flex flex-wrap gap-5 mt-10">
                {
                    profiles.map((profile,index)=>{
                        return(
                            <TalentCard invited={false} key={index} talentsDetails={{applicantId:0, applicationStatus:"APPLIED",cover:"",email:"",interviewDate:"",interviewTime:"",name:"",phone:"",profile:profile,resume:"",timestamp:"",website:""}} posted={false} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Talents;