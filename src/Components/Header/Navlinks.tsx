import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
    const nv = [
        {
            name: "Find Jobs", url: "/find-jobs",
        },
        {
            name: "Find Talent", url: "/find-talent",
        },
        {
            name: "Post Job", url: "/post-job",
        },
        {
            name: "Posted Jobs", url: "/posted-jobs/0"
        }, 
        {
            name:"Job History",url:"/job-history"
        },
    ]
    const location = useLocation();
    return (
        <div className="flex gap-5 items-center h-full text-mine-shaft-300">
            {
                nv.map((e) => (
                    <div key={e.url} className={`border-t-[3px] h-full flex items-center ${location.pathname == e.url ? "border-bright-sun-300 text-bright-sun-300" : "border-transparent"}`}>
                        <Link to={e.url}>{e.name}</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default NavLinks;