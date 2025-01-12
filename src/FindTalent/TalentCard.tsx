import { ActionIcon, Button, Divider, Modal, rem, Text } from "@mantine/core";
import { DateInput, TimeInput } from '@mantine/dates';
import { useDisclosure } from "@mantine/hooks";
import { IconCalendarMonth, IconClock, IconHeart, IconMapPin } from "@tabler/icons-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
interface TalentInterface {
    talentsDetails: {
        name: string,
        role: string,
        company: string,
        skills: string[],
        ctc: string,
        location: string,
        des: string
    },
    posted: boolean,
    invited: boolean
}
const TalentCard = ({ talentsDetails, posted, invited }: TalentInterface) => {
    const [opened, { open, close }] = useDisclosure(false);
    const [value, setValue] = useState<Date | null>(null);
    const ref = useRef<HTMLInputElement>(null);

    const pickerControl = (
        <ActionIcon variant="subtle" color="gray" onClick={() => ref.current?.showPicker()}>
            <IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
        </ActionIcon>
    );

    return (
        <div className="bg-mine-shaft-900 p-4 w-96 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] shadow-bright-sun-400">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className="p-1 bg-mine-shaft-700 rounded-full">
                        <img src="/assets/avatar1.png" alt="" className="h-10 rounded-full" />
                    </div>
                    <div>
                        <div className="font-bold text-mine-shaft-100">{talentsDetails.name}</div>
                        <div className="text-sm text-mine-shaft-300">{talentsDetails.role} &#x2022;  {talentsDetails.company}</div>
                    </div>
                </div>
                <div>
                    <IconHeart className="text-mine-shaft-300 hover:cursor-pointer" />
                </div>
            </div>
            <div className="flex gap-2 [&_div]:text-bright-sun-400 [&_div]:bg-mine-shaft-800 [&_div]:py-1 [&_div]:rounded-lg [&_div]:px-2 text-sm font-semibold">
                {
                    talentsDetails.skills.map((skill, index) => {
                        return (
                            <div key={index}>{skill}</div>
                        )
                    })
                }
            </div>
            <Text lineClamp={3} className="!text-sm !text-justify !text-mine-shaft-200">
                {talentsDetails.des}
            </Text>
            <Divider size="xs" color="mine-shaft.6" />
            {/* If invited true then print something else */}

            {
                invited ? <div className="text-mine-shaft-300 text-sm flex text-center gap-3">
                    <IconCalendarMonth stroke={1.5} /> Interview: March 27, 2025 18:00
                </div> :
                    <div className="flex justify-between">

                        <div className="font-semibold text-mine-shaft-100">
                            <span>&#8377;{talentsDetails.ctc}</span>
                        </div>
                        <div className="flex gap-1 text-sm items-center">
                            <IconMapPin stroke={1.5} className="h-5 w-5" />{talentsDetails.location}
                        </div>
                    </div>
            }

            <Divider size="xs" color="mine-shaft.6" />
            <div className="flex [&>*]:w-1/2 [&>*]:p-1">
                {
                    !invited && <>
                        <Link to="/talent-profile">
                            <Button radius="md" variant="outline" color="bright-sun.3" fullWidth>Profile</Button>
                        </Link>
                        <div>
                            {
                                posted ? <Button variant="light" onClick={open} radius="md" color="bright-sun.3" fullWidth rightSection={<IconCalendarMonth />}>Schedule</Button> : <Button variant="light" radius="md" color="bright-sun.3" fullWidth>Message</Button>
                            }
                        </div>
                    </>
                }

                {
                    invited && <div className="flex !w-full gap-2">
                        <Button radius="md" variant="outline" color="bright-sun.3" fullWidth>Accept</Button>
                        <Button variant="light" radius="md" color="bright-sun.3" fullWidth>Reject</Button>
                    </div>
                }
            </div>


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
                    <Button variant="light" color="bright-sun.4"  >Schedule</Button>
                </div>
            </Modal>
        </div>
    )
}
export default TalentCard;