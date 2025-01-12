import { Badge, Tabs, TabsList, TabsPanel } from "@mantine/core";
import JobDes from "../JobDescription/JobDes";
import ApplicantCards from "./ApplicantsCard";

const PostedJobDes = () => {
    return (
        <div className=" w-3/4 py-5 ">
            <div className="text-2xl font-semibold flex items-center">Software Engineer <Badge variant="light" color="bright-sun.4" size="sm" mx="sm">Active</Badge>
            </div>
            <div className="font-semibold text-mine-shaft-300">New York, United States</div>

            <div className="mt-5">
                <Tabs defaultValue="overview" radius="lg" variant="outline">
                    <TabsList className="[&_button]:text-lg [&_button]:font-semibold [&_button[data-active='true']]:text-bright-sun-400">
                        <Tabs.Tab value="overview">Overview</Tabs.Tab>
                        <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                        <Tabs.Tab value="invited">Invited</Tabs.Tab>
                    </TabsList>
                    <TabsPanel value="overview" className="[&>div]:w-full">
                        <JobDes edit={true} />
                    </TabsPanel>
                    <TabsPanel value="applicants">
                        <ApplicantCards invited={false} />
                    </TabsPanel>
                    <TabsPanel value="invited">
                    <ApplicantCards invited={true} />
                    </TabsPanel>
                </Tabs>
            </div>
        </div>
    )
}
export default PostedJobDes;