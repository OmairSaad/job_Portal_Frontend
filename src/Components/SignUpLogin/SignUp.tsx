import { Anchor, Button, Checkbox, Group, LoadingOverlay, PasswordInput, Radio, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerUser, userIn } from "../../Services/UserService";
import { errorNotf, succesNotf } from "../../Services/Notification";
const SignUp = () => {
    const [value, setValue] = useState("NORMAL");
    const navigate = useNavigate();
    const[loading,setLoading]= useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        reset
    } = useForm<userIn>();
    const onSubmit = async (data: userIn) => {
        setLoading(true);
        data.role = value;
        registerUser(data).then((res) => {
            console.log(res);
            succesNotf("Registered succesfully","You are being redirected....")
            reset()
            setTimeout(() => {
                setLoading(false);
                navigate("/login")
            }, 1500);
        }).catch((er) => {
            setLoading(false);
            console.log(er);
            errorNotf("Registaration Failed!",er.response.data.errorMessage)
        })
    }
    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3 [&_form]:flex [&_form]:flex-col [&_form]:gap-3">
            <LoadingOverlay 
            visible={loading}
            zIndex={1000}
            overlayProps={{radius:"sm",blur:2}}
            loaderProps={{color:"bright-sun.4",type:"bars"}}
            className="translate-x-1/2"
            />
            <div className="text-2xl font-semibold">Create Account</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                    {...register("name", { required: "Name is required" })}
                    withAsterisk placeholder="Your Name"
                    label="Name"
                    error={errors.name && (errors.name.message)}
                />
                <TextInput
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Invalid email format",
                        },
                    })}
                    withAsterisk
                    error={errors.email && errors.email.message}
                    leftSection={<IconAt style={{ width: rem(16), height: rem(16) }}
                    />} placeholder="Your Email" label="Email" />
                <PasswordInput
                    {...register("password",
                        {
                            required: "Password is required",
                            pattern: {
                                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message: "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character",
                            }
                        })}
                    error={errors.password && errors.password.message}
                    leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} />} label="Password" placeholder="Password" />
                <PasswordInput
                    error={errors.confirmPassword && errors.confirmPassword.message}
                    {...register("confirmPassword", { required: "Conf password is required", validate: (value) => value === getValues("password") || "Passwords do not match" })}
                    leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} />} label="Confirm Password" placeholder="Confirm Password" />
                <Radio.Group {...register("role")}
                    label="Are you ?"
                    withAsterisk
                    value={value}
                    onChange={setValue}
                >
                    <Group>
                        <Radio className="py-3 px-4 border border-mine-shaft-800 rounded-lg has-[:checked]:border-bright-sun-400 bg-mine-shaft-900 has-[:checked]:bg-bright-sun-400/10" autoContrast value="ADMIN" label="Admin" />
                        <Radio className="py-3 px-4 border border-mine-shaft-800 rounded-lg has-[:checked]:border-bright-sun-400 bg-mine-shaft-900 has-[:checked]:bg-bright-sun-400/10" autoContrast value="NORMAL" label="Normal" />
                    </Group>
                </Radio.Group>
                <Checkbox autoContrast label={<>I accept <Anchor>terms & conditions</Anchor></>} />
                <Button autoContrast variant="filled" type="submit" loading={loading}>SignUp</Button>
                <div className="mx-auto">
                    Have an Account ? <Link to="/login" className="text-bright-sun-400 hover:underline">Login</Link>
                </div>
            </form>
        </div>
    )
}
export default SignUp;