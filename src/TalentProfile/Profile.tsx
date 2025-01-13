import { Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";

import {profileInterface} from "./Interaces"
import ExpCard from "./ExprienceCard";
import CertiCard from "./CertiCard";

interface profIn{
    profile:profileInterface
}
const Profile = ({profile}:profIn) => {
    return (
        <div className="w-2/3">
            <div className="relative">
                <img src="/assets/banner.webp" alt="banner" className="w-full h-44 rounded-t-2xl" />
                <img src="/assets/avatar1.png" alt="avatar" className="h-48 rounded-full -bottom-1/3 left-3 absolute border-mine-shaft-900 border-8" />
            </div>
            <div className="mt-16 px-3">
                <div className="text-3xl font-semibold flex justify-between">
                    {profile.name} <Button variant="light" radius="md" color="bright-sun.3">Message</Button>
                </div>
                <div className="flex gap-1 items-center text-lg"> <IconBriefcase /> {profile.role} &bull; {profile.company}</div>
                <div className="flex text-sm gap-1 items-center text-mine-shaft-300">
                    <IconMapPin className="h-5 w-5" stroke={1.5} /> {profile.loacation}
                </div>
            </div>

            <Divider mx="xs" my="xl" />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3">About</div>
                <div className="text-sm text-mine-shaft-300 text-justify">
                    {profile.about}
                </div>
            </div>
            <Divider mx="xs" my="xl" />

            <div className="px-3">
                <div className="text-2xl font-semibold mb-3">Skills</div>
                <div className="flex gap-3 flex-wrap">
                    {
                        profile.skills.map((skill,index)=>(
                            <div key={index} className="bg-bright-sun-300 text-bright-sun-400 font-medium rounded-3xl bg-opacity-15 px-3 py-1">{skill}</div>
                        ))
                    }
                </div>
            </div>
            <Divider mx="xs" my="xl" />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3">Exprience</div>
                <div className="flex flex-col gap-3">
                    {
                        profile.exprience.map((ex)=>(
                            <ExpCard exp ={ex}/>
                        ))
                    }
                </div>
            </div>
            <Divider mx="xs" my="xl" />
            <div className="px-5">
                <div className="text-2xl font-semibold mb-3">Certifications</div>
                <div className="flex flex-col gap-5">
                    {profile.certifications.map((cer)=>(
                        <CertiCard cert={cer}  />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Profile;