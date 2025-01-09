import { Avatar, Indicator } from "@mantine/core";
import { IconBell, IconGhost2, IconSettingsCog } from "@tabler/icons-react";
import NavLinks from "./Navlinks";
const Header = () => {
    return (
        <div className="w-full bg-mine-shaft-950 h-20 flex justify-between items-center text-white px-6">
            <div>
                <div className="flex gap-2 items-center text-bright-sun-400">
                    <h2 className="font-bold text-3xl">JobSpark</h2>
                    <IconGhost2 stroke={1.5} className="w-10 h-10" />
                </div>
            </div>
            <NavLinks/>
            <div className="flex gap-4 items-center justify-center">
                <div className="bg-mine-shaft-800 p-2 rounded-full hover:cursor-pointer hover:bg-mine-shaft-900 transition duration-300 ease-in-out">
                    <IconSettingsCog />
                </div>
                <div className="flex items-center justify-center gap-3">
                    <h3>Omair</h3>
                    <Avatar src="src\assets\avatar1.png" alt="it's me" className="hover:cursor-pointer" />
                </div>
                <div className="bg-mine-shaft-800 p-2 rounded-full hover:cursor-pointer hover:bg-mine-shaft-900 transition duration-300 ease-in-out">
                    <Indicator color="red" offset={2} size={10} processing>
                        <IconBell />
                    </Indicator>
                </div>
            </div>
        </div>
    )
}

export default Header;