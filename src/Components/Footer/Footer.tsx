import { IconBrandFacebook, IconBrandInstagram, IconBrandX, IconGhost2 } from "@tabler/icons-react";
import { footerData } from "../../Data/Data";
import { useLocation } from "react-router-dom";
const Footer = () => {
    const location = useLocation();
    return (
       (location.pathname !="/signup" && location.pathname!="/login" )?<div className="bg-mine-shaft-950">
            <div className="flex justify-around gap-5">
                <div className="w-1/4">
                    <div className="flex gap-2 items-center text-bright-sun-400 mb-2">
                        <h2 className="font-bold text-xl">JobSpark</h2>
                        <IconGhost2 stroke={1.5} className="w-5 h-5" />
                    </div>
                    <div className="text-mine-shaft-300">
                        Job portal with user profiles, skill updates, certifications, work exprience and admin job postings.
                    </div>
                    <div className="flex gap-5 mt-4 [&>div]:bg-mine-shaft-700 [&>div]:p-1 [&>div]:rounded-full [&>div]:hover:cursor-pointer [&>div]:text-bright-sun-400">
                        <div>
                            <IconBrandFacebook />
                        </div>
                        <div>
                            <IconBrandInstagram />
                        </div>
                        <div>
                            <IconBrandX />
                        </div>
                    </div>
                </div>

                {
                    footerData.map((item, index) => (
                        <div key={index}>
                            <div className="text-lg text-bright-sun-400 font-semibold mb-2">{item.name}</div>
                            {
                                item.links.map((link,index) => (
                                    <div key={index} className="text-mine-shaft-300 hover:text-bright-sun-400 hover:cursor-pointer hover:translate-x-1 transition duration-300 ease-in-out">{link}</div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
            <div className="text-mine-shaft-300 font-semibold text-center">All right reserved &copy; {new Date().getFullYear()}</div>
        </div>:<></>
    )
}
export default Footer;