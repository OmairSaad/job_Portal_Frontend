import { IconBriefcase, IconFileCertificate, IconMapPin } from "@tabler/icons-react";

const Fields = [
    {
        label:"Job title",
        placeholder:"Enter Job Title",
        options:["Designer","Editor","Developer","Marketing","Data Analyst","Content Writer","Customer Support","Software Engineer"],
        icon:IconBriefcase
    },
    {
        label:"Company",
        placeholder:"Enter Company Name",
        options:["Google","Amazon","Facebook","Adobe","Oracle","Accenture","Microsoft"],
        icon:IconBriefcase
    },
    {
        label:"Location",
        placeholder:"Enter Job Location",
        options:["Delhi","New York","Hyderabad","Berlin","Tokyo","Sydney","Bangaluru","Lucknow , India"],
        icon:IconMapPin
    },
    {
        label:"Total Exprience",
        placeholder:"Enter Exprience",
        options:["1","2","3","4"],
        icon:IconMapPin
    },
    
]

const CertificateFileds = [
    {
        label:"Certificate name",
        placeholder:"Enter certificate name",
        options:["Meta Certification","Google Cloud Certification","Azure Cloud Certification"],
        icon: IconFileCertificate
    },
    {
        label:"Company",
        placeholder:"Enter company name",
        options:["Google","Amazon","Facebook","Adobe","Oracle","Accenture","Microsoft"],
        icon: IconBriefcase
    },
    {
        label:"Certificate Id",
        placeholder:"Enter certificate number",
        options:[],
        icon: IconFileCertificate
    },

]
export {Fields, CertificateFileds};