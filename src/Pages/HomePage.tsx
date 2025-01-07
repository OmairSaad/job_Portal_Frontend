import Company from "../LandingPages/Companies";
import DreamJob from "../LandingPages/DreamJob";
import JobCategory from "../LandingPages/JobCategories";
import Subscribe from "../LandingPages/Subscribe";
import Testmonials from "../LandingPages/Testimonial";
import Working from "../LandingPages/Working";

const Home = ()=>{
    return (
      <div className="min-h-[100vh] bg-mine-shaft-950 font-['Exo 2']">
        <DreamJob />
        <Company />
        <JobCategory />
        <Working />
        <Testmonials />
        <Subscribe />
      </div>
    )
}

export default Home;