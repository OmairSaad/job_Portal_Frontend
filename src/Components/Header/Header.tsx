import { Button, Indicator } from "@mantine/core";
import { IconBell, IconGhost2 } from "@tabler/icons-react";
import NavLinks from "./Navlinks";
import { Link, useLocation } from "react-router-dom";
import ProfileMenue, { rootState } from "./ProfileMenue";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {connectwebSocket} from "../../websocket/UseWebsocket";
const Header = () => {
    const location = useLocation();
    const user = useSelector((state:rootState)=>state.user);
    useEffect(()=>{
        const stompclient = connectwebSocket(user?.id?user.id:0);
        console.log(stompclient);      
    },[user?.id]) 
    return (
        (location.pathname != "/signup" && location.pathname != "/login") ? <div className="w-full bg-mine-shaft-950 h-20 flex justify-between items-center text-white px-6">
            <div>
                <div className="flex gap-2 items-center text-bright-sun-400">
                    <h2 className="font-bold text-3xl">JobSpark</h2>
                    <IconGhost2 stroke={1.5} className="w-10 h-10" />
                </div>
            </div>
            <NavLinks />
            <div className="flex gap-4 items-center justify-center">
                {
                    user ? <ProfileMenue />: <Link to="/login">
                        <Button variant="subtle" color="bright-sun.4">Login</Button>
                    </Link>
                }
                
                {/* <div className="bg-mine-shaft-800 p-2 rounded-full hover:cursor-pointer hover:bg-mine-shaft-900 transition duration-300 ease-in-out">
                    <IconSettingsCog />
                </div> */}
                <div className="bg-mine-shaft-800 p-2 rounded-full hover:cursor-pointer hover:bg-mine-shaft-900 transition duration-300 ease-in-out">
                    <Indicator color="red" offset={2} size={10} processing>
                        <IconBell />
                    </Indicator>
                </div>
            </div>
        </div> : <></>
    )
}

export default Header;