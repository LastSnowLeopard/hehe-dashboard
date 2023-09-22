import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import AwardImage from "@/assets/award.png"

const RootBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "16px 24px",
  borderRadius: "12px",
  gap: "24px",
  height: "100%",
  backgroundColor: "#1A1D1F",
  [theme.breakpoints.down('sm')]:{
    padding: "12px"
  }
}));

const FlexBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const RootTypography = styled(Typography)(() => ({
  fontFamily: "BalooSemiBold",
  fontWeight: 600,
  alignSelf: "center"
}));

const ShowButton = styled(Button)(() => ({
  borderRadius: "8px",
  borderWidth: "2px",
  borderColor: "#272B30",
  borderStyle: "solid",
  padding: "8px 16px 5px",
  fontFamily: "Baloo",
  fontSize: 13,
  color: "white",
  textTransform: "none",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "#1A1D1F",
    borderColor: "#272B30",
    borderWidth: "2px",
  },
}));

const AwardImg = styled("img")(({ theme }) => ({
  width: "64px",
  height: "64px",
  [theme.breakpoints.down('sm')]: {
    width: "48px",
    height: "48px",
  }
}));

const Award: React.FC = () => {
  return (
    <RootBox>
      <FlexBox>
        <RootTypography fontSize={20}>Awards</RootTypography>
        <ShowButton>Show all</ShowButton>
      </FlexBox>
      <FlexBox height={"100%"}>
        <FlexBox alignSelf={"center"} width={"100%"}>
          <AwardImg src={AwardImage} alt="award" />
          <AwardImg src={AwardImage} alt="award" />
          <AwardImg src={AwardImage} alt="award" />
          <AwardImg src={AwardImage} alt="award" />
          <AwardImg src={AwardImage} alt="award" />
        </FlexBox>
      </FlexBox>
    </RootBox>
  )
}

export default Award;
