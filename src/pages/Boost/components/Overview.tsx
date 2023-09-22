import React from "react";
import { styled } from "@mui/material/styles";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import SVG from "@/components/SVG";
import Pagination from "@/components/Pagination";

const lists = [
  {
    increase: false,
  },
  {
    increase: false,
  },
  {
    increase: false,
  },
  {
    increase: true,
  },
  {
    increase: false,
  },
  {
    increase: false,
  },
  {
    increase: false,
  },
  {
    increase: false,
  },
  {
    increase: false,
  },
  {
    increase: false,
  },
];

const RootBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "16px 24px",
  borderRadius: "12px",
  gap: "24px",
  backgroundColor: "#1A1D1F",
}));

const FlexBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const RootTypography = styled(Typography)(() => ({
  fontFamily: "BalooSemiBold",
  fontWeight: 600,
  alignSelf: "center",
}));

const IDChip = styled(Chip)(() => ({
  backgroundColor: "#EAFAE426",
  alignSelf: "center",
  padding: "0px 8px",
  borderRadius: "4px",
  color: "#83BF6E",
  height: "24px",
  fontFamily: "BalooSemiBold",
}));

const RootList = styled(List)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
}));

const RootDivider = styled(Divider)(() => ({
  margin: "8px 0px",
}));

const Overview: React.FC = () => {
  return (
    <RootBox>
      <RootList>
        {lists.map((list, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <FlexBox>
                <RootTypography
                  fontSize={15}
                  color={list?.increase ? "#83BF6E" : "#fff"}
                >
                  {list?.increase ? "recycle" : "5 HEHE"}
                </RootTypography>
              </FlexBox>
            }
            sx={{ padding: "16px 12px" }}
          >
            <FlexBox gap={3}>
              <SVG
                id={list?.increase ? "refresh-green" : "person"}
                width={26}
                height={31}
              />
              <RootTypography fontSize={15}>20.04.2023 14:23</RootTypography>
              <IDChip label="ID234234" />
              <RootTypography fontSize={15}>1 lvl</RootTypography>
              <FlexBox>
                <RootTypography fontSize={15}>0x2323...1csd3</RootTypography>
                <IconButton>
                  <OpenInNewIcon sx={{ color: "#6F767E" }} />
                </IconButton>
              </FlexBox>
            </FlexBox>
          </ListItem>
        ))}
      </RootList>
      <Box>
        <RootDivider />
        <RootDivider />
      </Box>
      <Pagination />
    </RootBox>
  );
};

export default Overview;
