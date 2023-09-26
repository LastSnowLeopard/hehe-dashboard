import { Box, Grid } from "@mui/material";
import PersonalLink from "../Home/components/PersonalLink";
import Statistic from "../Home/components/Statistic";
import { partner, ratio, team } from "../../constant";
import PageHeader from "@/components/PageHeader";
import CustomLineChart from "./components/CustomLineChart";
import CustomBarChart from "./components/CustomBarChart";

const Links: React.FC = () => {
  return(
    <Box sx={{padding: 1}}>
      <PageHeader title="Stats" id="ID 4623" />
      <Grid container spacing={3}>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <PersonalLink link="hehe.to/invite1238123" />
        </Grid>
        <Grid container item lg={6} md={12} sm={12} xs={12} spacing={1}>
          <Grid item lg={4} md={4} sm={4} xs={4}>
            <Statistic item={partner}/>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={4}>
            <Statistic item={team}/>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={4}>
            <Statistic item={ratio}/>
          </Grid>
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <CustomBarChart />
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <CustomLineChart />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Links;
