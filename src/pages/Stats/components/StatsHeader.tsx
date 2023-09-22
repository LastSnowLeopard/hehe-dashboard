import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";

const RootTypography = styled(Typography)(() => ({
  fontFamily: "BalooSemiBold",
  fontSize: 48,
}));

const IDChip = styled(Chip)(() => ({
  alignSelf: "center",
  color: "#FDE048",
  fontFamily: "BalooSemiBold",
  fontWeight: 600,
  fontSize: 15,
  backgroundColor: "#FCF5B140",
  borderRadius: "4px"
}));


const StatsHeader: React.FC = () => {
  return(
    <Box display={"flex"} gap={1}>
      <RootTypography>Stats</RootTypography>
      <IDChip label="ID 4623"/>
    </Box>
  )
}

export default StatsHeader;
