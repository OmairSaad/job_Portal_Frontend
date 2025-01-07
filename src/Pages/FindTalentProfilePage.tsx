import { Button, Divider } from "@mantine/core";
import { IconArrowLeftToArc } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Profile from "../TalentProfile/Profile";

const TalentProfile = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['Exo 2'] p-4">
            <Divider size="xs" />
            <Link to="/find-talent" className="my-4 inline-block">
                <Button variant="light" leftSection={<IconArrowLeftToArc size={20} />} color="bright-sun.3" >Back</Button>
            </Link>
            <Divider size="xs" />
            <div>
            <Profile />
            </div>
        </div>
    )
}
export default TalentProfile;