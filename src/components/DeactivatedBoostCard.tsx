import { styled } from "@mui/material/styles";
import { useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HeheImg from "@/assets/token/hehe.png";

const RootBox = styled(Box)(() => ({
  width: 191,
  height: 191,
}));

const CircleWithTwoSemiSphere = styled("div")(() => ({
  width: 191,
  height: 191,
  borderRadius: "50%",
  position: "relative",
  zIndex: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&::before, &::after": {
    content: "''",
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: 191,
    height: 96,
    borderRadius: "50% / 100% 100% 0 0",
    border: "4px solid #fff",
    zIndex: 0,
    boxSizing: "border-box"
  },
  "&::before": {
    transform: "translateX(-50%) translateY(-100%)",
    borderBottomWidth: "4px",
    marginBottom: "-2px",
    backgroundColor: "#3d4045",
    zIndex: 0,
  },
  "&::after": {
    bottom: "auto",
    top: 0,
    transform: "translateX(-50%) translateY(100%) rotate(180deg)",
    borderTopWidth: "4px",
    marginTop: "-2px",
    backgroundColor: "#272b30",
    zIndex: 0,
  },
}));

const CenterCircle = styled(Box)(() => ({
  width: 65,
  height: 65,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "4px solid #fff",
  borderRadius: "50%",
  backgroundColor: "#33383F",
  zIndex: 1
}));

const CenterBox = styled(Box)(() => ({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  zIndex: 10
}));

const TokenImg = styled("img")(() => ({
  width: "24px",
  height: "24px",
  alignSelf: "center",
}));

const RootTypography = styled(Typography)(() => ({
  fontFamily: "BalooSemiBold",
  fontWeight: 700,
  fontSize: 15,
  lineHeight: "24px"
}));

const ActivateButton = styled(Button)(() => ({
  padding: "2px 16px 1px",
  borderRadius: "8px",
  textTransform: "none",
  fontFamily: "BalooSemiBold",
  fontWeight: 700,
}));

interface DeactivatedBoostCardProps {
  item?: {
    isSnow: boolean,
    level: number,
    price: string,
    users: number,
    refresh: number,
    showActiveBtn: boolean
  }
}

const DeactivatedBoostCard: React.FC<DeactivatedBoostCardProps> = ({ item }) => {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate('/boost/123');
  }
  
  return(
    <RootBox>
      <CircleWithTwoSemiSphere>
        <CenterBox>
          <Box display={"flex"} gap={1}>
            <TokenImg src={HeheImg} />
            <RootTypography>{item?.price}</RootTypography>
          </Box>
          <CenterCircle>
            <RootTypography>lvl {item?.level}</RootTypography>
          </CenterCircle>
          <ActivateButton variant="contained" sx={{visibility: item?.showActiveBtn ? 'visible' : 'hidden' }} onClick={goDetail}>Activate</ActivateButton>
        </CenterBox>
      </CircleWithTwoSemiSphere>
    </RootBox>
  )
}

export default DeactivatedBoostCard;
