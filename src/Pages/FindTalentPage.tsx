import { Divider } from "@mantine/core";
import SearchBar from "../FindTalent/SearchBar";
import Talents from "../FindTalent/Talents";

const FindTalent =()=>{
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['Exo 2']">
             <SearchBar />
             <Divider size="xs" mx="md" />
             <Talents  />
        </div>
    )
}
export default FindTalent;