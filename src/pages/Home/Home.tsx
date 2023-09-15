import { Box, Grid } from "@mui/material";
import Profile from "./Profile";
import StatisticCard from "@/components/StatisticCard";
import PersonalLink from "./PersonalLink";
import Profits from "./Profits";
import Boost from "./Boost";
import Award from "./Award";
import RecentActivity from "./RecentActivity";

const statistics = [
  {
    items: [
      {
        title: "Partners",
        value: "29",
        increase: true,
        rate: 37.8,
      },
    ],
  },
  {
    items: [
      {
        title: "Team",
        value: "34",
        increase: false,
        rate: 37.8,
      },
    ],
  },
  {
    items: [
      {
        title: "Ratio",
        value: "250%",
        increase: true,
        rate: 37.8,
      },
    ],
  },
];

const profit = {
  heheAmount: 23,
  heheRate: 0.1,
  busdAmount: 25,
  busdRate: 0.1,
};

const members = [
  {
    items: [
      {
        title: "Members",
        value: "1537240",
        increase: true,
        rate: 37.8,
      },
    ],
  },
  {
    items: [
      {
        title: "Members received",
        value: "1537240 BUSD",
        increase: true,
        rate: 37.8,
      },
      {
        // title: "Members received",
        value: "1537240 BNB",
        increase: true,
        rate: 37.8,
      },
    ],
  },
  {
    items: [
      {
        title: "Transaction made",
        value: "1537240",
        increase: true,
        rate: 37.8,
      },
      {
        title: "Turnover BUSD",
        value: "1537240",
        increase: true,
        rate: 37.8,
      },
    ],
  },
];
const Home: React.FC = () => {
  return (
    <Box padding={3}>
      <Grid container spacing={3}>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Profile />
        </Grid>
        <Grid container item lg={6} md={12} sm={12} xs={12} spacing={3}>
          {statistics.map((item, index) => (
            <Grid item lg={4} md={4} sm={4} xs={12} key={index}>
              <StatisticCard items={item.items} />
            </Grid>
          ))}
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
            <Grid item lg={12} md={4} sm={12} xs={12} key={index}>
              <StatisticCard items={item.items} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};
export default Home;
