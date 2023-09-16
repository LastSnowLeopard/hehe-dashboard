import { styled } from "@mui/material/styles";
import { useRoot } from "@/hooks/RootContext";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ListSubheader, Paper, Popover } from "@mui/material";
import EthereumLogo from "@/assets/token/eth.png";
import BSCLogo from "@/assets/token/binance.png";
import PolygonLogo from "@/assets/token/polygon.png";
import OptimismLogo from "@/assets/token/optimism.png";
import GnosisLogo from "@/assets/token/gnosis.png";
import ArbitrumLogo from "@/assets/token/arbitrum.png";
import AvalancheLogo from "@/assets/token/avalanche.png";
import FantomLogo from "@/assets/token/fantom.png";
import KlaytnLogo from "@/assets/token/klaytn.png";
import AuroraLogo from "@/assets/token/aurora.png";

const networks = [
  { name: "ETH mainnet", logo: EthereumLogo },
  { name: "BCS mainnet", logo: BSCLogo },
  { name: "Polygon", logo: PolygonLogo },
  { name: "Optimism", logo: OptimismLogo },
  { name: "Gnosis", logo: GnosisLogo },
  { name: "Arbitrum", logo: ArbitrumLogo },
  { name: "Avalanche", logo: AvalancheLogo },
  { name: "Fantom", logo: FantomLogo },
  { name: "Klaytn", logo: KlaytnLogo },
  { name: "Aurora", logo: AuroraLogo },
];


const ListCustom = styled(List)(() => ({
  gap: "8px",
  width: "250px",
  display: "flex",
  flexDirection: "column",
}));

const ListSubheaderCustom = styled(ListSubheader)(() => ({
  backgroundColor: "transparent",
  fontSize: "18px"
}));

const ListItemButtonCustom = styled(ListItemButton)(() => ({
  borderRadius: "8px",
  padding: "8px 16px",
  fontFamily: "BalooSemiBold",
  "&:hover": {
    backgroundColor: "#FDE048",
    "& span": {
      color: "#111315",
    },
  },
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

const PaperCustom = styled(Paper)(() => ({
  padding: "16px 15px",
  backgroundColor: "#1A1D1F",
}));

const SelectNetwork: React.FC = () => {
  const { selectNetworkAnchor, closeSelectNetwork } = useRoot();

  const handleClose = () => {
    closeSelectNetwork();
  };

  const open = Boolean(selectNetworkAnchor);
  const id = open ? "simple-popover" : undefined;

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={selectNetworkAnchor}
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
      <PaperCustom>
        <ListCustom sx={{ pt: 0 }} subheader={<ListSubheaderCustom>Select Network</ListSubheaderCustom>}>
          {networks.map((network) => (
            <ListItemButtonCustom key={network.name}>
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <ListItemImg src={network.logo} />
              </ListItemIcon>
              <ListItemTextCustom primary={network.name} />
            </ListItemButtonCustom>
          ))}
        </ListCustom>
      </PaperCustom>
    </Popover>
  );
};

export default SelectNetwork;
