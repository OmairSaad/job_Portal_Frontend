import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
    const nv = [
        { 
            name: "Home", url: "/" 
        },
        {
            name: "Find Jobs", url: "/find-jobs",
        },
        {
            name: "Find Talent", url: "/find-talent",
        },
        {
            name: "Post Job", url: "/post-job",
        },
    ]
    const location = useLocation();
    return (
        <div className="flex gap-5 items-center h-full text-mine-shaft-300">
                {
                    nv.map((e)=>(
                        <div key={e.url} className={`border-t-[3px] h-full flex items-center ${location.pathname==e.url ? "border-bright-sun-300 text-bright-sun-300":"border-transparent"}`}>
                            {/* <NavLink to={e.url} className={(props)=> props.isActive?"text-bright-sun-400":"text-blue-500"}>{e.name}</NavLink> */}
                            <Link  to={e.url}>{e.name}</Link>
                        </div>
                    ))
                }
        </div> 
    )
}

export default NavLinks;