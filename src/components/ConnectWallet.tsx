import React from "react";
import { useRoot } from "@/hooks/RootContext";
import { styled } from "@mui/material/styles";
import { useAccount, useDisconnect, useBalance } from "wagmi";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import SVG from "./SVG";
import { formatBalance, formatLongWalletAddress } from "../utils/formatter";

const DisconnectButton = styled(Button)(({ theme }) => ({
  height: "50px",
  padding: "8px 16px",
  textTransform: "none",
  [theme.breakpoints.down("sm")]: {
    fontSize: "13px"
  }
}));

const ChangeButton = styled(Button)(({ theme }) => ({
  height: "50px",
  color: "white",
  borderWidth: "2px",
  borderRadius: "8px",
  padding: "8px 16px 5px",
  fontFamily: "Baloo",
  textTransform: "none",
  borderColor: "#272B30",
  backgroundColor: "transparent",
  "&:hover": {
    borderWidth: "2px",
    borderColor: "#272B30",
    backgroundColor: "#1A1D1F",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "13px"
  }
}));

const BlackButton = styled(Button)(({ theme }) => ({
  height: "50px",
  width: "auto",
  color: "white",
  borderRadius: "8px",
  padding: "8px 16px",
  fontFamily: "Baloo",
  alignSelf: "center",
  backgroundColor: "#1A1D1F",
  "&:hover": {
    backgroundColor: "#1A1D1F",
  },
  textTransform: "none",
  [theme.breakpoints.down("sm")]: {
    width: "50%"
  }
}));

const PopUpBox = styled(Box)(() => ({
  gap: "16px",
  // width: "450px",
  display: "flex",
  padding: "12px 15px",
  flexDirection: "column",
  backgroundColor: "#1A1D1F",
}));

const ButtonWrapper = styled(Box)(({ theme }) => ({
  gap: "8px",
  display: "flex",
  [theme.breakpoints.down('sm')]: {
    width: "100%"
  }
}));

const RootBox = styled(Box)(() => ({
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
  const [tooltipOpen, setTooltipOpen] = React.useState(false);
  const { 
    connectWalletAnchor, 
    closeConnectWallet,
    handleSelectNetworkAnchor 
  } = useRoot();
  const { address, connector } = useAccount()
  const { data, isLoading } = useBalance({
    address: address as `0x${string}` | undefined,
  });
  
  const toogleTooltip = () => {
    setTooltipOpen((prev) => !prev);
  };

  const { disconnect } = useDisconnect()

  const handleClose = () => {
    closeConnectWallet();
  };

  const walletDisconnect = () => {
    disconnect();
    handleClose();
  };

  const explorerWallet = () => {
    window.open(`https://etherscan.io/address/${address}`, '_blank')
  };

  const copyWalletAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    toogleTooltip();
  };

  const closeTooltip = () => {
    setTooltipOpen(false)
  }

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
        <RootBox sx={{justifyContent: { xs: 'flex-start'}}}>
          <Box>
            <Typography 
              sx={{ 
                fontSize: "18px", 
                color: "#6F767E" 
                }}
              >
              {`Connected with ${connector?.name}`}
            </Typography>
          </Box>
          <ButtonWrapper>
            <ChangeButton 
              variant="outlined" 
              size="large" 
              onClick={handleSelectNetworkAnchor}
            >
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
              onClick={walletDisconnect}
            >
              Disconnect
            </DisconnectButton>
          </ButtonWrapper>
        </RootBox>
        <RootBox sx={{ 
          backgroundColor: "#272B30", 
          padding: "12px",
          flexDirection: { xs: "column", sm: "row"}
          }}
        >
          <Box>
            <RootBox sx={{justifyContent: { xs: 'flex-start'}}}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Box>
                <WalletAddress>
                  {
                    isLoading ? "Calculating..." :
                    address && formatLongWalletAddress(address)
                  }
                </WalletAddress>
                <CoinBox>
                  <SVG id="coin" width={24} height={24} />
                  <WalletAddress>
                    {formatBalance(data?.formatted)} {data?.symbol}
                  </WalletAddress>
                </CoinBox>
              </Box>
            </RootBox>
          </Box>
          <ButtonWrapper>
            <BlackButton onClick={explorerWallet}>Explorer</BlackButton>
            <ClickAwayListener onClickAway={closeTooltip}>
              <Tooltip 
                PopperProps={{
                  disablePortal: true,
                }}
                open={tooltipOpen} 
                onClose={toogleTooltip} 
                onOpen={toogleTooltip} 
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title="Copied to clilboard!">
                <BlackButton onClick={() => address && copyWalletAddress(address)}>Copy</BlackButton>
              </Tooltip>
            </ClickAwayListener>
          </ButtonWrapper>
        </RootBox>
      </PopUpBox>
    </Popover>
  );
};

export default ConnectWallet;
