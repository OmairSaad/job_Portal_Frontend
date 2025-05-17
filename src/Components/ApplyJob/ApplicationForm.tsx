import { Button, FileInput, LoadingOverlay, NumberInput, Textarea, TextInput } from "@mantine/core";
import {  IconPaperclip } from "@tabler/icons-react";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Notification, rem } from '@mantine/core';
import { Controller, useForm } from "react-hook-form";
// import { Job } from "../../Interfaces/PostJob";
import { getBase64 } from "../../Services/ProfileService";
// import { applyJob } from "../../Services/JobService";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../Header/ProfileMenue";
import { applyJob, clearSuccessMessage } from "../../Slices/JobSlice";
import { RootState } from "../../Store";
import { errorNotf, succesNotf } from "../../Services/Notification";
// const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

export interface AppIn{
    name: string,
    email: string,
    phone:string,
    website:string,
    resume:File | string,
    cover:string
}

const ApplicationForm = () => {
    const {id} = useParams();
    const user = useSelector((state:rootState)=>state.user);
    const dispatch = useDispatch();
    const {successMessage,error,loading} = useSelector((state:RootState)=>state.jobs);
    const [preview, setPreview] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{ 
        if(successMessage){
            succesNotf("Applied Successfully","Job Applied successfully");
            navigate("/find-jobs")
            dispatch(clearSuccessMessage())
        }
        if(error){
            errorNotf("Something went wrong",error)
        }
    },[dispatch,successMessage,error])
    const handlePreview = () => {
        setPreview(!preview);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<AppIn>({
        defaultValues: {
            name: "",
            email: "",
            phone:"",
            website:"",
            cover:""
        }
    });
    const OnSubmit = async (data:AppIn) => {
        let fl="";
        try{
             fl = await getBase64(data.resume as File);
             fl= fl.split(",")[1];
        }catch(er){
            console.log(er);
        }
        data.resume = fl;
        console.log(data);
        dispatch(applyJob({jobId:id, userId:user.id,data}))
        console.log(data);
    }
    return (
        <div>

            <LoadingOverlay className="!fixed"
                visible={loading}
                zIndex={1000}
                overlayProps={{ radius: 'sm', blur: 2 }}
                loaderProps={{ color: 'bright-sun.4', type: 'bars' }}
            />

            <div className="flex flex-col gap-5">
                <form onSubmit={handleSubmit(OnSubmit)}>
                    <div className="flex gap-10 [&>*]:w-1/2">
                        <div className="flex flex-col gap-3">
                            <Controller
                                name="name"
                                rules={{ required: "name is required" }}
                                control={control}
                                render={({ field }) => (
                                    <TextInput
                                        // {...register("name", { required: "name is required" })}
                                        withAsterisk
                                        label="Full Name"
                                        value={field.value}
                                        onChange={field.onChange}
                                        error={errors.name?.message}
                                        placeholder="Enter name"
                                        readOnly={preview} variant={preview ? "unstyled" : "default"}
                                        className={preview ? "[&_input]:text-bright-sun-400 font-semibold" : ""} />
                                )}
                            />
                            <Controller
                                control={control}
                                name="email"
                                rules={{ required: "email is required", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "invalid email" } }}
                                render={({ field }) => (
                                    <TextInput
                                        withAsterisk
                                        label="Email"
                                        placeholder="Enter email"
                                        readOnly={preview}
                                        value={field.value}
                                        onChange={field.onChange}
                                        error={errors.email?.message}
                                        variant={preview ? "unstyled" : "default"}
                                        className={preview ? "[&_input]:text-bright-sun-400 font-semibold" : ""} />
                                )}
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Controller 
                             name="phone"
                             control={control}
                             rules={{required:"phone number is required"}}
                             render={({field})=>(
                                 <NumberInput
                                     withAsterisk label="Phone Number"
                                     placeholder="Enter phone number"
                                     value={field.value}
                                     onChange={field.onChange}
                                     error={errors.phone?.message}
                                     hideControls minLength={10} maxLength={10}
                                     readOnly={preview} variant={preview ? "unstyled" : "default"}
                                     className={preview ? "[&_input]:text-bright-sun-400 font-semibold" : ""} />
                             )}
                            />

                            <Controller
                            name="website"
                            control={control}
                            rules={{required:"website is required"}}
                            render={({field})=>(
                                <TextInput 
                                withAsterisk 
                                label="Personal Website" 
                                value={field.value}
                                onChange={field.onChange}
                                error={errors.website?.message}
                                placeholder="Enter url" 
                                readOnly={preview} 
                                variant={preview ? "unstyled" : "default"} 
                                className={preview ? "[&_input]:text-bright-sun-400 font-semibold" : ""} />
                            )}
                             />
                        </div>

                    </div>
                    
                    <Controller 
                    name="resume"
                    control={control}
                    rules={{required:"CV is required"}}
                    render={({field})=>(
                        <FileInput
                            withAsterisk
                            label="Attach Your CV"
                            placeholder="Your CV"
                            value={field.value as File}
                            accept="application/pdf"
                            onChange={field.onChange}
                            error={errors.resume?.message}
                            leftSection={<IconPaperclip />}
                            readOnly={preview} variant={preview ? "unstyled" : "default"} className={preview ? "[&>._8fb7ebe7]:text-bright-sun-400 font-semibold" : ""}
                        />
                    )}
                    />
                    
                    <Controller 
                    name="cover"
                    control={control}
                    render={({field})=>(
                        <Textarea
                            value={field.value}
                            onChange={field.onChange}
                            label="Cover Letter"
                            placeholder="Type something about yourself"
                            autosize
                            minRows={4}
                            readOnly={preview} variant={preview ? "unstyled" : "default"} className={preview ? "[&_textarea]:text-bright-sun-400 font-semibold" : ""}
                        />
                    )}
                    />
                    <div className="flex">
                        {
                            !preview && <Button onClick={handlePreview} variant="light" color="bright-sun.4" fullWidth>Preview</Button>
                        }
                        {
                            preview &&
                            <div className="flex w-full gap-5">
                                <Button onClick={handlePreview} variant="outline" color="bright-sun.4" fullWidth>Edit</Button>
                                <Button type="submit" variant="light" color="bright-sun.4" fullWidth>Submit</Button>
                            </div>
                        }
                    </div>
                </form>
                {/* <Notification className={`!border-bright-sun-400 !fixed top-0 left-[40%] transition ease-in-out duration-300  ${submit ? 'translate-y-5' : '-translate-y-20'} z-[1001]`} icon={checkIcon} color="teal" title="Application Submitted!" mt="md" withCloseButton={false} withBorder>
                    Redirecting Find Jobs in {timer} seconds....
                </Notification> */}
            </div>
        </div>
    )
}

export default ApplicationForm;


