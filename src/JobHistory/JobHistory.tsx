import { Tabs, TabsList } from "@mantine/core";
import HistoryCard from "./HistoryCard";
import JobData from "../Data/JobData";

const JobHistory = () => {
    return (
        <div>
            <div className="text-2xl font-semibold mb-5 pt-5">Job History</div>

            <Tabs variant="outline" radius="lg" defaultValue="applied">
                <TabsList className=" [&_button]:font-semibold [&_button]:!text-lg mb-5 [&_button[data-active='true']]:text-bright-sun-400">
                    <Tabs.Tab value="applied">Applied</Tabs.Tab>
                    <Tabs.Tab value="saved">Saved</Tabs.Tab>
                    <Tabs.Tab value="offered">Offered</Tabs.Tab>
                    <Tabs.Tab value="interviewing">Interviewing</Tabs.Tab>
                </TabsList>

                <Tabs.Panel value="applied">
                    <div className="flex flex-wrap gap-5 mt-5">
                        {
                            JobData.map((job) => {
                                return (
                                    <HistoryCard jobdetails={job} applied={true} saved={false} offered={false} interviewing={false}/>
                                )
                            })
                        }
                    </div>
                </Tabs.Panel>

                <Tabs.Panel value="saved">
                    <div className="flex flex-wrap gap-5 mt-5">
                        {
                            JobData.map((job) => {
                                return (
                                    <HistoryCard jobdetails={job} applied={false} saved={true} offered={false} interviewing={false} />
                                )
                            })
                        }
                    </div>                
                </Tabs.Panel>

                <Tabs.Panel value="offered">
                    <div className="flex flex-wrap gap-5 mt-5">
                        {
                            JobData.map((job) => {
                                return (
                                    <HistoryCard jobdetails={job} applied={false} saved={false} offered={true} interviewing={false} />
                                )
                            })
                        }
                    </div>                
                </Tabs.Panel>

                <Tabs.Panel value="interviewing">
                    <div className="flex flex-wrap gap-5 mt-5">
                        {
                            JobData.map((job) => {
                                return (
                                    <HistoryCard jobdetails={job} applied={false} saved={false} offered={false} interviewing={true}/>
                                )
                            })
                        }
                    </div>
                </Tabs.Panel>
            </Tabs>
        </div>
    )
}
export default JobHistory;