import { Toolbar, IconButton, Button, Box } from "@mui/material";
import { useRoot } from "@/hooks/RootContext";
import { useAccount } from "wagmi";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AppBar from "./AppBar";
import { formatShortWalletAddress } from "../../utils/formatter";
import SVG from "@/components/SVG";

const Header: React.FC = () => {
  const {
    drawerWidth,
    sideOpenD,
    toggleSideOpenD,
    toggleSideOpenM,
    toggleWalletDialog,
    handleConnectWalletAnchor
  } = useRoot();
  const { address, isConnecting, isConnected } = useAccount();

  return (
    <AppBar open={sideOpenD} drawer_width={drawerWidth}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleSideOpenD}
          sx={{
            marginRight: "36px",
            ...(sideOpenD && { display: "none" }),
          }}
        >
          <ChevronRightIcon />
        </IconButton>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleSideOpenM}
          sx={{
            display: { xs: "inline-flex", md: "none" },
          }}
        >
          <ChevronRightIcon />
        </IconButton>
        <Box component="div" sx={{ flexGrow: 1 }}></Box>
        <Box display={"flex"} gap={1}>
          {isConnected ? (
            <Button
              color="primary"
              variant="contained"
              size="small"
              sx={{
                padding: "6px 20px 7px",
                borderRadius: "20px",
                fontFamily: "Baloo",
                lineHeight: "10px"
              }}
              onClick={handleConnectWalletAnchor}
              startIcon={<SVG id="wallet" width={24} height={24} />}
              endIcon={<KeyboardArrowDownIcon />}
            >
              {address && formatShortWalletAddress(address)}
            </Button>
          ) : (
            <Button
              color="primary"
              variant="contained"
              size="small"
              sx={{
                padding: "8px 20px 3px",
                borderRadius: "20px",
                fontFamily: "Baloo",
              }}
              onClick={toggleWalletDialog}
            >
              {isConnecting ? "Connecting..." : "Wallet Connect"}
            </Button>
          )}
          {/* <Button
            color="primary"
            variant="contained"
            size="small"
            sx={{
              padding: "8px 20px 3px",
              borderRadius: "20px",
              fontFamily: "Baloo",
            }}
            onClick={handleSelectNetworkAnchor}
          >
            Select Network
          </Button> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
