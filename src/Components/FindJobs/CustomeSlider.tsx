import { RangeSlider } from "@mantine/core";
import { useState } from "react";
const CustomSlider = () => {
    const [value, setValue] = useState<[number, number]>([0, 92828]);
    return (
        <div className="w-1/6 mx-1 text-xs text-mine-shaft-200 [&_.mantine-Slider-label]:!translate-y-11 [&_.mantine-Slider-label]:text-bright-sun-300 [&_.mantine-Slider-label]:font-medium">
            <div className="flex justify-between pb-2">
                <div >Salary</div>
                <div>{value[0]} LPA&#8377; -  &#8377;{value[1]} LPA</div>
            </div>
            <RangeSlider size="xs" color="bright-sun.4" value={value} onChange={setValue} labelTransitionProps={{transition:"fade-down",duration:300,timingFunction:"linear"}} />
        </div>
    )
}
export default CustomSlider;