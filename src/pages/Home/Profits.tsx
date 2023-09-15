import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SVG from "@/components/SVG";
import HeheImg from "@/assets/token/hehe.png";

interface ProfitsProps {
  profit: {
    heheAmount: number;
    heheRate: number;
    busdAmount: number;
    busdRate: number;
  };
}

const CardCustom = styled(Card)(() => ({
  borderRadius: 12,
  backgroundColor: "#1A1D1F",
  padding: "12px 15px",
  backgroundImage: "none",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}));

const CardTitle = styled(Typography)(() => ({
  fontFamily: "BalooSemiBold",
  margin: 0,
  padding: 0,
  alignSelf: "center",
}));

const CustomBox = styled(Box)(() => ({
  display: "flex",
  borderRadius: 8,
  width: "100%"
}));

const TokenImg = styled("img")(() => ({
  width: "24px",
  height: "24px",
  alignSelf: "center",
}));

const ShowMoreButton = styled(Button)(() => ({
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
}))

const Profits: React.FC<ProfitsProps> = ({ profit }) => {
  const { heheAmount, heheRate, busdAmount, busdRate } = profit;

  return (
    <CardCustom>
      <CustomBox justifyContent={"space-between"} padding={"8px 0px"}>
        <CardTitle fontSize={24}>Profits</CardTitle>
        <Button
          variant="contained"
          sx={{
            borderRadius: "8px",
            padding: "8px 16px",
            fontFamily: "Baloo",
          }}
        >
          Claim
        </Button>
      </CustomBox>
      <CustomBox flexDirection={"column"}>
        <CustomBox justifyContent={"space-between"}>
          <Box display={"flex"} gap={1}>
            <TokenImg src={HeheImg}></TokenImg>
            <CardTitle fontSize={24}>{heheAmount} Hehe</CardTitle>
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <SVG width={16} height={16} id="up-arrow-green" />
            <CardTitle sx={{ color: "#83BF6E" }}>{heheRate}%</CardTitle>
          </Box>
        </CustomBox>
        <CustomBox justifyContent={"space-between"}>
          <CardTitle>{busdAmount} BUSD</CardTitle>
          <Box display={"flex"} alignItems={"center"}>
            <SVG width={16} height={16} id="up-arrow-green" />
            <CardTitle sx={{ color: "#83BF6E" }}>{busdRate}%</CardTitle>
          </Box>
        </CustomBox>
      </CustomBox>
      <ShowMoreButton size="small">Show more</ShowMoreButton>
    </CardCustom>
  );
};

export default Profits;
