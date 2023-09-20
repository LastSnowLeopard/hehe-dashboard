import { Fragment } from 'react';
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import SVG from "./SVG";
import HeheImg from "@/assets/token/hehe.png";

const RootBox = styled(Box)(() => ({
  width: 191,
  height: 191,
  position: "relative",
  display: "flex",
  justifyContent: "center"
}))

const BackgroundCircle = styled(Box)(() => ({
  width: 191,
  height: 191,
  borderRadius: "100px",
  position: "absolute",
  zIndex: 1
}))

const EllipseBorder = styled(Box)(() => ({
  width: 192.5,
  height: 166,
  position: "absolute",
  top: 12,
  left: "50%",
  transform: "translateX(-50%)",
  border: "4px solid #fff",
  borderRadius: "50%",
  zIndex: 2
}))

const BottomCircle = styled(Box)(() => ({
  width: 65,
  height: 65,
  position: "absolute",
  bottom: -3,
  left: "50%",
  transform: "translateX(-50%)",
  border: "4px solid #fff",
  borderRadius: "50%",
  backgroundColor: "#272C32",
  zIndex: 3
}))

const RadialBackground = styled(Box)(() => ({
  width: 184.5,
  height: 158,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "absolute",
  top: 16,
  left: "50%",
  transform: "translateX(-50%)",
  borderRadius: "50%",
  backgroundImage: "radial-gradient(50% 50% at 50% 50%, #454B52 0%, #272C32 100%)",
  justifyContent: "flex-end",
  paddingBottom: "16px",
  zIndex: 4
}))

const TopCircle = styled(Box)(() => ({
  width: 65,
  height: 65,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "absolute",
  top: -16,
  left: "50%",
  transform: "translateX(-50%)",
  border: "4px solid #fff",
  borderRadius: "50%",
  backgroundColor: "#596AFF",
  zIndex: 4
}))

const RootTypography = styled(Typography)(() => ({
  textAlign: "center",
  fontFamily: "BalooSemiBold",
  fontWeight: 700,
  fontSize: 15,
  lineHeight: "24px"
}));

const TokenImg = styled("img")(() => ({
  width: 24,
  height: 24,
  alignSelf: "center",
}));

const SpotBox = styled(Box)(() => ({
  width: 32,
  height: 24,
  borderRadius: "100px"
}));

const FlexBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center"
}));

const LeftEllips = styled("div")(() => ({
  position: "absolute",
  top: "50%",
  left: "0%",
  transform: "translateY(-50%)"
}))

const RightEllips = styled("div")(() => ({
  position: "absolute",
  top: "50%",
  right: "0%",
  transform: "translateY(-50%)"
}))

const levelColors = [
  "#596AFF",
  "#FF6A55",
  "#FDE048"
]

interface BoostCardProps {
  item?: {
    isActivated: boolean,
    isSnow: boolean,
    level: number,
    price: string,
    users: number,
    refresh: number,
    isProfited: boolean,
    missedProfit: string
  }
}

const BoostCard: React.FC<BoostCardProps> = ({ item }) => {
  return(
    <RootBox>
      {item && (
        <Fragment>
          <BackgroundCircle bgcolor={levelColors[item?.level - 1]} />
          <EllipseBorder />
          <RadialBackground>
            <FlexBox gap={1}>
              <TokenImg src={HeheImg} />
              <RootTypography>{item?.price}</RootTypography>
            </FlexBox>
            {
              item?.isProfited ?
              <Fragment>
                <FlexBox gap={"25px"} margin={"10px 0px 16px"}>
                  <SpotBox bgcolor={"#fff"} />
                  <SpotBox bgcolor={"#585c62"} />
                </FlexBox>
                <FlexBox gap={1}>
                  <FlexBox gap={"4px"}>
                    <SVG id="users" width={16} height={16} />
                    <RootTypography>{item?.users}</RootTypography>
                  </FlexBox>
                  <FlexBox gap={"4px"}>
                    <SVG id="refresh" width={17} height={16} />
                    <RootTypography>{item?.refresh}</RootTypography>
                  </FlexBox>
                </FlexBox>
              </Fragment> : 
              <Box marginTop={2}>
                <RootTypography>Missed profits</RootTypography>
                <RootTypography>{item?.missedProfit} hehe</RootTypography>
              </Box>
            }
          </RadialBackground>
          <BottomCircle />
          <TopCircle paddingTop={item?.isSnow ? "5px" : "0px"} justifyContent={item?.isSnow ? "start" : "center"}>
            {item?.isSnow && <SVG id="snow" width={10} height={11} />}
            <RootTypography>lvl {item?.level}</RootTypography>
          </TopCircle>
        </Fragment>
      )}
      <LeftEllips>
        <SVG id='left-ellips' width={10} height={6} />
      </LeftEllips>
      <RightEllips>
        <SVG id='right-ellips' width={10} height={6} />
      </RightEllips>
    </RootBox>
  )
}

export default BoostCard;
