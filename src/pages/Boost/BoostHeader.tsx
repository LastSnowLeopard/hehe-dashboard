import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

const RootBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px"
}))

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
  fontSize: "32px",
  lineHeight: "40px",
  fontFamily: "BalooSemiBold"
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

const BoostHeader: React.FC = () => {
  return (
    <RootBox>
      <Box>
        <ChangeButton>Back</ChangeButton>
      </Box>
      <Box display={"flex"} gap={1}>
        <Header>Hehe boost program 🚀</Header>
        <IDChip label={"ID 4623"} />
      </Box>
    </RootBox>
  )
}

export default BoostHeader;
