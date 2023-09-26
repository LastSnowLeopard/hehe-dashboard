import PageHeader from "@/components/PageHeader";
import Box from "@mui/material/Box";
import AchievementCard from "./components/AchievementCard";

import { achieve_bnb, achieve_busd, achieve_personal, achieve_team } from "../../constant";

const Achievements: React.FC = () => {
  return (
    <Box padding={3} display={"flex"} flexDirection={"column"} gap={3}>
      <PageHeader title="Achievements" id="ID 4623" />
      <AchievementCard title="Profit BUSD" imageName="busd" item={achieve_busd}/>
      <AchievementCard title="Personal Partners" imageName="personal" item={achieve_personal}/>
      <AchievementCard title="Team" imageName="team" item={achieve_team}/>
      <AchievementCard title="Profit BNB" imageName="bnb" item={achieve_bnb}/>
    </Box>
  )
}

export default Achievements;
