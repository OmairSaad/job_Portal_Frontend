import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Header from "../Components/Header/Header"
import { Divider } from "@mantine/core"
import FindJob from "./FindJobPage"
import FindTalent from "./FindTalentPage"
import TalentProfile from "./FindTalentProfilePage"
import PostJobPage from "./PostJobPage"
import JobDesPage from "./JobDesPage"
import Footer from "../Components/Footer/Footer"
import ApplyJob from "./ApplyJobPage"
import CompanyJob from "./CompanyPage"
import Home from "./HomePage"
import JobHistoryPage from "./JobHistoryPage"
import PostedJobsPage from "./PostedJobsPage"
import ProfilePage from "./ProfilePage"
import SignUpLoginPage from "./SignUpLoginPage"
import { useSelector } from "react-redux"
import { rootState } from "../Components/Header/ProfileMenue"

const Approutes = () => {
    const user = useSelector((state:rootState)=>state.user);
    return <BrowserRouter>
        <div className="relative">
            <Header />
            <Divider size="xs" />
            <Routes>
                <Route path="find-jobs" element={<FindJob />} />
                <Route path="find-talent" element={<FindTalent />} />
                <Route path="talent-profile/:id" element={<TalentProfile />} />
                <Route path="post-job" element={<PostJobPage />} />
                <Route path="edit-post/:id" element={<PostJobPage />} />
                <Route path="jobs/:id" element={< JobDesPage />} />
                <Route path="apply-job/:id" element={< ApplyJob />} />
                <Route path="company/:name" element={< CompanyJob />} />
                <Route path="posted-jobs/:id" element={< PostedJobsPage />} />
                <Route path="job-history" element={< JobHistoryPage />} />
                <Route path="signup" element={user?<Navigate to="/" />:< SignUpLoginPage />} />
                <Route path="login" element={user?<Navigate to="/" />:< SignUpLoginPage />} />
                <Route path="profile" element={< ProfilePage />} />
                <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
        </div>
    </BrowserRouter>
}

export default Approutes;