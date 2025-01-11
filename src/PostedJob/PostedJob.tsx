import { Tabs, TabsList, TabsPanel } from "@mantine/core";
import PostedJobCard from "./PostedJobCard";
import { activeJobs } from "../Data/CompanyData";

const PostedJob = () => {
    return (
        <div className="w-1/6 py-5 ">
            <div className="text-2xl font-semibold mb-5">Jobs</div>
            <div>
                <Tabs variant="pills" defaultValue="active" autoContrast>
                    <TabsList className="[&_button[aria-selected='false']]:bg-mine-shaft-900 font-medium">
                        <Tabs.Tab value="active">Active [4]</Tabs.Tab>
                        <Tabs.Tab value="drafts">Drafts [2]</Tabs.Tab>
                    </TabsList>

                    <TabsPanel value="active">
                        <div className="mt-5 flex flex-col gap-5">
                            {activeJobs.map((job,index)=>(<PostedJobCard key={index} activeJobs={job}/>))}
                        </div>
                    </TabsPanel>
                    <TabsPanel value="drafts">
                        drafts
                    </TabsPanel>
                </Tabs>
            </div>
        </div>
    )
}
export default PostedJob;