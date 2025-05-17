import Company from "../Components/LandingPages/Companies";
import DreamJob from "../Components/LandingPages/DreamJob";
import JobCategory from "../Components/LandingPages/JobCategories";
import Subscribe from "../Components/LandingPages/Subscribe";
import Testmonials from "../Components/LandingPages/Testimonial";
import Working from "../Components/LandingPages/Working";


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