import PostedJob from "../PostedJob/PostedJob";
import PostedJobDes from "../PostedJob/PostedJobDes";

const PostedJobsPage = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['Exo 2'] px-4 pb-20">
            <div className="flex gap-5">
                <PostedJob />
                <PostedJobDes />
            </div>
        </div>
    )
}
export default PostedJobsPage;