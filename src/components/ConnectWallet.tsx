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
  height: "50px",
  padding: "8px 16px",
}));

const ChangeButton = styled(Button)(() => ({
  height: "50px",
  color: "white",
  borderWidth: "2px",
  borderRadius: "8px",
  padding: "8px 16px 3px",
  fontFamily: "Baloo",
  borderColor: "#272B30",
  backgroundColor: "transparent",
  "&:hover": {
    borderWidth: "2px",
    borderColor: "#272B30",
    backgroundColor: "#1A1D1F",
  },
}));

const BlackButton = styled(Button)(() => ({
  height: "50px",
  color: "white",
  borderRadius: "8px",
  padding: "8px 16px",
  fontFamily: "Baloo",
  alignSelf: "center",
  backgroundColor: "#1A1D1F",
  "&:hover": {
    backgroundColor: "#1A1D1F",
  },
}));

const PopUpBox = styled(Box)(() => ({
  gap: "16px",
  width: "450px",
  display: "flex",
  padding: "12px 15px",
  flexDirection: "column",
  backgroundColor: "#1A1D1F",
}));

const ButtonWrapper = styled(Box)(() => ({
  gap: "8px",
  display: "flex",
}));

const BoxCustom = styled(Box)(() => ({
  gap: "8px",
  display: "flex",
  borderRadius: "8px",
  justifyContent: "space-between",
}));

const CoinBox = styled(Box)(() => ({
  gap: "8px",
  display: "flex",
  borderRadius: "8px",
  alignItems: 'center'
}));

const WalletAddress = styled(Typography)(() => ({
  fontSize: 20,
  fontWeight: 600,
  alignSelf: "center",
  fontFamily: "BalooSemiBold",
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
