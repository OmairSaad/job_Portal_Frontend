import { Similar } from "../../Data/CompanyData";
import CompanyCard from "./CompanyCard";

const SimilarCom = ()=>{
    return (
        <div className="mx w-1/4">
            <div className="text-xl font-bold text-mine-shaft-100 mb-4">Similar Companies</div>
            <div className="flex flex-col gap-5">
            {
                Similar.map((com,index)=> <CompanyCard key={index} company={com} />)
            }
            </div>
        </div>
    )
}
export default SimilarCom;