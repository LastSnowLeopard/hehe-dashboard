import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

const RootBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px"
}));

const ChangeButton = styled(Button)(() => ({
  height: "50px",
  color: "white",
  borderWidth: "2px",
  borderRadius: "8px",
  padding: "8px 16px",
  fontFamily: "Baloo",
  border: "2px solid #1A1D1F",
  backgroundColor: "transparent",
  "&:hover": {
    borderWidth: "2px",
    borderColor: "#1A1D1F",
    backgroundColor: "#1A1D1F",
  },
  textTransform: "none"
}));

const Header = styled(Typography)(() => ({
  lineHeight: "40px",
  fontFamily: "BalooSemiBold",
  alignSelf: "center"
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

const RootTypography = styled(Typography)(() => ({
  textAlign: "center",
  fontFamily: "BalooSemiBold",
  fontWeight: 600,
  lineHeight: "24px"
}));

const CustomBox = styled(Box)(() => ({
  padding: "8px 16px",
  display: "flex",
  gap: "8px",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#1a1d1f",
  borderRadius: "8px"
}));

interface BoostDetailHeaderProps {
  item: {
    level: number,
    id: string,
    cycle: number
  }
}

const BoostDetailHeader: React.FC<BoostDetailHeaderProps> = ({ item }) => {
  return (
    <RootBox>
      <Box display={{xs: 'none', sm: 'block'}}>
        <ChangeButton>Back</ChangeButton>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Header display={{xs: 'none', sm: 'block'}} fontSize={{xs: "15px", sm: "32px"}}>Level {item.level}</Header>
        <ChangeButton sx={{display: {xs: 'block', sm: 'none'}}}>Back</ChangeButton>
        <CustomBox border={"2px solid ###1A1D1F"}>
          <RootTypography fontSize={{xs: "15px", sm: "24px"}}>Upline</RootTypography>
          <IDChip label={item.id} />
        </CustomBox>
        <CustomBox>
          <RootTypography fontSize={{xs: "15px", sm: "24px"}}>Cycle: {item.cycle}</RootTypography>
        </CustomBox>
      </Box>
    </RootBox>
  )
}

export default BoostDetailHeader;
