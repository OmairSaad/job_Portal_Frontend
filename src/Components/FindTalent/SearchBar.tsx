import { Divider, Input } from "@mantine/core";
import CustomSlider from "../FindJobs/CustomeSlider";
import MultiInput from "../FindJobs/MultiInput";
import { FindTalent } from "../../Data/JobTalent";
import {IconUserCircle } from "@tabler/icons-react";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store";
import { updateFilter } from "../../Slices/FilterSlice";


const SearchBar = ()=>{
    const [name, setName] = useState('');
    const timeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const dispatch = useDispatch<AppDispatch>();
    const handleOnchange = (e:  React.ChangeEvent<HTMLInputElement>)=>{
         const val = e.target.value;
         setName(val);
         if(timeRef.current)
         clearInterval(timeRef.current);

         timeRef.current = setTimeout(() => {
            if(val.trim()!="")
            dispatch(updateFilter({name:val}))
         }, 1000);

    }
    return (
        <div className="flex px-5 py-5 items-center">
            <div className="flex items-center gap-1 [&_input]:placeholder:text-mine-shaft-200">
                <div><IconUserCircle className="text-bright-sun-400 p-1 bg-mine-shaft-900 rounded-full mr-1 cursor-pointer" /></div>
                <Input value={name} onChange={(e)=>handleOnchange(e)}  variant="unstyled" placeholder="Talent Name" />
            </div>
        {
            FindTalent.map((item,index) => {
                return (
                    <>
                    <div key={index} className="w-1/5">
                        <MultiInput item={item} />
                    </div>
                    <Divider className="mx-1" size="sm" orientation="vertical" />
                    </>
                    
                )
            })
        } 
         
         <CustomSlider  />
    </div>
    )
}
export default SearchBar;