import { Button, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3 [&_form]:flex [&_form]:flex-col [&_form]:gap-3">
            <div className="text-2xl font-semibold">Login Account</div>
            <form>
                <TextInput withAsterisk leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />} placeholder="Your Email" label="Email" />
                <PasswordInput leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} />} label="Password" placeholder="Password" />
                <Button autoContrast variant="filled">Login</Button>
                <div className="mx-auto">
                    Don'have an account? <Link to="/signup" className="text-bright-sun-400 hover:underline">SignUp</Link>
                </div>
            </form>
        </div>
    )
}
export default Login;