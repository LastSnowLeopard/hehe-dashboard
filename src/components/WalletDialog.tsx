import { styled } from "@mui/material/styles";
import { useRoot } from "@/hooks/RootContext";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Paper } from "@mui/material";
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import MetaMask from "@/assets/wallet/metamask.png";
import Torus from "@/assets/wallet/torus.png";
import SVG from "./SVG";

const DialogWrapper = styled(Paper)(({ theme }) => ({
  padding: "16px 15px",
//   borderRadius: "8px",
  backgroundImage: "none",
  backgroundColor: theme.palette.mode === "dark" ? "#1A1D1F" : "#fff",
}));

const DialogTitleCustom = styled(DialogTitle)(() => ({
  color: "#6F767E",
  textAlign: "center",
  padding: 0,
}));

const DialogFooter = styled(DialogTitle)(() => ({
  width: "310px",
  fontSize: "12px",
  fontWeight: 700,
  margin: "auto",
  color: "#6F767E",
  textAlign: "center",
  padding: 0,
}));

const ListCustom = styled(List)(() => ({
  gap: "8px",
  width: "347px",
  display: "flex",
  padding: "0px 16px",
  margin: "16px 0px",
  flexDirection: "column",
}));

const ListItemButtonCustom = styled(ListItemButton)(() => ({
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: "#272B30",
  borderRadius: "8px",
  padding: "8px 16px",
  fontFamily: "BalooSemiBold",
  display: "flex",
  justifyContent: "center",
}));

const ListItemTextCustom = styled(ListItemText)(() => ({
  flex: "none",
  "& span": {
    fontFamily: "BalooSemiBold",
    fontSize: "20px",
    fontWeight: 600,
  },
}));

const ListItemImg = styled("img")(() => ({
  width: "25px",
}));

const WalletDialog: React.FC = () => {
  const { walletDialogOpen, toggleWalletDialog } = useRoot();
  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  })
  
  const handleDialogClose = () => {
    toggleWalletDialog();
  };

  const metamaskConnect = () => {
    connect();
  }

  return (
    <Dialog onClose={handleDialogClose} open={walletDialogOpen}>
      <DialogWrapper>
        <DialogTitleCustom>Connect Wallet</DialogTitleCustom>
        <ListCustom sx={{ pt: 0 }}>
          <ListItemButtonCustom>
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <SVG id="browser-connect" width={26} height={24} />
            </ListItemIcon>
            <ListItemTextCustom primary="Browser connect" />
          </ListItemButtonCustom>
          <ListItemButtonCustom onClick={metamaskConnect}>
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <ListItemImg src={MetaMask}></ListItemImg>
            </ListItemIcon>
            <ListItemTextCustom primary="Metamask" />
          </ListItemButtonCustom>
          <ListItemButtonCustom>
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <SVG id="wallet-connect" width={26} height={24} />
            </ListItemIcon>
            <ListItemTextCustom primary="Wallet Connect" />
          </ListItemButtonCustom>
          <ListItemButtonCustom>
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <SVG id="coinbase" width={25} height={24} />
            </ListItemIcon>
            <ListItemTextCustom primary="Coinbase" />
          </ListItemButtonCustom>
          <ListItemButtonCustom>
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <ListItemImg src={Torus}></ListItemImg>
            </ListItemIcon>
            <ListItemTextCustom primary="Torus" />
          </ListItemButtonCustom>
          <ListItemButtonCustom>
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <SVG id="frame" width={26} height={26} />
            </ListItemIcon>
            <ListItemTextCustom primary="Frame" />
          </ListItemButtonCustom>
        </ListCustom>
        <DialogFooter>
          Safely connect to your existing blockchain wallet and directly stake
          tokens in them.
        </DialogFooter>
      </DialogWrapper>
    </Dialog>
  );
};

export default WalletDialog;
