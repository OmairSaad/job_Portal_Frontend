import { ActionIcon, Divider, TagsInput, Textarea } from "@mantine/core";
import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil, IconPlus } from "@tabler/icons-react";

import { profileInterface } from "./Interfaces"
import ExpCard from "./ExprienceCard";
import CertiCard from "./CertiCard";
import { useState } from "react";
import SelectInput from "./SelectInput";
import { Fields } from "./Field";
import ExpInput from "./ExpInput";
import CertInput from "./CertInput";

interface profIn {
    profile: profileInterface
}
const Profile = ({ profile }: profIn) => {
    const [edit, setEdit] = useState([false, false, false, false, false]);
    const [about, setAbout] = useState(profile.about);
    const [value, setValue] = useState<string[]>(profile.skills);
    const [addExp, setAddExp] = useState(false);
    const [addCert, setAddCert] = useState(false);
    const handleEdite = (index: number) => {
        const newEdit = [...edit];
        newEdit[index] = !newEdit[index];
        setEdit(newEdit);
        console.log(edit);
    }
    return (
        <div className="w-4/5 mx-auto mb-10">
            <div className="relative">
                <img src="/assets/banner.webp" alt="banner" className="w-full h-44 rounded-t-2xl" />
                <img src="/assets/avatar1.png" alt="avatar" className="h-48 rounded-full -bottom-1/3 left-3 absolute border-mine-shaft-900 border-8" />
            </div>
            <div className="mt-16 px-3">
                <div className="text-3xl font-semibold flex justify-between">
                    {profile.name}  <ActionIcon variant="subtle" color="bright-sun.4" onClick={() => handleEdite(0)}>
                        {
                            edit[0] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />
                        }
                    </ActionIcon>
                </div>

                {
                    edit[0] ? <div className="flex flex-col gap-2">
                        <div className="flex gap-10 [&>*]:w-1/2">
                            <SelectInput field={Fields[0]} setField={profile.role} />
                            <SelectInput field={Fields[1]} setField={profile.company} />
                        </div>
                        <SelectInput field={Fields[2]} setField={profile.loacation} />
                    </div> : <>
                        <div className="flex gap-1 items-center text-lg"> <IconBriefcase /> {profile.role} &bull; {profile.company}</div>
                        <div className="flex text-sm gap-1 items-center text-mine-shaft-300">
                            <IconMapPin className="h-5 w-5" stroke={1.5} /> {profile.loacation}
                        </div>
                    </>
                }

            </div>

            <Divider mx="xs" my="xl" />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3 flex justify-between">About
                    <ActionIcon variant="subtle" color="bright-sun.4" onClick={() => handleEdite(1)}>
                        {
                            edit[1] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />
                        }
                    </ActionIcon>
                </div>
                {
                    edit[1] ? <Textarea minRows={3} placeholder="Write about Yourself" withAsterisk autosize value={about} onChange={(event) => (setAbout(event.currentTarget.value))} /> : <div className="text-sm text-mine-shaft-300 text-justify">
                        {about}
                    </div>
                }


            </div>
            <Divider mx="xs" my="xl" />

            <div className="px-3">
                <div className="text-2xl font-semibold mb-3 flex justify-between">Skills
                    <ActionIcon variant="subtle" color="bright-sun.4" onClick={() => handleEdite(2)}>
                        {
                            edit[2] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />
                        }
                    </ActionIcon>
                </div>
                {
                    edit[2] ? <TagsInput
                        placeholder="Add Skills"
                        splitChars={[',', ' ', '|']}
                        withAsterisk
                        clearable
                        value={value}
                        onChange={setValue}
                    /> : <div className="flex gap-3 flex-wrap">
                        {
                            value.map((skill, index) => (
                                <div key={index} className="bg-bright-sun-300 text-bright-sun-400 font-medium rounded-3xl bg-opacity-15 px-3 py-1">{skill}</div>
                            ))
                        }
                    </div>
                }

            </div>
            <Divider mx="xs" my="xl" />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3 flex justify-between">Exprience

                    <div className="flex gap-5">
                        <ActionIcon variant="subtle" color="bright-sun.4" onClick={() => setAddExp(true)}>
                            <IconPlus className="h-4/5 w-4/5"/>
                        </ActionIcon>

                        <ActionIcon variant="subtle" color="bright-sun.4" onClick={() => handleEdite(3)}>
                            {
                                edit[3] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />
                            }
                        </ActionIcon>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    {
                        profile.exprience.map((ex) => (
                            <ExpCard exp={ex} edit={edit[3]} />
                        ))
                    }
                    {
                        addExp && <ExpInput inputData={{ company: "", desc: "", location: "", role: "" }} setHide={setAddExp} add={true} />

                    }
                </div>
            </div>
            <Divider mx="xs" my="xl" />
            <div className="px-5">
                <div className="text-2xl font-semibold mb-3 flex justify-between">Certifications

                    <div className="flex gap-5">
                        <ActionIcon variant="subtle" color="bright-sun.4" onClick={() => setAddCert(true)}>
                            <IconPlus className="h-4/5 w-4/5"  />
                        </ActionIcon>

                        <ActionIcon variant="subtle" color="bright-sun.4" onClick={() => handleEdite(4)}>
                            {
                                edit[4] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />
                            }
                        </ActionIcon>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    {profile.certifications.map((cer) => (
                        <CertiCard cert={cer} edit={edit[4]} />

                    ))}
                    {
                        addCert && <CertInput add={true} certificate={{certificate:"",company:"",date:"",id:""}} setHide={setAddCert}/>

                    }
                </div>
            </div>

        </div>
    )
}

export default Profile;