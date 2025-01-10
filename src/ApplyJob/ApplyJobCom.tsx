import { Button, Divider, FileInput, LoadingOverlay, NumberInput, Textarea, TextInput } from "@mantine/core";
import { IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;
import { IconCheck } from '@tabler/icons-react';
import { Notification, rem } from '@mantine/core';
import { useNavigate } from "react-router-dom";
const ApplyJobCom = () => {
    const [preview, setPreview] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [timer, setTimer] = useState(5);
    const navigate = useNavigate();
    const handlePreview = () => {   
        setPreview(!preview);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const handleSubmit = () => {   
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setSubmit(true);
        let x = timer;
        const intervalId = setInterval(() => {
            setTimer(x--);
            if (x < 0) {
                clearInterval(intervalId);
                navigate("/find-jobs")
            }
        }, 1000);
    }
    return (
        <div className="w-2/3 mx-auto">
            {/* Loader */}

            <LoadingOverlay className="!fixed"
                visible={submit}
                zIndex={1000}
                overlayProps={{ radius: 'sm', blur: 2 }}
                loaderProps={{ color: 'bright-sun.4', type: 'bars' }}
            />

            <div className="flex gap-2 text-mine-shaft-100">
                <div className="rounded-lg bg-mine-shaft-50">
                    <img src={`src/assets/companies/amzn.png`} alt="" className="h-14" />
                </div>
                <div className="flex flex-col gap-1 items-center justify-center">
                    <div className="text-2xl font-bold">Software Engineer</div>
                    <div className="text-sm text-mine-shaft-200">Google &#x2022; 2 days ago &bull; 45 Applicants</div>
                </div>
            </div>
            <Divider my="xl" />
            <div className="text-xl font-semibold mb-5">Submit Your Application</div>
            <div className="flex flex-col gap-5">
                <div className="flex gap-10 [&>*]:w-1/2">
                    <div className="flex flex-col gap-3">
                        <TextInput withAsterisk label="Full Name" placeholder="Enter name" readOnly={preview} variant={preview ? "unstyled" : "default"} className={preview ? "[&_input]:text-bright-sun-400 font-semibold" : ""} />
                        <TextInput withAsterisk label="Email" placeholder="Enter email" readOnly={preview} variant={preview ? "unstyled" : "default"} className={preview ? "[&_input]:text-bright-sun-400 font-semibold" : ""} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <NumberInput withAsterisk label="Phone Number" placeholder="Enter phone number" hideControls minLength={10} maxLength={10} readOnly={preview} variant={preview ? "unstyled" : "default"} className={preview ? "[&_input]:text-bright-sun-400 font-semibold" : ""} />
                        <TextInput withAsterisk label="Personal Website" placeholder="Enter url" readOnly={preview} variant={preview ? "unstyled" : "default"} className={preview ? "[&_input]:text-bright-sun-400 font-semibold" : ""} />
                    </div>
                </div>
                <FileInput
                    withAsterisk
                    label="Attach Your CV"
                    placeholder="Your CV"
                    leftSection={<IconPaperclip />}
                    readOnly={preview} variant={preview ? "unstyled" : "default"} className={preview ? "[&>._8fb7ebe7]:text-bright-sun-400 font-semibold" : ""}
                />
                <Textarea
                    withAsterisk
                    label="Cover Letter"
                    placeholder="Type something about yourself"
                    autosize
                    minRows={4}
                    readOnly={preview} variant={preview ? "unstyled" : "default"} className={preview ? "[&_textarea]:text-bright-sun-400 font-semibold" : ""}
                />
                <div className="flex">
                    {
                        !preview && <Button onClick={handlePreview} variant="light" color="bright-sun.4" fullWidth>Preview</Button>
                    }
                    {
                        preview &&
                        <div className="flex w-full gap-5">
                            <Button onClick={handlePreview} variant="outline" color="bright-sun.4" fullWidth>Edit</Button>
                            <Button onClick={handleSubmit} variant="light" color="bright-sun.4" fullWidth>Submit</Button>
                        </div>
                    }
                </div>
            </div>
            <Notification className={`!border-bright-sun-400 !fixed top-0 left-[40%] transition ease-in-out duration-300  ${submit ? 'translate-y-5' : '-translate-y-20'} z-[1001]`} icon={checkIcon} color="teal" title="Application Submitted!" mt="md" withCloseButton={false} withBorder>
                Redirecting Find Jobs in {timer} seconds....
            </Notification>
        </div>
    )
}
export default ApplyJobCom;