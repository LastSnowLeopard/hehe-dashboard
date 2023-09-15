import React from "react";
import { useRoot } from "@/hooks/RootContext";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import SVG from "./SVG";

const DisconnectButton = styled(Button)(() => ({
  padding: "8px 16px",
  height: "50px",
}));

const ChangeButton = styled(Button)(() => ({
  borderRadius: "8px",
  borderWidth: "2px",
  borderColor: "#272B30",
  padding: "8px 16px",
  fontFamily: "Baloo",
  color: "white",
  backgroundColor: "transparent",
  height: "50px",
  "&:hover": {
    backgroundColor: "#1A1D1F",
    borderColor: "#272B30",
    borderWidth: "2px",
  },
}));

const BlackButton = styled(Button)(() => ({
  borderRadius: "8px",
  padding: "8px 16px",
  fontFamily: "Baloo",
  color: "white",
  backgroundColor: "#1A1D1F",
  height: "50px",
  alignSelf: "center",
  "&:hover": {
    backgroundColor: "#1A1D1F",
  },
}));

const PopUpBox = styled(Box)(() => ({
  // borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  backgroundColor: "#1A1D1F",
  padding: "12px 15px",
  width: "450px",
}));

const ButtonWrapper = styled(Box)(() => ({
  display: "flex",
  gap: "8px",
}));

const BoxCustom = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  borderRadius: "8px",
  gap: "8px",
}));

const CoinBox = styled(Box)(() => ({
  display: "flex",
  borderRadius: "8px",
  gap: "8px",
  alignItems: 'center'
}));

const WalletAddress = styled(Typography)(() => ({
  fontWeight: 600,
  fontSize: 20,
  fontFamily: "BalooSemiBold",
  alignSelf: "center",
}));

const ConnectWallet: React.FC = () => {
  const { connectWalletAnchor, closeConnectWallet } = useRoot();

  const handleClose = () => {
    closeConnectWallet();
  };

  const open = Boolean(connectWalletAnchor);
  const id = open ? "simple-popover" : undefined;

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={connectWalletAnchor}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      sx={{ backgroundColor: "#00000080" }}
    >
      <PopUpBox>
        <BoxCustom>
          <Box>
            <Typography sx={{ fontSize: "18px", color: "#6F767E" }}>
              Connected with Metamask
            </Typography>
          </Box>
          <ButtonWrapper>
            <ChangeButton variant="outlined" size="large">
              Change
            </ChangeButton>
            <DisconnectButton
              color="primary"
              variant="contained"
              size="large"
              sx={{
                padding: "8px 16px",
                borderRadius: "8px",
                borderWidth: "2px",
                borderColor: "#272B30",
                fontFamily: "Baloo",
              }}
            >
              Disconnect
            </DisconnectButton>
          </ButtonWrapper>
        </BoxCustom>
        <BoxCustom sx={{ backgroundColor: "#272B30", padding: "12px" }}>
          <Box>
            <BoxCustom>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Box>
                <WalletAddress>0xaDJd...asdef48</WalletAddress>
                <CoinBox>
                  <SVG id="coin" width={24} height={24} />
                  <WalletAddress>0.24</WalletAddress>
                </CoinBox>
              </Box>
            </BoxCustom>
          </Box>
          <ButtonWrapper>
            <BlackButton>Explorer</BlackButton>
            <BlackButton>Copy</BlackButton>
          </ButtonWrapper>
        </BoxCustom>
      </PopUpBox>
    </Popover>
  );
};

export default ConnectWallet;
