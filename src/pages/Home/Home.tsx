import { Box, Grid } from "@mui/material";
import Profile from "./components/Profile";
import Detail from "@/pages/Home/components/Detail";
import PersonalLink from "./components/PersonalLink";
import Profits from "./components/Profits";
import Boost from "./components/Boost";
import Award from "./components/Award";
import RecentActivity from "./components/RecentActivity";
import { partner, team, ratio, profit, members } from "../../constant";
import Statistic from "./components/Statistic";

const Home: React.FC = () => {
  return (
    <Box padding={3}>
      <Grid container spacing={3}>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Profile />
        </Grid>
        <Grid container item lg={6} md={12} sm={12} xs={12} spacing={3}>
          <Grid item lg={4} md={4} sm={4} xs={12}>
            <Statistic item={partner}/>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={12}>
            <Statistic item={team}/>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={12}>
            <Statistic item={ratio}/>
          </Grid>
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <PersonalLink link="hehe.to/invite1238123" />
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Profits profit={profit} />
        </Grid>
        <Grid item lg={7} md={12} sm={12} xs={12}>
          <Boost />
        </Grid>
        <Grid item lg={5} md={12} sm={12} xs={12}>
          <Award />
        </Grid>
        <Grid item lg={8} md={12} sm={12} xs={12}>
            <RecentActivity />
        </Grid>
        <Grid container item lg={4} md={12} sm={12} xs={12} spacing={3} sx={{height: "100%"}}>
          {members.map((item, index) => (
            <Grid key={index} item lg={12} md={4} sm={12} xs={12}>
              <Detail items={item.items} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};
export default Home;
