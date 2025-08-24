import { useForm, Controller } from "react-hook-form";
import { Button, NumberInput, TagsInput, Textarea } from "@mantine/core";
import { Fields } from "../../Data/PostJobData";
import SelectInput from "./SelectInput";
import RichText from "./RichTextEditor";
import { PostJobIn } from "../../Interfaces/PostJob";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../Header/ProfileMenue";
import {  succesNotf } from "../../Services/Notification";
import { addJob, clearSuccessMessage } from "../../Slices/JobSlice";
import { useEffect } from "react";
import { RootState } from "../../Store";
import { useParams } from "react-router-dom";

const PostJob = () => {
    const param = useParams();
    const fields = Fields;
    const { id } = useSelector((state: rootState) => state.user);
    const { successMessage, job } = useSelector((state: RootState) => state.jobs);
    const dispatch = useDispatch();

    const defaultValues: PostJobIn = {
        company: "",
        experience: "",
        jobDescription: "",
        jobTitle: "",
        jobType: "",
        location: "",
        salary: null,
        skills: [],
        about: "",
        jobStatus: "ACTIVE",
        postedAgo: new Date().toISOString(),
    };
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
        watch
    } = useForm<PostJobIn>({
        defaultValues: defaultValues
    }
    );

    useEffect(() => {
        if (successMessage?.message == "DRAFT") {
            succesNotf("Success", "Job Drafted Successfully");
        } else if (successMessage?.message == "UPDATE") {
            succesNotf("Success", "Your Job has been UPDATED successfully! 🎉");
        } else if (successMessage?.message == "ADD") {
            succesNotf("Success", "Your Job has been ADDED successfully! 🎉");
        }
        dispatch(clearSuccessMessage());
    }, [successMessage, dispatch, reset, param.id]);  

    useEffect(() => {
        if (job && param.id && param.id!== "0") {
            reset({
                company: job.company,
                experience: job.experience,
                jobDescription: job.jobDescription,
                jobTitle: job.jobTitle,
                jobType: job.jobType,
                location: job.location,
                salary: job.salary,
                skills: job.skills?.map(sk => sk.skillName),
                about: job.about,

            });
        }
        if(param.id==undefined){
            reset(defaultValues);
        }
    }, [job, reset, param.id]);
    // Handle form submission
    const onSubmit = async (data: PostJobIn) => {
        data.jobStatus = "ACTIVE";
        data = { ...data, id: Number(param.id) };
        console.log(data);
        dispatch(addJob({ data, id }));
        reset(defaultValues);
    };

    const handleSaveDraft = () => {
        const data: PostJobIn = { ...watch(), jobStatus: "DRAFT" };
        dispatch(addJob({ data, id }));
        console.log(data);
    }
    return (
        <div className="w-4/5 mx-auto mb-10">
            <div className="text-2xl font-semibold text-mine-shaft-100"> {param.id ? "Edit" : "Post"} a Job</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-wrap justify-center">
                    {fields.map((f) => (
                        <div className="w-1/2 p-5" key={f.label}>
                            <Controller
                                name={f.key as keyof PostJobIn} // Use a unique name for each field
                                control={control}
                                rules={{ required: `${f.label} is required` }} // Add validation rules
                                render={({ field }) => (
                                    <SelectInput
                                        field={f}
                                        value={field.value as keyof PostJobIn}
                                        onChange={field.onChange}
                                        error={errors[f.key as keyof PostJobIn]?.message}
                                    />
                                )}
                            />
                        </div>
                    ))}
                    <div className="w-1/2 p-5">
                        <Controller
                            name="salary" // Use a unique name for the salary field
                            control={control}
                            rules={{ required: `Salary is required` }} // Add validation rules
                            render={({ field }) => (
                                <NumberInput
                                    value={field.value ? field.value : ""}
                                    onChange={field.onChange}
                                    error={errors["salary"]?.message}
                                    label="Salary (in LPA)"
                                    placeholder="Enter salary (e.g., 10)"
                                    clampBehavior="strict"
                                    min={0}
                                    max={100}
                                />
                            )}
                        />
                    </div>
                </div>

                <div className="[&_input]:placeholder:text-mine-shaft-300 [&_.mantine-Pill-label]:font-semibold px-5 pb-5">
                    <Controller
                        name="skills"
                        control={control}
                        rules={{ required: "skill is required" }}
                        render={({ field }) => (
                            <TagsInput
                                withAsterisk
                                label="Skills"
                                placeholder="Enter Skill"
                                clearable
                                acceptValueOnBlur
                                splitChars={[',', ' ', '|']}
                                value={field.value}
                                onChange={field.onChange}
                                error={errors.skills?.message}
                            />
                        )}
                    />
                </div>

                <div className="[&_input]:placeholder:text-mine-shaft-300 [&_.mantine-Pill-label]:font-semibold px-5 pb-5">
                    <Controller
                        name="about"
                        control={control}
                        rules={{ required: "About is required" }}
                        render={({ field }) => (
                            <Textarea
                                label="About Job"
                                withAsterisk
                                placeholder="Enter about job"
                                minRows={3}
                                value={field.value}
                                onChange={field.onChange}
                                error={errors.about?.message}
                            />
                        )}
                    />
                </div>

                <div className="px-5 [&_button[data-active='true']]:!text-bright-sun-400 [&_button[data-active='true']]:!bg-bright-sun-400/20">
                    <div className="text-sm font-medium">Job Description</div>
                    <Controller

                        name="jobDescription"
                        control={control}
                        rules={{ required: "Description is required" }}
                        render={({ field }) => (
                            <RichText

                                value={field.value}
                                error={errors["jobDescription"]?.message as string}
                                onChange={field.onChange} />
                        )
                        }
                    />
                </div>

                <div className="flex gap-4 mt-4 px-5">
                    <Button variant="light" type="submit" color="bright-sun.4">
                        {param.id ? "Update" : "Publish"}   Job
                    </Button>
                    <Button onClick={handleSaveDraft} disabled={job.jobStatus=="DRAFT"} variant="outline" color="bright-sun.4">
                        Save as Draft
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default PostJob;
