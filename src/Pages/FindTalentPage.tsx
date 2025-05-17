import { Divider } from "@mantine/core";
import SearchBar from "../Components/FindTalent/SearchBar";
import Talents from "../Components/FindTalent/Talents";
import { useEffect } from "react";

const FindTalent =()=>{
      useEffect(()=>{
            window.scroll({
                top:0,
                behavior:"smooth"
            })
        })
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['Exo 2']">
             <SearchBar />
             <Divider size="xs" mx="md" />
             <Talents  />
        </div>
    )
}
export default FindTalent;