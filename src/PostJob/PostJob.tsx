import { Button, TagsInput } from "@mantine/core";
import { Fields } from "../Data/PostJobData";
import SelectInput from "./SelectInput";
import RichText from "./RichTextEditor";

const PostJob = () => {
    const fields = Fields;
    return (
        <div className="w-4/5 mx-auto mb-10">
            <div className="text-2xl font-semibold text-mine-shaft-100">Post a Job</div>
            <div className="flex flex-wrap">
                {
                    fields.map((f) => (
                        <div className="w-1/2 p-5">
                            <SelectInput field={f} />
                        </div>
                    ))
                }
            </div>
            <div className="[&_input]:placeholder:text-mine-shaft-300 [&_.mantine-Pill-label]:font-semibold px-5 pb-5">
                <TagsInput withAsterisk label="Skills" placeholder="Enter Skill" clearable acceptValueOnBlur splitChars={[',', ' ', '|']} />
            </div>

            <div className="px-5 [&_button[data-active='true']]:!text-bright-sun-400 [&_button[data-active='true']]:!bg-bright-sun-400/20">
                <div className="text-sm font-medium">Job Discription</div>
                <RichText />
            </div>

            <div className="flex gap-4 mt-4 px-5">
                <Button variant="light" color="bright-sun.4">Publish Job</Button>
                <Button variant="outline" color="bright-sun.4">Save as Draft</Button>
            </div>
        </div>
    )
}
export default PostJob;