import Box from "@mui/material/Box";

import BoostDetailHeader from "./BoostDetailHeader"
import { boostDetail } from "../../constant";
import BoostBody from "./BoostBody";
import Overview from "../Boost/Overview";

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
