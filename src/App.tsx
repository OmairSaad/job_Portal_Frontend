import { createTheme, Divider, MantineProvider } from "@mantine/core"
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import Home from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import FindTalent from "./Pages/FindTalentPage";
import TalentProfile from "./Pages/FindTalentProfilePage";
import FindJob from "./Pages/FindJobPage";
import PostJobPage from "./Pages/PostJobPage";
import JobDesPage from "./Pages/JobDesPage";
import ApplyJob from "./Pages/ApplyJobPage";
import CompanyJob from "./Pages/CompanyPage";
import PostedJobsPage from "./Pages/PostedJobsPage";
function App() {
  const theme = createTheme({
    primaryColor: "bright-sun",
    primaryShade: 3,
    colors: {
      'mine-shaft': ['#f6f6f6', '#e7e7e7', '#d1d1d1', '#b0b0b0', '#888888', '#6d6d6d', '#5d5d5d', '#4f4f4f', '#454545', '#3d3d3d', '#2d2d2d',],
      'bright-sun': [
        '#fffbeb', '#fff3c6', '#ffe588', '#ffd149', '#ffbd20', '#f99b07', '#dd7302', '#b75006', '#943c0c', '#7a330d', '#461902',
      ],
    },
    fontFamily: "Exo 2, sans-serif"
  })
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <BrowserRouter>
        <div className="relative">
          <Header />
          <Divider size="xs" />
          <Routes>
            <Route path="find-jobs" element={<FindJob />} />
            <Route path="find-talent" element={<FindTalent />} />
            <Route path="talent-profile" element={<TalentProfile />} />
            <Route path="post-job" element={<PostJobPage />} />
            <Route path="jobs" element={< JobDesPage />} />
            <Route path="apply-job" element={< ApplyJob />} />
            <Route path="company" element={< CompanyJob />} />
            <Route path="posted-job" element={< PostedJobsPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
