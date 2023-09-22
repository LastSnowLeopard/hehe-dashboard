import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const RootBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "16px 24px",
  borderRadius: "12px",
  background: 'radial-gradient(66.68% 64.75% at 63.2% 81.39%, rgba(253, 224, 72, 0.20) 0%, rgba(253, 224, 72, 0.00) 100%), #1A1D1F',
  [theme.breakpoints.down('sm')]:{
    padding: "12px"
  }
}));

const FlexBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down('sm')]:{
    flexDirection: "column"
  }
}));

const RootTypography = styled(Typography)(() => ({
  fontFamily: "BalooSemiBold",
  fontWeight: 600,
}));

const Boost: React.FC = () => {
  const navigate = useNavigate();
  
  return(
    <RootBox>
      <FlexBox>
        <RootTypography sx={{fontSize: {xs: 24, sm: 32}}}>Hehe boost program 🚀</RootTypography>
        <RootTypography sx={{fontSize: {xs: 24, sm: 32}}}>10 busd</RootTypography>
      </FlexBox>
      <Typography>2 lines, 12 traders, 500% per trade</Typography>
      <FlexBox>
        <Box></Box>
        <Box display={"flex"} flexDirection={"column"}>
          <RootTypography color="primary" textAlign={'right'} sx={{fontSize: {xs: 15, sm: 24}}}>Missed profits</RootTypography>
          <RootTypography color="primary" textAlign={'right'} sx={{fontSize: {xs: 15, sm: 24}}}>330 BUSD</RootTypography>
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
            onClick={() => navigate('/boost')}
          >
            Preview
          </Button>
        </Box>
      </FlexBox>
    </RootBox>
  )
}

export default Boost;
