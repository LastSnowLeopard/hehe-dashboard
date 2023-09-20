import Box from "@mui/material/Box";

import BoostDetailHeader from "./components/BoostDetailHeader"
import { boostDetail } from "../../constant";
import BoostBody from "./components/BoostBody";
import Overview from "../Boost/components/Overview";

const BoostDetail: React.FC = () => {
  return(
    <Box padding={3}>
      <BoostDetailHeader item={boostDetail}/>
      <BoostBody />
      <Overview />
    </Box>
  )
}

export default BoostDetail;
