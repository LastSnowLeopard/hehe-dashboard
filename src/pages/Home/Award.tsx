import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import AwardImage from "@/assets/award.png"

const RootBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "16px 24px",
  borderRadius: "12px",
  gap: "24px",
  height: "100%",
  backgroundColor: "#1A1D1F"
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
  padding: "8px 16px",
  fontFamily: "Baloo",
  fontSize: 13,
  color: "white",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "#1A1D1F",
    borderColor: "#272B30",
    borderWidth: "2px",
  },
}));

const AwardImg = styled("img")(() => ({
  width: "64px",
  height: "64px"
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
