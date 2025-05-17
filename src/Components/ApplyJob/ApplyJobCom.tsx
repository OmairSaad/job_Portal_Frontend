import { Divider } from "@mantine/core";
import { Job } from "../../Interfaces/PostJob";
import { calculateTimeDifference } from "../../Services/DateFormatter";
import ApplicationForm from "./ApplicationForm";
interface ApplyJobIn{
    jobDetails:Job,
}
const ApplyJobCom = ({jobDetails}:ApplyJobIn) => {

    return (
        <div className="w-2/3 mx-auto">
          
            <div className="flex gap-2 text-mine-shaft-100">
                <div className="rounded-lg bg-mine-shaft-50">
                    <img src={`/assets/companies/amzn.png`} alt="" className="h-14" />
                </div>
                <div className="flex flex-col gap-1  justify-center">
                    <div className="text-2xl font-bold">{jobDetails.jobTitle}</div>
                    <div className="text-sm text-mine-shaft-200">{jobDetails.company} &#x2022; {calculateTimeDifference(jobDetails.postedAgo)} &bull; {jobDetails.applicants?jobDetails.applicants.length :0} Applicants</div>
                </div>
            </div>
            <Divider my="xl" />
            <div className="text-xl font-semibold mb-5">Submit Your Application</div>

            <ApplicationForm />
        </div>
    )
}
export default ApplyJobCom;