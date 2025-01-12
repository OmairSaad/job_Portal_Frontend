import { Anchor, Button, Checkbox, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const SignUp = ()=>{
    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3 [&_form]:flex [&_form]:flex-col [&_form]:gap-3">
            <div className="text-2xl font-semibold">Create Account</div>
             <form>
                <TextInput withAsterisk placeholder="Your Name" label="Name" />
                <TextInput withAsterisk leftSection={<IconAt style={{width:rem(16),height:rem(16)}}/>}  placeholder="Your Email" label="Email" />
                <PasswordInput leftSection={<IconLock style={{width:rem(18),height:rem(18)}} />} label="Password" placeholder="Password"/>
                <PasswordInput leftSection={<IconLock style={{width:rem(18),height:rem(18)}} />} label="Confirm Password" placeholder="Confirm Password"/>
                <Checkbox autoContrast label={<>I accept <Anchor>terms & conditions</Anchor></>} />
                <Button autoContrast variant="filled">SignUp</Button>
                <div className="mx-auto">
                    Have an Account ? <Link to="/login" className="text-bright-sun-400 hover:underline">Login</Link>
                </div>
             </form>
        </div>
    )
}
export default SignUp;