import { Avatar, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const DreamJob = () => {
    return (
        <div className="text-mine-shaft-100 flex items-center px-16">
            <div className="left flex flex-col w-[45%] gap-4">
                <div className="text-6xl font-bold">Find your <span className="text-bright-sun-400">dream job </span>with us</div>
                <div className="text-mine-shaft-100 text-lg">Good life begins with a good company. Start exploring thousands of jobs in one place</div>
                <div className="flex gap-3 items-center">
                    <TextInput
                        label="Job Title"
                        placeholder="Andriod Developer"
                    />
                    <TextInput
                        label="Job Type"
                        placeholder="Full Time"
                    />
                    <div className="flex items-center justify-center bg-mine-shaft-600 p-2 rounded-full cursor-pointer hover:bg-mine-shaft-700 mt-6">
                        <IconSearch />
                    </div>
                </div>
            </div>
            <div className="right w-[55%] flex items-center justify-center">
                <div className="w-[29rem] relative">
                    <img src="/assets/boy5.png" alt="boy" />
                    <div className="w-fit top-[25%] -right-5 border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md absolute">
                        <div className="text-center text-mine-shaft-100 mb-2 text-sm">10k+ got job</div>
                        <Avatar.Group>
                            <Avatar src="/assets/avatar1.png" alt="avatar" />
                            <Avatar src="/assets/avatar2.png" alt="avatar" />
                            <Avatar src="/assets/avatar.png" alt="avatar" />
                            <Avatar>+9K</Avatar>
                        </Avatar.Group>
                    </div>

                    <div className="w-fit border-bright-sun-400 border p-2 rounded-lg backdrop-blur-md flex flex-col absolute top-[30%] left-0 gap-2">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-mine-shaft-800 rounded-lg">
                                <img src="/assets/google.png" alt="" />
                            </div>
                            <div className="text-sm text-mine-shaft-100">
                                <div>Software Engineer</div>
                                <div className="text-xs text-mine-shaft-200">New York</div>
                            </div>
                        </div>
                        <div className="text-xs flex gap-2 text-mine-shaft-200 justify-around">
                            <span>1 day ago</span>
                            <span>120 Applicants</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DreamJob;