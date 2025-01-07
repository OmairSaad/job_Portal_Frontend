import { Avatar } from "@mantine/core";
import { work } from "../Data/Data";

const Working = () => {
    return (
        <div>
            <div className="text-4xl text-center font-semibold text-mine-shaft-100 mb-2">How it <span className="text-bright-sun-400">Works?</span></div>
            <div className="text-lg text-mine-shaft-300 mx-auto text-center w-1/2">Effortlessly navigate through the process and land your dream job.</div>

            <div className="flex items-center justify-between relative">
                <div className="left">
                    <div className="w-[30rem]">
                        <img src="src/assets/girl2.png" alt="girl" />
                        <div className="flex flex-col gap-1 items-center w-[14%] p-2 border-bright-sun-300 border rounded-lg  backdrop-blur-md absolute top-[30%] left-[26%]">
                            <div className="">
                                <Avatar src="src/assets/avatar.png" className="!h-16 !w-16"/>
                            </div>
                            <div className="text-mine-shaft-100 font-semibold text-center">
                                Complete your profile
                            </div>
                            <div className="text-mine-shaft-300">
                                70% Completed
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right flex flex-col gap-10">
                    {
                        work.map((item,index) => (

                            <div key={index} className="flex items-center px-20 gap-2">
                                <div className="bg-bright-sun-200 p-2 rounded-full w-12">
                                    <img src={`src/assets/${item.src}`} alt={item.name} />
                                </div>
                                <div>
                                    <div className="text-xl text-mine-shaft-100 font-semibold">
                                        {item.name}
                                    </div>
                                    <div className="text-mine-shaft-200">
                                        {item.des}
                                    </div>
                                </div>
                            </div>

                        ))
                    }

                </div>
            </div>
        </div>
    )
}
export default Working;