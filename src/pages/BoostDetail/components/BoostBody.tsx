import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import BoostItem from "./BoostItem"
import { boostDetail } from "../../../constant";
import Typography from "@mui/material/Typography";
import SVG from "@/components/SVG";

const RootCircle = styled(Box)(() => ({
  width: 100,
  height: 100,
  borderRadius: "100%",
  borderWidth: "4px",
  borderStyle: "solid",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}));

const RootTypography = styled(Typography)(() => ({
  textAlign: "center",
  fontFamily: "BalooSemiBold",
  fontWeight: 700,
  fontSize: 32,
  alignSelf: "center",
  lineHeight: "24px"
}));

const FlexBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const BoostBody: React.FC = () => {
  return (
    <FlexBox gap={8} marginY={9} flexDirection={{xs: "column", lg: "row"}}>
      <RootCircle bgcolor={"#fff"} borderColor={"#111315"} gap={1} display={{xs: 'none', lg: 'flex'}}>
        <SVG id="left-arrow-black" width={20} height={18} />
        <RootTypography sx={{fontSize: "13px"}} color={"black"}>Level 1</RootTypography>
      </RootCircle>
      <BoostItem item={boostDetail} />
      <RootCircle bgcolor={"#fff"} borderColor={"#111315"} gap={1} display={{xs: 'none', lg: 'flex'}}>
        <RootTypography sx={{fontSize: "13px"}} color={"black"}>Level 3</RootTypography>
        <SVG id="right-arrow-black" width={20} height={18} />
      </RootCircle>
    </FlexBox>
  )
}

export default BoostBody;
