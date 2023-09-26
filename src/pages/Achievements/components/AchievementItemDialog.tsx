import { styled } from "@mui/material/styles"
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BUSD_1 from "@/assets/BUSD/1.png";

interface AchievementItemDialogProps {
  open: boolean,
  handleClose: () => void,
}

const RootTypography = styled(Typography)(() => ({
  fontFamily: "BalooSemiBold",
  fontSize: 15
}));

const BackButton = styled(Button)(() => ({
  backgroundColor: "#314dff",
  color: "#fff",
  fontFamily: "BalooSemiBold",
  fontSize: "24px",
  width: "100%",
  "&: hover": {
    backgroundColor: "#314dff",
  }
}));

const ProgressBox = styled(Box)(() => ({
  padding: "16px",
  width: "100%",
  backgroundColor: "#262626",
  borderRadius: "20px"
}));

const ProgressLine = styled(Box)(() => ({
  borderRadius: "20px",
  background: "linear-gradient(90deg, rgba(95,2,243,1) 0%, rgba(145,0,244,1) 100%)",
  width: "10%",
  height: "7px"
}))

const AchievementItemDialog: React.FC<AchievementItemDialogProps> = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box sx={{textAlign: "center", padding: "32px"}} width={{xs: "100%", sm: 480}}>
        <img src={BUSD_1} alt="achievements" />
        <Box marginY={4}>
          <ProgressBox>
            <ProgressLine></ProgressLine>
          </ProgressBox>
          <RootTypography color="#6F767E">ID 18376 will be rewarded soon</RootTypography>
          <Box
            sx={{
              padding: "8px 16px",
              borderRadius: "16px",
              backgroundColor: "#262626"
            }}
          >
            <RootTypography sx={{fontSize: "32px"}}>Businessman</RootTypography>
            <RootTypography color="#6F767E">The Businessman achievement is awarded to users who have 500 partners in your structure. This includes both your personal partners and those who were invited by your partners.</RootTypography>
          </Box>
        </Box>
        <BackButton variant="contained" onClick={handleClose}>Back</BackButton>
      </Box>
    </Dialog>
  );
}

export default AchievementItemDialog;
