import Marquee from "react-fast-marquee";
import { companies } from "../../Data/Data"
const Company = () => {
    return (
        <div className="mt-20">
            <div className="text-4xl text-center font-semibold text-mine-shaft-100 mb-2">Trusted by <span className="text-bright-sun-400">100+ </span>Companies</div>
                <Marquee pauseOnHover={true}>
                    {
                        companies.map((com, index) => (
                            <div key={index} className="mx-8 px-2 py-1 mt-4 hover:bg-mine-shaft-100 rounded-lg cursor-pointer">
                                <img  src={`/assets/companies/${com}.png`} alt={com} className="h-14 bg-transparent" />
                            </div>

                        ))
                    }
                </Marquee>
        </div>
    )
}

export default Company;