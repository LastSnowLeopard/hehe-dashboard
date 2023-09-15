import { Toolbar, IconButton, Button, Box } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AppBar from "./AppBar";
import { useRoot } from "@/hooks/RootContext";

const Header: React.FC = () => {
  const {
    drawerWidth,
    sideOpenD,
    toggleSideOpenD,
    toggleSideOpenM,
    toggleWalletDialog,
    handleConnectWalletAnchor,
    handleSelectNetworkAnchor
  } = useRoot();

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
        <Button
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
        </Button>
        <Button
          color="primary"
          variant="contained"
          size="small"
          sx={{
            padding: "8px 20px 3px",
            borderRadius: "20px",
            fontFamily: "Baloo",
          }}
          onClick={handleConnectWalletAnchor}
        >
          Change Wallet
        </Button>
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
          Wallet Connect
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
