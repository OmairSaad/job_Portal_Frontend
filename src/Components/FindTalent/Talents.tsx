import { useDispatch, useSelector } from "react-redux";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";
import { RootState } from "../../Store";
import { useEffect } from "react";
import { getAllProfiles } from "../../Slices/JobSlice";
import { getFilterProfile, resetFilter } from "../../Slices/FilterSlice";
const Talents = () => {
    const dispatch = useDispatch();
    const {profiles} = useSelector((state: RootState) => state.jobs);
    const {filteredProfiles} = useSelector((state:RootState)=>state.filter);
    useEffect(() => {
        dispatch(getAllProfiles());
        dispatch(getFilterProfile({}))
        console.log(profiles);
        console.log(filteredProfiles)
        dispatch(resetFilter())
    }, []);
    return (
        <div className="px-5 pb-20">
            <div className="text-2xl font-semibold text-mine-shaft-50 flex justify-between items-center">
                Talents
                <Sort />
            </div>
            <div className="flex flex-wrap gap-5 mt-10">
                {
                    filteredProfiles.map((profile,index)=>{
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