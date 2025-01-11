import { companydata } from "../Data/CompanyData";
interface comIn {
    Name: string,
    Overview: string,
    Industry: string,
    website: string,
    Size: string,
    Headquarters: string,
    Specialities:string[]
}
const AboutCom = () => {
    const company: comIn = companydata;
    return <div className="flex flex-col gap-5 mt-2">
        {
            Object.keys(company).map((key, index) => {
                //This ensure that key will be comIn interface not other
                const typedkey = key as keyof comIn;
                return key != 'Name' && <div key={index}>
                    <div className="text-xl mb-2 font-semibold text-mine-shaft-100">{key}</div>
                    {
                        typedkey == "website" && <a href={company[typedkey]} target="_blank" className="text-bright-sun-400">{company[typedkey]}</a>
                    }
                    {
                        typedkey != "website" && <div className="text-sm text-mine-shaft-300 text-justify">
                            {   
                                typedkey!=="Specialities" ? company[typedkey] : company[typedkey].map((item,index)=>(
                                    <span key={index}> <span className="text-bright-sun-400">&bull;</span> {item}</span>
                                ))
                            }
                        </div>
                    }
                </div>
            })
        }
    </div>
}
export default AboutCom;