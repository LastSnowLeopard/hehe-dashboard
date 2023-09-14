import React from "react";
import { styled } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useRoot } from "@/hooks/RootContext";

interface MainProps {
  open?: boolean;
  drawer_width: number;
}

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<MainProps>(({ theme, open, drawer_width }) => ({
  flexGrow: 1,
  height: '100vh',
  padding: theme.spacing(3),
  paddingTop: "64px",
  backgroundColor: theme.palette.mode === "dark" ? "#272B30" : "#fff",
  color: theme.palette.mode === "dark" ? "#fff" : "#272B30",
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawer_width}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const MainLayout: React.FC = () => {
  const { sideOpenD, drawerWidth } = useRoot();
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Sidebar />
      <Main open={sideOpenD} drawer_width={drawerWidth}>
        <Outlet />
      </Main>
    </Box>
  );
};

export default MainLayout;
