import { Divider, Input } from "@mantine/core";
import CustomSlider from "../FindJobs/CustomeSlider";
import MultiInput from "../FindJobs/MultiInput";
import { FindTalent } from "../Data/JobTalent";
import {IconUserCircle } from "@tabler/icons-react";


const SearchBar = ()=>{
    return (
        <div className="flex px-5 py-5 items-center">
            <div className="flex items-center gap-1">
                <div><IconUserCircle className="text-bright-sun-400 p-1 bg-mine-shaft-900 rounded-full mr-1 cursor-pointer" /></div>
                <Input variant="unstyled" placeholder="Talent Name" />
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
         
         <CustomSlider />
    </div>
    )
}
export default SearchBar;