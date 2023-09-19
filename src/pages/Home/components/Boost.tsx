import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const RootBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "16px 24px",
  borderRadius: "12px",
  background: 'radial-gradient(66.68% 64.75% at 63.2% 81.39%, rgba(253, 224, 72, 0.20) 0%, rgba(253, 224, 72, 0.00) 100%), #1A1D1F'
}))

const FlexBox = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
}))

const RootTypography = styled(Typography)(() => ({
  fontFamily: "BalooSemiBold",
  fontWeight: 600
}))

const Boost: React.FC = () => {
  return(
    <RootBox>
      <FlexBox>
        <RootTypography fontSize={32}>Hehe boost program 🚀</RootTypography>
        <RootTypography fontSize={32}>10 busd</RootTypography>
      </FlexBox>
      <Typography>2 lines, 12 traders, 500% per trade</Typography>
      <FlexBox>
        <Box></Box>
        <Box display={"flex"} flexDirection={"column"}>
          <RootTypography color="primary" textAlign={'right'}>Missed profits</RootTypography>
          <RootTypography color="primary" textAlign={'right'}>330 BUSD</RootTypography>
          <Button 
            variant="contained"
            sx={{
              borderRadius: "8px",
              marginTop: "8px",
              padding: "8px 16px 5px",
              fontFamily: "Baloo",
              textTransform: "none"
            }}
            endIcon={<OpenInNewIcon />}
          >
            Preview
          </Button>
        </Box>
      </FlexBox>
    </RootBox>
  )
}

export default Boost;
