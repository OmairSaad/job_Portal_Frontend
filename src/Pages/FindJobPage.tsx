import { Divider } from "@mantine/core";
import SearchBar from "../FindJobs/SearchBar";
import Jobs from "../FindJobs/Jobs";

const FindJob = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['Exo 2']">
      <SearchBar />
      <Divider className="mx-1" size="xs" mx="md"  />
      <Jobs />
    </div>
  )
}

export default FindJob;