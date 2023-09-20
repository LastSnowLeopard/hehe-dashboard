import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SVG from "@/components/SVG";
import Chip from "@mui/material/Chip";
import { Divider } from "@mui/material";

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
  margin: "8px 0px"
}))

const PaginationArrow = styled("div")(() => ({
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "100px",
  borderColor: "transparent",
  borderWidth: "2px",
  borderStyle: "solid",
  cursor: "pointer",
  "&:hover": {
    borderColor: "#272B30",
    "& svg path": {
      fill: "#FCFCFC",
    },
  },
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
                <RootTypography fontSize={15} color={list?.increase ? "#83BF6E" : "#fff"}>
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
      <Box
        gap={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "15px",
        }}
      >
        <PaginationArrow>
          <svg
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.70708 13.7929C9.0976 14.1834 9.0976 14.8166 8.70708 15.2071C8.31655 15.5976 7.68339 15.5976 7.29286 15.2071L1.49997 9.41421C0.718923 8.63317 0.718921 7.36684 1.49997 6.58579L7.29286 0.792894C7.68339 0.402369 8.31655 0.402369 8.70708 0.792894C9.0976 1.18342 9.0976 1.81658 8.70708 2.20711L3.91419 7H18C18.5523 7 19 7.44772 19 8C19 8.55229 18.5523 9 18 9H3.91418L8.70708 13.7929Z"
              fill="#6F767E"
            />
          </svg>
        </PaginationArrow>
        <PaginationArrow>
          <svg
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.2929 13.7929C9.90237 14.1834 9.90237 14.8166 10.2929 15.2071C10.6834 15.5976 11.3166 15.5976 11.7071 15.2071L17.5 9.41421C18.281 8.63317 18.281 7.36684 17.5 6.58579L11.7071 0.792894C11.3166 0.402369 10.6834 0.402369 10.2929 0.792894C9.90237 1.18342 9.90237 1.81658 10.2929 2.20711L15.0858 7H1C0.447715 7 0 7.44772 0 8C0 8.55229 0.447715 9 1 9H15.0858L10.2929 13.7929Z"
              fill="#6F767E"
            />
          </svg>
        </PaginationArrow>
      </Box>
    </RootBox>
  );
};

export default Overview;
