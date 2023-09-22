import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Drawer from "@mui/material/Drawer";
import { useRoot } from "@/hooks/RootContext";
import LogoImg from "@/assets/Logo.png";

const DrawerHeader = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const Logo = styled("img")(() => ({
  width: "48px",
  height: "48px",
}));

const ListItemButtonCustom = styled(ListItemButton)(() => ({
  borderRadius: "12px",
  padding: "8px 14px",
  color: "#6F767E",
  fontFamily: "BalooSemiBold",
  "&.Mui-selected": {
    boxShadow:
      "0px 1px 1px 0px #FFFFFF1C inset, 0px -2px 1px 0px #00000066 inset",
    "& svg path": {
      fill: "#FDE048",
    },
    "& span": {
      color: "#FDE048",
    },
  },
  "&:hover": {
    boxShadow:
      "0px 1px 1px 0px #FFFFFF1C inset, 0px -2px 1px 0px #00000066 inset",
    "& svg path": {
      fill: "#FDE048",
    },
    "& span": {
      color: "#FDE048",
    },
  },
}));

const ListItemTextCustom = styled(ListItemText)(() => ({
  "& span": {
    fontFamily: "BalooSemiBold",
    fontSize: "18px",
  },
}));

const ListItemButtonSub = styled(ListItemButton)(() => ({
  borderRadius: "12px",
  padding: "6px 14px",
  color: "#6F767E",
  fontFamily: "BalooSemiBold",
  position: "relative",
  "&:hover": {
    boxShadow:
      "0px 1px 1px 0px #FFFFFF1C inset, 0px -2px 1px 0px #00000066 inset",
    "& span": {
      color: "#FDE048",
    },
  },
  "&::before": {
    content: "''",
    position: "absolute",
    width: "15px",
    height: "15px",
    backgroundColor: "transparent",
    borderLeft: "solid 2px #6F767E",
    borderBottom: "solid 2px #6F767E",
    borderBottomLeftRadius: "13px",
    top: "9px",
    left: "-15px",
  },
}));

interface SidebarProps {
  window?: () => Window;
}

const Sidebar: React.FC<SidebarProps> = ({ window }) => {
  const { drawerWidth, sideOpenD, toggleSideOpenD } = useRoot();
  const [open, setOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(!open);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleListItemClick = (index: number, path: string) => {
    setSelectedIndex(index);
    navigate(path);
  };
  return (
    <Drawer
      container={container}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        display: { xs: "none", md: "block" },
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#1A1D1F",
          borderRight: "0px",
          height: "100vh",
          padding: "24px",
        },
      }}
      variant="persistent"
      anchor="left"
      open={sideOpenD}
    >
      <DrawerHeader>
        <Logo src={LogoImg} alt="logo" />
        <IconButton sx={{ display: "none" }} onClick={toggleSideOpenD}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <List
        sx={{ width: "100%", paddingTop: "48px" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButtonCustom
          selected={selectedIndex === 1}
          onClick={() => handleListItemClick(1, "/")}
        >
          <ListItemIcon sx={{ minWidth: "40px" }}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 20C1.34315 20 0 18.6569 0 17V9.33613C0 8.48567 0.360964 7.67518 0.993106 7.10625L7.9931 0.806251C9.13402 -0.220572 10.866 -0.220574 12.0069 0.80625L19.0069 7.10625C19.639 7.67518 20 8.48567 20 9.33613V17C20 18.6569 18.6569 20 17 20H3ZM18 9.33613V17C18 17.5523 17.5523 18 17 18H14V13C14 11.3432 12.6569 10 11 10H9C7.34315 10 6 11.3432 6 13V18H3C2.44772 18 2 17.5523 2 17V9.33613C2 9.05265 2.12032 8.78248 2.33104 8.59284L9.33103 2.29284C9.71134 1.95056 10.2887 1.95056 10.669 2.29284L17.669 8.59284C17.8797 8.78248 18 9.05265 18 9.33613ZM8 18V13C8 12.4478 8.44772 12 9 12H11C11.5523 12 12 12.4478 12 13V18H8Z"
                fill="#6F767E"
              />
            </svg>
          </ListItemIcon>
          <ListItemTextCustom primary="Dashboard" />
        </ListItemButtonCustom>
        <ListItemButtonCustom
          selected={selectedIndex === 2 || selectedIndex === 3 || selectedIndex === 4}
          onClick={handleClick}
        >
          <ListItemIcon sx={{ minWidth: "40px" }}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10ZM12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                fill="#6F767E"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 16C6.79086 16 5 17.7909 5 20V21C5 21.5523 4.55228 22 4 22C3.44772 22 3 21.5523 3 21V20C3 16.6863 5.68629 14 9 14H15C18.3137 14 21 16.6863 21 20V21C21 21.5523 20.5523 22 20 22C19.4477 22 19 21.5523 19 21V20C19 17.7909 17.2091 16 15 16H9Z"
                fill="#6F767E"
              />
            </svg>
          </ListItemIcon>
          <ListItemTextCustom primary="Team" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButtonCustom>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List
            component="div"
            sx={{
              paddingLeft: "40px",
              "&::before": {
                content: "''",
                position: "absolute",
                height: "calc(100% - 42px)",
                width: "2px",
                backgroundColor: "#6F767E",
                top: "0px",
                left: "25px",
              },
            }}
          >
            <ListItemButtonSub
              selected={selectedIndex === 2}
              onClick={() => handleListItemClick(2, "/partners")}
            >
              <ListItemTextCustom primary="Patners" />
            </ListItemButtonSub>
            <ListItemButtonSub
              selected={selectedIndex === 3}
              onClick={() => handleListItemClick(3, "/links")}
            >
              <ListItemTextCustom primary="Links" />
            </ListItemButtonSub>
            <ListItemButtonSub
              selected={selectedIndex === 4}
              onClick={() => handleListItemClick(4, "/stats")}
            >
              <ListItemTextCustom primary="Stats" />
            </ListItemButtonSub>
          </List>
        </Collapse>
        <ListItemButtonCustom>
          <ListItemIcon sx={{ minWidth: "40px" }}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 0C5.44772 0 5 0.447715 5 1V7.9992C4.59055 8.14361 4.20617 8.37955 3.87868 8.70705L0.585786 11.9999C0.210714 12.375 0 12.8837 0 13.4142V17.9999C0 19.1045 0.895432 19.9999 2 19.9999H18C19.1046 19.9999 20 19.1045 20 17.9999V15.4142C20 14.8837 19.7893 14.375 19.4142 13.9999L17.1213 11.7071C15.9497 10.5355 14.0503 10.5355 12.8787 11.7071L12 12.5857L8.12132 8.70705C7.79383 8.37956 7.40945 8.14361 7 7.9992V6H12C12.3466 6 12.6684 5.82055 12.8507 5.52573C13.0329 5.23091 13.0494 4.86277 12.8944 4.55279L12.118 3L12.8944 1.44721C13.0494 1.13723 13.0329 0.769085 12.8507 0.474269C12.6684 0.179452 12.3466 0 12 0H6ZM10.382 4H7V2H10.382L10.1056 2.55279C9.96481 2.83431 9.96481 3.16569 10.1056 3.44721L10.382 4ZM2 13.4142L5.29289 10.1213C5.68342 9.73074 6.31658 9.73074 6.70711 10.1213L11.2929 14.707C11.6834 15.0976 12.3166 15.0976 12.7071 14.707L14.2929 13.1213C14.6834 12.7307 15.3166 12.7307 15.7071 13.1213L18 15.4142V17.9999H2V13.4142Z"
                fill="#6F767E"
              />
            </svg>
          </ListItemIcon>
          <ListItemTextCustom primary="Marathon" />
        </ListItemButtonCustom>
        <ListItemButtonCustom>
          <ListItemIcon sx={{ minWidth: "40px" }}>
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.51812 0.000183105C7.50537 -6.16391e-05 7.49264 -6.04301e-05 7.47996 0.000183105H5.55221C4.31497 0.000183105 3.20463 0.759728 2.75619 1.91284L0.96825 6.51041C0.533862 7.62741 1.01111 8.85241 2 9.41232V17.0002C2 18.657 3.34315 20.0002 5 20.0002H17C18.6569 20.0002 20 18.657 20 17.0002V9.41232C20.9889 8.85242 21.4662 7.62742 21.0318 6.51041L19.2438 1.91284C18.7954 0.75973 17.685 0.000183105 16.4478 0.000183105H14.5201C14.5074 -6.04301e-05 14.4947 -6.16391e-05 14.4819 0.000183105H7.51812ZM18 9.73862C17.5515 9.68608 17.1119 9.55611 16.7016 9.35097L16.0005 9.00041L15.9994 9.00041L15.357 9.2574C14.1649 9.73422 12.8351 9.73422 11.6431 9.2574L11 9.00018L10.357 9.2574C9.1649 9.73422 7.83511 9.73422 6.64305 9.2574L6.00058 9.00041L5.99955 9.00041L5.29844 9.35097C4.88814 9.55612 4.44854 9.68608 4 9.73862V17.0002C4 17.5524 4.44772 18.0002 5 18.0002H7V15.0002C7 13.3433 8.34315 12.0002 10 12.0002H12C13.6569 12.0002 15 13.3433 15 15.0002V18.0002H17C17.5523 18.0002 18 17.5524 18 17.0002V9.73862ZM16.8944 7.21133C16.8793 7.20379 16.8642 7.19644 16.849 7.18931L15.737 2.00018H16.4478C16.8602 2.00018 17.2303 2.25337 17.3798 2.63774L19.1678 7.23531C19.2451 7.43429 19.1304 7.65603 18.9233 7.70781C18.4776 7.81922 18.0069 7.76754 17.596 7.56211L16.8944 7.21133ZM14.8303 7.31401L13.6916 2.00018H12V7.24612L12.3858 7.40045C13.1011 7.68654 13.8989 7.68654 14.6142 7.40045L14.8303 7.31401ZM10 2.00018H8.30844L7.16976 7.31402L7.38583 7.40045C8.10107 7.68654 8.89894 7.68654 9.61418 7.40045L10 7.24612V2.00018ZM5.15109 7.18929L6.26304 2.00018H5.55221C5.13979 2.00018 4.76968 2.25336 4.6202 2.63773L2.83226 7.2353C2.75488 7.43429 2.8696 7.65603 3.07673 7.70781C3.52237 7.81922 3.99315 7.76754 4.40401 7.56211L5.10558 7.21133C5.12068 7.20378 5.13585 7.19643 5.15109 7.18929ZM13 15.0002V18.0002H9V15.0002C9 14.4479 9.44772 14.0002 10 14.0002H12C12.5523 14.0002 13 14.4479 13 15.0002Z"
                fill="#6F767E"
              />
            </svg>
          </ListItemIcon>
          <ListItemTextCustom primary="Social" />
        </ListItemButtonCustom>
        <ListItemButtonCustom>
          <ListItemIcon sx={{ minWidth: "40px" }}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.0541 2.34459C11.1754 1.38904 12.8246 1.38904 13.9459 2.34459L15.2173 3.42812C15.3775 3.56461 15.5766 3.6471 15.7864 3.66384L17.4516 3.79673C18.9202 3.91392 20.0863 5.08005 20.2035 6.54858L20.3364 8.21382C20.3531 8.42358 20.4356 8.62272 20.5721 8.78289L21.6556 10.0544C22.6112 11.1756 22.6112 12.8248 21.6556 13.9461L20.5721 15.2175C20.4356 15.3777 20.3531 15.5768 20.3364 15.7866L20.2035 17.4518C20.0863 18.9204 18.9202 20.0865 17.4516 20.2037L15.7864 20.3366C15.5766 20.3533 15.3775 20.4358 15.2173 20.5723L13.9459 21.6558C12.8246 22.6114 11.1754 22.6114 10.0541 21.6558L8.78268 20.5723C8.62252 20.4358 8.42338 20.3533 8.21361 20.3366L6.54837 20.2037C5.07984 20.0865 3.91371 18.9204 3.79652 17.4518L3.66363 15.7866C3.64689 15.5768 3.56441 15.3777 3.42792 15.2175L2.34438 13.9461C1.38884 12.8248 1.38884 11.1756 2.34438 10.0544L3.42792 8.78289C3.56441 8.62272 3.64689 8.42358 3.66363 8.21382L3.79652 6.54858C3.91371 5.08005 5.07984 3.91392 6.54837 3.79673L8.21361 3.66384C8.42338 3.6471 8.62252 3.56461 8.78268 3.42812L10.0541 2.34459ZM12.6486 3.86682C12.2749 3.5483 11.7251 3.5483 11.3514 3.86682L10.0799 4.95035C9.59942 5.35982 9.00201 5.60728 8.37271 5.6575L6.70747 5.79039C6.21796 5.82945 5.82925 6.21816 5.79018 6.70767L5.6573 8.37291C5.60708 9.00221 5.35962 9.59963 4.95015 10.0801L3.86661 11.3516C3.5481 11.7253 3.5481 12.2751 3.86661 12.6488L4.95015 13.9203C5.35962 14.4008 5.60708 14.9982 5.6573 15.6275L5.79018 17.2927C5.82925 17.7822 6.21796 18.171 6.70747 18.21L8.37271 18.3429C9.00201 18.3931 9.59942 18.6406 10.0799 19.0501L11.3514 20.1336C11.7251 20.4521 12.2749 20.4521 12.6486 20.1336L13.9201 19.0501C14.4006 18.6406 14.998 18.3931 15.6273 18.3429L17.2925 18.21C17.782 18.171 18.1708 17.7822 18.2098 17.2927L18.3427 15.6275C18.3929 14.9982 18.6404 14.4008 19.0499 13.9203L20.1334 12.6488C20.4519 12.2751 20.4519 11.7253 20.1334 11.3516L19.0499 10.0801C18.6404 9.59963 18.3929 9.00221 18.3427 8.37291L18.2098 6.70767C18.1708 6.21816 17.782 5.82945 17.2925 5.79039L15.6273 5.6575C14.998 5.60728 14.4006 5.35982 13.9201 4.95035L12.6486 3.86682Z"
                fill="#6F767E"
              />
              <path
                d="M11 9.5C11 10.3284 10.3284 11 9.5 11C8.67157 11 8 10.3284 8 9.5C8 8.67157 8.67157 8 9.5 8C10.3284 8 11 8.67157 11 9.5Z"
                fill="#6F767E"
              />
              <path
                d="M16 14.5C16 15.3284 15.3284 16 14.5 16C13.6716 16 13 15.3284 13 14.5C13 13.6716 13.6716 13 14.5 13C15.3284 13 16 13.6716 16 14.5Z"
                fill="#6F767E"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.1402 8.2318C15.5645 8.58537 15.6218 9.21593 15.2682 9.64021L10.2682 15.6402C9.91466 16.0645 9.28409 16.1218 8.85982 15.7682C8.43554 15.4147 8.37821 14.7841 8.73178 14.3598L13.7318 8.35984C14.0853 7.93556 14.7159 7.87824 15.1402 8.2318Z"
                fill="#6F767E"
              />
            </svg>
          </ListItemIcon>
          <ListItemTextCustom primary="NFTs" />
        </ListItemButtonCustom>
        <ListItemButtonCustom>
          <ListItemIcon sx={{ minWidth: "40px" }}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="#6F767E"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 10C12.5523 10 13 10.4477 13 11V16.0009C13 16.5532 12.5523 17.0009 12 17.0009C11.4477 17.0009 11 16.5532 11 16.0009V11C11 10.4477 11.4477 10 12 10Z"
                fill="#6F767E"
              />
              <circle cx="12" cy="8" r="1" fill="#6F767E" />
            </svg>
          </ListItemIcon>
          <ListItemTextCustom primary="Information" />
        </ListItemButtonCustom>
      </List>
    </Drawer>
  );
};

export default Sidebar;
