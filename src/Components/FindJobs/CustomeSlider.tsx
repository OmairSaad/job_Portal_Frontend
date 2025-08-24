import { RangeSlider } from "@mantine/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store";
import { updateFilter } from "../../Slices/FilterSlice";
const CustomSlider = () => {
    const [value, setValue] = useState<[number, number]>([0, 50]);
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div className="w-1/6 mx-1 text-xs text-mine-shaft-200 [&_.mantine-Slider-label]:!translate-y-11 [&_.mantine-Slider-label]:text-bright-sun-300 [&_.mantine-Slider-label]:font-medium">
            <div className="flex justify-between pb-2">
                <div>Experience (Years)</div>
                <div>
                    {value[0] === 0 && value[1] === 0
                        ? "No experience"
                        : value[0] === value[1]
                            ? `${value[0]} year${value[0] > 1 ? "s" : ""}`
                            : `${value[0]} - ${value[1]} year${value[1] > 1 ? "s" : ""}`}
                </div>
            </div>
            <RangeSlider
                size="xs"
                color="bright-sun.4"
                value={value}
                min={0}
                max={15}
                onChange={setValue}
                label={(val) => `${val}y`}
                labelTransitionProps={{
                    transition: "fade-down",
                    duration: 300,
                    timingFunction: "linear",
                }}
                onChangeEnd={(val) => {
                    console.log("Final:", val);
                    dispatch(updateFilter({ experience: val }));
                }}
            />

        </div>
    )
}
export default CustomSlider;