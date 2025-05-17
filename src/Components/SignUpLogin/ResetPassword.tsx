import { Button, Modal, PasswordInput, PinInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import { changePassword, sendOtp, verifyOtp } from "../../Services/UserService";
import { useState } from "react";
import { errorNotf, succesNotf } from "../../Services/Notification";
import { useInterval } from "@mantine/hooks";
interface resIn {
    opened: boolean,
    close: () => void,
    email?: string,
    password?: string
}
const ResetPassword = ({ opened, close }: resIn) => {

    //interval for resend timer
    const [seconds, setSeconds] = useState(30);
    const interval = useInterval(() => {
        if(seconds===0){
            interval.stop();
            setResendLoader(false);
        }
        setSeconds((s) => s - 1)
    }, 1000);

    const [otpSending, setOtpSending] = useState(false);
    const [email, setEmail] = useState("");
    const [otpSent, setOtpsent] = useState(false);
    const [verified, setVerified] = useState(false);
    const [resendLoader,setResendLoader] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<resIn>();

    const submitForm = useForm<resIn>();

    const handleSendOtp = (data: resIn) => {
        setOtpSending(true);
        sendOtp(data.email ? data.email : "")
            .then((res) => {
                setEmail(data.email ? data.email : "");
                setOtpsent(true);
                console.log(res);
                setOtpSending(false);
                succesNotf(res.message, "Please enter OTP");
                setSeconds(30);
                interval.start();
                setResendLoader(true);
            }).catch((er) => {
                console.log(er.response.data.errorMessage);
                errorNotf(er.response.data.errorMessage, "Resend an OTP")
                setOtpSending(false);
            })
    }

    const changeEmail = () => {
        setOtpsent(false);
        setSeconds(30);
        interval.start();
    }

    const handleVerifyOtp = async (otp: string) => {
        verifyOtp(email, otp)
            .then((res) => {
                setVerified(true);
                console.log(res);
                setOtpsent(false);
                succesNotf(res.message, "Please enter new password");
            }).catch((er) => {
                errorNotf(er.response.data.errorMessage, "Re-enter OTP")
            })
    }

    const handleChangePassword = (data: resIn) => {
        data.email = email;
        if (data.password) {
            changePassword(data.email, data.password)
                .then((res) => {
                    succesNotf(res.message, res.message);
                    setOtpSending(false);
                    setOtpsent(false);
                    setVerified(false);   
                    reset();
                    interval.stop();
                    setResendLoader(false);
                    submitForm.reset();
                }).catch((er) => {
                    errorNotf(er.response.data.errorMessage, "Something went wrong")
                })
        }
    }
    return (
        <div>
            <Modal opened={opened} onClose={close} title="Reset Password">
                <div className="flex flex-col gap-4">
                    <form onSubmit={handleSubmit(handleSendOtp)} className="flex flex-col gap-4">
                        <TextInput
                            size="sm"
                            error={errors.email && errors.email.message}
                            {...register("email", {
                                required: "email is required", pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email format "
                                }
                            })}
                            withAsterisk
                            leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
                            rightSection={<Button disabled={otpSent || verified} loading={otpSending} size="xs" autoContrast variant="filled" type="submit" color="bright-sun.4" className="text-white mr-1">Send</Button>
                            }

                            rightSectionWidth="xl"
                            placeholder="Your Email" label="Email" />
                        {
                            otpSent && <>
                                <PinInput length={6} gap="lg" mx="auto" size="lg" placeholder="0" type="number" onComplete={handleVerifyOtp} />
                                <div className="flex gap-2">
                                    <Button variant="light" color="bright-sun.4" fullWidth autoContrast type={interval.active ? "button" :"submit"}>{resendLoader ? seconds : "Resend"}</Button>
                                    <Button variant="filled" color="bright-sun.4" fullWidth onClick={changeEmail} autoContrast>Change Email</Button>
                                </div>
                            </>
                        }
                    </form>

                    {
                        verified &&
                        <form onSubmit={submitForm.handleSubmit(handleChangePassword)}>
                            <div className="flex flex-col gap-3">
                                <PasswordInput
                                    withAsterisk
                                    {...submitForm.register("password",
                                        {
                                            required: "Password is required", pattern: {
                                                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                                message: "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character",
                                            }
                                        })}
                                    error={submitForm.formState.errors.password && submitForm.formState.errors.password.message}
                                    leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} />} label="Password" placeholder="Enter New Password" />
                                <Button autoContrast variant="filled" type="submit" color="bright-sun.4">Reset Password</Button>
                            </div>
                        </form>
                    }
                </div>
            </Modal>
        </div>
    )
}

export default ResetPassword;