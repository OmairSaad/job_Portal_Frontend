import { ActionIcon, Avatar, Divider, FileInput, Overlay, TagsInput, Textarea } from "@mantine/core";
import { IconBriefcase, IconCircleX, IconDeviceFloppy, IconEdit, IconMapPin, IconPencil, IconPlus } from "@tabler/icons-react";
import ExpCard from "./ExprienceCard";
import CertiCard from "./CertiCard";
import { useEffect, useState } from "react";
import SelectInput from "./SelectInput";
import { Fields } from "./Field";
import ExpInput from "./ExpInput";
import CertInput from "./CertInput";
import { getBase64, getProfile, updateAbout, updateInfo, updateProfilePicture, updateSkills } from "../../Services/ProfileService";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../Header/ProfileMenue";

import { formattedDate } from "../../Services/DateFormatter";
import { useHover } from "@mantine/hooks";
import { saveProfile } from "../../Slices/ProfileSlice";
import { errorNotf, succesNotf } from "../../Services/Notification";

const Profile = () => {
    const [edit, setEdit] = useState([false, false, false, false, false]);
    const { hovered, ref } = useHover();
    const [value, setValue] = useState<string[]>([]);
    const [addExp, setAddExp] = useState(false);
    const [addCert, setAddCert] = useState(false);
    const [about, setAbout] = useState("");
    const user = useSelector((state: rootState) => state.user);
    const Profile = useSelector((state: rootState) => state.profile);
    const dispatch = useDispatch();
    useEffect(() => {
        fetchProfile();
        console.log(Profile);
    }, []);
    const fetchProfile = () => {
        getProfile(user.id).then((res) => {
            console.log(res.data);
            dispatch(saveProfile(res.data));
            // setProfile(res.data)
            setInfo({ role: res.data.role, company: res.data.company, location: res.data.location })
            setAbout(res.data.about)
            const skills = res.data.skills.map((skill) => skill.skillName);
            setValue(skills);
        })
            .catch((er) => console.log(er));
    }
    const handleEdit = (index: number) => {
        const newEdit = [...edit];
        newEdit[index] = !newEdit[index];
        setEdit(newEdit);
        console.log(edit);
    }
    const [info, setInfo] = useState({
        role: "",
        company: "",
        location: ""
    })
    const handlInfo = (field: string, val: string) => {
        setInfo((prev) => (
            {
                ...prev, [field]: val
            }
        ));
    }

    const handlinfoCall = () => {
        updateInfo(info, user.id).then((res) => {
            console.log(res)
            succesNotf("Profile Updated Successfully", "Your Profile Info has been updated successfully! 🎉");
            fetchProfile();
        })
            .catch((er) => {
                console.log(er);
                errorNotf("Profile Update Failed", er.response.data.errorMessage);
            })
    }

    const handleAboutCall = () => {
        updateAbout(about, user.id).then((res) => {
            console.log(res)
            succesNotf("Profile Updated Successfully", "Your About has been updated successfully! 🎉");
            fetchProfile();
        }).catch((er) => {
                console.log(er);
                errorNotf("Profile Update Failed", er.response.data.errorMessage);
        })
    }

    const handlSkillCall = () => {
        updateSkills(value, user.id).then((res) => {
            console.log(res);
            succesNotf("Profile Updated Successfully", "Your Skill has been updated successfully! 🎉");
            fetchProfile();
        }).catch((er) => {
            console.log(er);
            errorNotf("Profile Update Failed", er.response.data.errorMessage);
        })
    }

    const handleFileChange = async (file: File | null) => {
        if (!file) {
            console.log("No file selected.");
            return;
        }

        try {
            const baseImg = await getBase64(file); // Get the Base64 string
            const img = (baseImg as string).split(",")[1]; // Extract the part after "data:"
            updateProfilePicture(img, user.id).then((res) => {
                console.log(res.data);
                succesNotf(" Profile Picture Updated", "Your profile picture has been successfully updated! 🎉")
                fetchProfile();
            }).catch((er) => {
                console.log(er)
                errorNotf("Profile Picture Update Failed", "Something went wrong while updating your profile picture. Please try again.")
            });
        } catch (error) {
            console.error("Error converting image to Base64:", error);
        }
    };

   
    return (
        <div className="w-4/5 mx-auto mb-10">
            <div className="relative">
                <img src="/assets/banner.webp" alt="banner" className="w-full h-44 rounded-t-2xl" />
                <div ref={ref} className="absolute -bottom-1/3 left-3 flex items-center justify-center">
                    <Avatar className="!w-48 !h-48 border-mine-shaft-900 border-8 rounded-full"
                        src={Profile.picture ? `data:image/jpeg;base64,${Profile.picture}` : "/assets/avatar1.png"} />
                    {hovered && <Overlay color="#000" backgroundOpacity={0.55} blur={5} className="!rounded-full" />}
                    {hovered && (
                        <IconEdit className="absolute !z-[300] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 !h-12 !w-12" />
                    )}

                    {
                        hovered && <FileInput
                            className="absolute w-full z-[301] [&_*]:!rounded-full [&_*]:!h-full !h-full" variant="transparent"
                            accept="image/png,image/jpeg"
                            onChange={handleFileChange}
                        />
                    }
                </div>
            </div>
            <div className="mt-16 px-3">
                <div className="text-3xl font-semibold flex justify-between">
                    {Profile.name}  <ActionIcon variant="subtle" color="bright-sun.4" onClick={() => handleEdit(0)}>
                        {
                            edit[0] ? <IconDeviceFloppy className="h-4/5 w-4/5" onClick={handlinfoCall} /> : <IconPencil className="h-4/5 w-4/5" />
                        }
                    </ActionIcon>
                </div>

                {
                    edit[0] ? <div className="flex flex-col gap-2 mt-1">
                        <div className="flex gap-10 [&>*]:w-1/2">
                            <SelectInput field={Fields[0]} setField={Profile.role} info={handlInfo} name="role" />
                            <SelectInput field={Fields[1]} setField={Profile.company} info={handlInfo} name="company" />
                        </div>
                        <SelectInput field={Fields[2]} setField={Profile.location} info={handlInfo} name="location" />
                    </div> : <>
                        <div className="flex gap-1 items-center text-lg"> <IconBriefcase /> {Profile.role} &bull; {Profile.company}</div>
                        <div className="flex text-sm gap-1 items-center text-mine-shaft-300">
                            <IconMapPin className="h-5 w-5" stroke={1.5} /> {Profile.location}
                        </div>
                    </>
                }

            </div>

            <Divider mx="xs" my="xl" />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3 flex justify-between">About
                    <ActionIcon variant="subtle" color="bright-sun.4" onClick={() => handleEdit(1)}>
                        {
                            edit[1] ? <IconDeviceFloppy className="h-4/5 w-4/5" onClick={handleAboutCall} /> : <IconPencil className="h-4/5 w-4/5" />
                        }
                    </ActionIcon>
                </div>
                {
                    edit[1] ? <Textarea minRows={3} placeholder="Write about Yourself" withAsterisk autosize value={about} onChange={(event) => (setAbout(event.currentTarget.value))} /> : <div className="text-sm text-mine-shaft-300 text-justify">
                        {Profile.about}
                    </div>
                }


            </div>
            <Divider mx="xs" my="xl" />

            <div className="px-3">
                <div className="text-2xl font-semibold mb-3 flex justify-between">Skills
                    <ActionIcon variant="subtle" color="bright-sun.4" onClick={() => handleEdit(2)}>
                        {
                            edit[2] ? <IconDeviceFloppy className="h-4/5 w-4/5" onClick={handlSkillCall} /> : <IconPencil className="h-4/5 w-4/5" />
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
                            Profile.skills.map((skill, index) => (
                                <div key={index} className="bg-bright-sun-300 text-bright-sun-400 font-medium rounded-3xl bg-opacity-15 px-3 py-1">{skill.skillName}</div>
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
                            <IconPlus className="h-4/5 w-4/5" />
                        </ActionIcon>

                        <ActionIcon variant="subtle" color="bright-sun.4" onClick={() => handleEdit(3)} disabled={Profile.expriences.length == 0}>
                            {
                                (Profile.expriences.length == 0 ? false : edit[3]) ? <IconCircleX className="h-4/5 w-4/5" color="red" /> : <IconPencil className="h-4/5 w-4/5" />
                            }
                        </ActionIcon>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    {
                        Profile.expriences.map((ex) => (
                            <ExpCard profileId={Profile.id} exp={ex} edit={edit[3]} fetchData={fetchProfile} />
                        ))
                    }
                    {
                        addExp && <ExpInput inputData={{ company: "", des: "", location: "", role: "", id: 0, endDate: formattedDate(new Date()), joinDate: formattedDate(new Date()) }} setHide={setAddExp} add={true} profileId={Profile.id} fetchData={fetchProfile} />

                    }
                </div>
            </div>
            <Divider mx="xs" my="xl" />
            <div className="px-5">
                <div className="text-2xl font-semibold mb-3 flex justify-between">Certifications

                    <div className="flex gap-5">
                        <ActionIcon variant="subtle" color="bright-sun.4" onClick={() => setAddCert(true)}>
                            <IconPlus className="h-4/5 w-4/5" />
                        </ActionIcon>

                        <ActionIcon variant="subtle" color="bright-sun.4" onClick={() => handleEdit(4)} disabled={Profile.certifications.length == 0}>
                            {
                                (Profile.certifications.length == 0 ? false : edit[4]) ? <IconCircleX className="h-4/5 w-4/5" color="red" /> : <IconPencil className="h-4/5 w-4/5" />
                            }
                        </ActionIcon>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    {Profile.certifications.map((cer) => (
                        <CertiCard cert={cer} edit={edit[4]} profileId={Profile.id} fetchData={fetchProfile} />

                    ))}
                    {
                        addCert && <CertInput fetchData={fetchProfile} profileId={Profile.id} add={true} certificate={{ certificate: "", company: "", certificateId: "", id: 0, issueDate: formattedDate(new Date()) }} setHide={setAddCert} />

                    }
                </div>
            </div>

        </div>
    )
}

export default Profile;