import { IconGhost2 } from "@tabler/icons-react";
import SignUp from "../SignUpLogin/SignUp";
import Login from "../SignUpLogin/Login";
import { useLocation } from "react-router-dom";


const SignUpLoginPage = () => {
    const location = useLocation();
    return (
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['Exo 2'] overflow-hidden">
            <div className={`h-[calc(100vh-1px)] w-[100vw] flex [&>*]:flex-shrink-0 ${location.pathname=="/signup"?'-translate-x-1/2':'translate-x-0'} transition-all duration-1000 ease-in-out`}>
                <Login/>
                <div className={`w-1/2 h-full ${location.pathname=='/signup'?'rounded-r-[200px]':'rounded-l-[200px]'} transition-all duration-1000 ease-in-out bg-mine-shaft-900 flex items-center flex-col gap-3 justify-center`}>
                    <div className="flex gap-2 items-center text-bright-sun-400">
                        <h2 className="font-bold text-4xl">JobSpark</h2>
                        <IconGhost2 stroke={1.5} className="w-20 h-20" />
                    </div>
                    <div className="text-3xl font-semibold text-mine-shaft-200">Find the Job for YOU!</div>
                </div>
                <SignUp />
            </div>
        </div>
    )
}
export default SignUpLoginPage;