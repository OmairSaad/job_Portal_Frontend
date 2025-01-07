import { IconBriefcase, IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";

const DropdownData = [
    {  
        title:"Job Title",
        options:[
            "Designer","Developer","Product Manager","Marketing Specialist","Writer","Data Analyst"
        ],
        icon:IconSearch
    },
    {
        title:"Location",
        options:["Delhi","New York","France","Washington","Hyderabad","Pune"],
        icon:IconMapPin
    },
    {
        title:"exprience",
        options:["Entry Level","Intermediate","Expert"],
        icon: IconBriefcase
    },
    {
        title:"Job Type",
        options:["internship","Full Time","Part Time","Remote","Offline"],
        icon: IconRecharging
    }
]
export {DropdownData};