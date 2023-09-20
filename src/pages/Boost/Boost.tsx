import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BoostCard from "@/components/BoostCard";
import DeactivatedBoostCard from "@/components/DeactivatedBoostCard";
import { boostItems } from "../../constant";
import BoostHeader from "./components/BoostHeader";
import Overview from "./components/Overview";

const Boost: React.FC = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={3} padding={3}>
      <BoostHeader />
      <Grid container spacing={3}>
        { 
          boostItems.map((item,index) => (
            <Grid item xl={2} lg={3} md={4} sm={6} xs={12} display={"flex"} justifyContent={"center"} key={index}>
              {item.isActivated ? <BoostCard item={item} /> : <DeactivatedBoostCard item={item} />}
            </Grid>
          ))
        } 
      </Grid>
      <Overview />
    </Box>
  );
};

export default Boost;