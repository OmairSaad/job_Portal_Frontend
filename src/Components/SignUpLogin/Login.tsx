import { Button, LoadingOverlay, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginIn, loginUser } from "../../Services/UserService";
import { useDisclosure } from "@mantine/hooks";
import ResetPassword from "./ResetPassword";
import { useDispatch } from "react-redux";
import { setUser } from "../../Slices/UserSlice";
import { useState } from "react";
import { errorNotf, succesNotf } from "../../Services/Notification";
import { saveProfile } from "../../Slices/ProfileSlice";
import { getProfile } from "../../Services/ProfileService";
const Login = () => {
    const navigate = useNavigate();
    const [opened, { open, close }] = useDisclosure(false);
    const dispatch = useDispatch();
    // const user = useSelector((state:rootState)=>state.user);
    const[loading,setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<loginIn>();

    const onSubmit = async (data: loginIn) => {
        setLoading(true);
        loginUser(data).then((res) => {
            console.log(res)
            dispatch(setUser(res))
            getProfile(res.id).then((res)=>dispatch(saveProfile(res.data)));
            succesNotf("Logged in succesfully","You are being redirected....")
            reset();
            setTimeout(() => {
                setLoading(false);
                navigate("/");
            }, 1500);
        }).catch((er) => {
            setLoading(false);
            let erMessage = er.response.data.errorMessage;
            if(Array.isArray(er.response.data)){
                erMessage = er.response.data[0].errorMessage;
            }
            errorNotf("Login Failed!",erMessage)
        })
    }
    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3 [&_form]:flex [&_form]:flex-col [&_form]:gap-3">
            <LoadingOverlay
            visible={loading}
            zIndex={1000}
            overlayProps={{radius:"sm",blur:2}}
            loaderProps={{color:"bright-sun.4",type:"bars"}}
            
             />
            <div className="text-2xl font-semibold">Login Account</div>
            <form onSubmit={handleSubmit(onSubmit)}> 
                <TextInput
                    error={errors.email && errors.email.message}
                    {...register("email", {
                        required: "email is required", pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email format "
                        }
                    })}
                    withAsterisk
                    leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />} placeholder="Your Email" label="Email" />
                <PasswordInput
                    error={errors.password && errors.password.message}
                    {...register("password", { required: "password is required" })}
                    withAsterisk
                    leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} />} label="Password" placeholder="Password" />
                <Button autoContrast variant="filled" type="submit" loading={loading}>Login</Button>
                <div className="mx-auto">
                    Don'have an account? <Link to="/signup" className="text-bright-sun-400 hover:underline">SignUp</Link>
                </div>
            </form>
            <div onClick={open} className="text-bright-sun-400 hover:underline cursor-pointer text-center">Forget Password?</div>
            <ResetPassword opened={opened} close={close} />
        </div>
    )
}
export default Login;