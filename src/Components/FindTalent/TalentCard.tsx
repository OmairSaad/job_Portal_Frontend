import { ActionIcon, Button, Divider, Modal, rem, Text } from "@mantine/core";
import { DateInput, TimeInput } from '@mantine/dates';
import { useDisclosure } from "@mantine/hooks";
import { IconCalendarMonth, IconClock, IconHeart, IconMapPin } from "@tabler/icons-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ApplicantWithProfile, updateApplicationStatus } from "../../Slices/JobSlice";
import { useDispatch } from "react-redux";
import {  formatToDayMonth, formatToTime } from "../../Services/DateFormatter";
import { viewBase64Pdf } from "../../Services/ProfileService";
interface TalentInterface {
    talentsDetails: ApplicantWithProfile,
    posted: boolean,
    invited: boolean
}
const TalentCard = ({ talentsDetails, posted, invited }: TalentInterface) => {
    const [opened, { open, close }] = useDisclosure(false);
    const [appOpened, app] = useDisclosure(false);

    const [value, setValue] = useState<Date | null>(null);
    const ref = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const pickerControl = (
        <ActionIcon variant="subtle" color="gray" onClick={() => ref.current?.showPicker()}>
            <IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
        </ActionIcon>
    );

    const changeApplicationStatus = (status: string) => {
        const data = { interviewDate: value, interviewTime: ref.current?.value, applicationStatus: status };
        console.log(data);
        setValue(null);
        if (ref.current) {
            ref.current.value = "";
        }
        dispatch(updateApplicationStatus({ id: talentsDetails.applicantId, data: data }))
    }
    return (
        
        <div className="bg-mine-shaft-900 p-4 w-96 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] shadow-bright-sun-400">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className="p-1 bg-mine-shaft-700 rounded-full">
                        <img
                            // src="/assets/avatar1.png" alt="" className="h-10 rounded-full"
                            src={talentsDetails.profile.picture ? `data:image/jpeg;base64,${talentsDetails.profile.picture}` : "/assets/avatar1.png"} className="h-10 rounded-full"

                        />
                    </div>
                    <div>
                        <div className="font-bold text-mine-shaft-100">{talentsDetails.profile.name}</div>
                        <div className="text-sm text-mine-shaft-300">{talentsDetails.profile.role} &#x2022;  {talentsDetails.profile.company}</div>
                    </div>
                </div>
                <div>
                    <IconHeart className="text-mine-shaft-300 hover:cursor-pointer" />
                </div>
            </div>
            <div className="flex gap-2 [&_div]:text-bright-sun-400 [&_div]:bg-mine-shaft-800 [&_div]:py-1 [&_div]:rounded-lg [&_div]:px-2 text-sm font-semibold">
                {
                    talentsDetails.profile.skills.map((skill, index) => {
                        return (
                            index < 3 && <div key={index}>{skill.skillName}</div>
                        )
                    })
                }
            </div>
            <Text lineClamp={3} className="!text-sm !text-justify !text-mine-shaft-200">
                {talentsDetails.profile.about}
            </Text>
            <Divider size="xs" color="mine-shaft.6" />
            {/* If invited true then print something else */}

            {
                talentsDetails.applicationStatus == "INTERVIEWING" ? <div className="text-mine-shaft-300 text-sm flex text-center items-center gap-3">
                    <IconCalendarMonth stroke={1.5} />  Interview: {formatToDayMonth(talentsDetails.interviewDate)} , 2025 &bull;{formatToTime(talentsDetails.interviewTime)}
                </div> :
                    <div className="flex justify-between">
                        <div className="font-semibold text-mine-shaft-100">
                            <span>&#8377; 42 LPA </span>
                        </div>
                        <div className="flex gap-1 text-sm items-center">
                            <IconMapPin stroke={1.5} className="h-5 w-5" />{talentsDetails.profile.location}
                        </div>
                    </div>
            }

            <Divider size="xs" color="mine-shaft.6" />

            <div className="flex [&>*]:w-1/2 [&>*]:p-1">
                {
                    talentsDetails.applicationStatus != "INTERVIEWING" && <>
                        <Link to={`/talent-profile/${talentsDetails.profile.id}`}>
                            <Button radius="md" variant="outline" color="bright-sun.3" fullWidth>Profile</Button>
                        </Link>
                        <div>
                            {
                                talentsDetails.applicationStatus == "APPLIED" && posted ? <Button variant="light" onClick={open} radius="md" color="bright-sun.3" fullWidth rightSection={<IconCalendarMonth />}>Schedule</Button> : <Button variant="light" radius="md" color="bright-sun.3" fullWidth>Message</Button>
                            }
                        </div>
                    </>
                }



                {
                    talentsDetails.applicationStatus == "INTERVIEWING" && <div className="flex !w-full gap-2">
                        <Button radius="md" variant="outline" color="bright-sun.3" fullWidth onClick={() => changeApplicationStatus("OFFERED")}>Accept</Button>
                        <Button variant="light" radius="md" color="bright-sun.3" fullWidth onClick={() => changeApplicationStatus("REJECTED")}>Reject</Button>
                    </div>
                }
            </div>
            {
                (talentsDetails.resume && (talentsDetails.applicationStatus == "APPLIED" || talentsDetails.applicationStatus == "INTERVIEWING")) && <Button onClick={app.open} autoContrast>View Application</Button>
            }

            {/* Modal for scheduling Interviews */}

            <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
                <div className="flex flex-col gap-4">
                    <DateInput
                        minDate={new Date()}
                        value={value}
                        onChange={setValue}
                        label="Date"
                        placeholder="Enter Date"
                    />
                    <TimeInput label="Time" ref={ref} rightSection={pickerControl} />
                    <Button variant="light" color="bright-sun.4" onClick={() => changeApplicationStatus("INTERVIEWING")}  >Schedule</Button>
                </div>
            </Modal>

            <Modal opened={appOpened} onClose={app.close} title="Application" centered>
                <div>
                    <div>
                        Name: &emsp;<a className="text-bright-sun-400 hover:underline cursor-pointer text-center">{talentsDetails.name}</a>
                    </div>
                    <div>
                        Email: &emsp;<a className="text-bright-sun-400 hover:underline cursor-pointer text-center" href={`mailto:${talentsDetails.email}`}>{talentsDetails.email}</a>
                    </div>
                    <div>
                        Phone: &emsp;<a className="text-bright-sun-400 hover:underline cursor-pointer text-center" href={`phoneto:${talentsDetails.phone}`}>{talentsDetails.phone}</a>
                    </div>
                    <div>
                        website: &emsp;<a className="text-bright-sun-400 hover:underline cursor-pointer text-center" target="_blank" href={`phoneto:${talentsDetails.website}`}>{talentsDetails.website}</a>
                    </div>
                    <div>
                        Cover: &emsp;<a className="text-bright-sun-400 hover:underline cursor-pointer text-center" >{talentsDetails.cover}</a>
                    </div>
                    <div>
                        Resume: &emsp;<a className="text-bright-sun-400 hover:underline cursor-pointer text-center" onClick={()=>viewBase64Pdf(talentsDetails.resume)}>View</a>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
export default TalentCard;