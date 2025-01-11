import { Avatar, AvatarGroup, Divider, Tabs } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import AboutCom from "./AboutCom";
import JobCom from "./JobCom";
import EmployeeCom from "./EmployeeCom";

const Company = () => {
    return (
        <div className="w-3/4">
            <div className="relative">
                <img src="/src/assets/banner.webp" alt="banner" className="w-full h-44 rounded-t-2xl" />
                <img src="/src/assets/companies/netflix.png" alt="avatar" className=" w-20 h-20 rounded-3xl -bottom-1/4 left-5 absolute border-mine-shaft-900 border-8 bg-mine-shaft-950" />
            </div>
            <div className="mt-16 px-3">
                <div className="text-3xl font-semibold flex justify-between [&>div]:text-mine-shaft-100">
                    <div>Netflix</div>
                    <AvatarGroup>
                        <Avatar src="/src/assets/avatar.png" />
                        <Avatar src="/src/assets/avatar1.png" />
                        <Avatar src="/src/assets/avatar2.png" />
                        <Avatar className="text-xs">+9K</Avatar>
                    </AvatarGroup>
                </div>
                <div className="flex gap-1 items-center text-mine-shaft-300">
                    <IconMapPin className="h-5 w-5" stroke={1.5} /> New York, United States
                </div>
                <Divider my="xl" />

                <div>
                    <Tabs defaultValue="about" variant="outline" radius="md">
                        <Tabs.List className="[&_button]:text-lg [&_button]:font-semibold [&_button[data-active='true']]:text-bright-sun-400">
                            <Tabs.Tab value="about">About</Tabs.Tab>
                            <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
                            <Tabs.Tab value="employees">Employees</Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="about">
                            <AboutCom />
                        </Tabs.Panel>

                        <Tabs.Panel value="jobs">
                            <JobCom/>
                        </Tabs.Panel>

                        <Tabs.Panel value="employees">
                            <EmployeeCom />
                        </Tabs.Panel>
                    </Tabs>
                </div>
            </div>

        </div>
    )
}
export default Company;