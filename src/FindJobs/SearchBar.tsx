import { Divider } from "@mantine/core";
import { DropdownData } from "../Data/DropDown";
import MultiInput from "./MultiInput";
import CustomSlider from "./CustomeSlider";
const SearchBar = () => {
    return (
        <div className="flex px-5 py-5">
            {
                DropdownData.map((item,index) => {
                    return (
                        <>
                        <div key={index} className="w-1/5">
                            <MultiInput item={item}  />
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