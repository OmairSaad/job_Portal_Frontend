
interface activeJobIn{
    activeJobs:{
        role:string,
        location:string,
        days:number
    }
}
const PostedJobCard = ({activeJobs}:activeJobIn)=>{
    return (
        <div className="bg-mine-shaft-900 p-2 rounded-lg border-l-2 border-l-bright-sun-400">
            <div className="text-sm font-semibold">{activeJobs.role}</div>
            <div className="text-xs font-medium text-mine-shaft-300">{activeJobs.location}</div>
            <div className="text-xs text-mine-shaft-300">{activeJobs.days} days ago</div>
        </div>
    )
}
export default PostedJobCard;