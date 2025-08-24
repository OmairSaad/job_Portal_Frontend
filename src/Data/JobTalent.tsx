import { IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";

const FindTalent = [
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
        title:"Skill",
        options:["AWS","DevOps","Azure","Google Cloud","Testing","Java","NodeJs","Angular","React","Python"],
        icon: IconRecharging
    }
]

export {FindTalent};