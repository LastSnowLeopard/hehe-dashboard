import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import BUSD_1 from "@/assets/BUSD/1.png";
import BUSD_2 from "@/assets/BUSD/2.png";
import BUSD_3 from "@/assets/BUSD/3.png";
import BUSD_4 from "@/assets/BUSD/4.png";
import BUSD_5 from "@/assets/BUSD/5.png";
import Personal_1 from "@/assets/personalPartner/1.png";
import Personal_2 from "@/assets/personalPartner/2.png";
import Personal_3 from "@/assets/personalPartner/3.png";
import Personal_4 from "@/assets/personalPartner/4.png";
import Personal_5 from "@/assets/personalPartner/5.png";
import Team_1 from "@/assets/team/1.png";
import Team_2 from "@/assets/team/2.png";
import Team_3 from "@/assets/team/3.png";
import Team_4 from "@/assets/team/4.png";
import Team_5 from "@/assets/team/5.png";
import BNB_1 from "@/assets/BNB/1.png";
import BNB_2 from "@/assets/BNB/2.png";
import BNB_3 from "@/assets/BNB/3.png";
import BNB_4 from "@/assets/BNB/4.png";
import BNB_5 from "@/assets/BNB/5.png";
import AchievementItemDialog from "./AchievementItemDialog";

const images = {
  busd_1: BUSD_1,
  busd_2: BUSD_2,
  busd_3: BUSD_3,
  busd_4: BUSD_4,
  busd_5: BUSD_5,
  personal_1: Personal_1,
  personal_2: Personal_2,
  personal_3: Personal_3,
  personal_4: Personal_4,
  personal_5: Personal_5,
  team_1: Team_1,
  team_2: Team_2,
  team_3: Team_3,
  team_4: Team_4,
  team_5: Team_5,
  bnb_1: BNB_1,
  bnb_2: BNB_2,
  bnb_3: BNB_3,
  bnb_4: BNB_4,
  bnb_5: BNB_5,
}

const RootBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "16px 24px",
  borderRadius: "12px",
  gap: "24px",
  height: "100%",
  backgroundColor: "#1A1D1F",
  [theme.breakpoints.down('sm')]:{
    padding: "12px"
  }
}));

const FlexBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const RootTypography = styled(Typography)(() => ({
  fontFamily: "BalooSemiBold",
  fontWeight: 600,
  alignSelf: "center"
}));

const ShowButton = styled(Button)(() => ({
  borderRadius: "8px",
  borderWidth: "2px",
  borderColor: "#272B30",
  borderStyle: "solid",
  padding: "8px 16px 5px",
  fontFamily: "Baloo",
  fontSize: 13,
  color: "white",
  textTransform: "none",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "#1A1D1F",
    borderColor: "#272B30",
    borderWidth: "2px",
  },
}));

const AwardImg = styled("img")(({ theme }) => ({
  cursor: "pointer",
  height: "126px",
  [theme.breakpoints.down('lg')]: {
    width: "68px",
    height: "auto"
  },
  [theme.breakpoints.down('md')]: {
    width: "68px",
    height: "auto"
  },
  [theme.breakpoints.down('sm')]: {
    width: "48px",
    height: "auto"
  }
}));

interface AchievementProps {
  title: string,
  imageName: string,
  item: {
    level: number
  }[]
}

const AchievementCard: React.FC<AchievementProps> = ({ title, imageName, item }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <RootBox>
      <FlexBox>
        <RootTypography fontSize={20}>{title}</RootTypography>
        <ShowButton>Show all</ShowButton>
      </FlexBox>
      <FlexBox height={"100%"}>
        <FlexBox alignSelf={"center"} width={"100%"}>
          {
            item.map((i, index) => (
              <AwardImg 
                key={index} 
                src={images[`${imageName}_${i.level}`]} 
                onClick={handleClickOpen}
              />
            ))
          }
        </FlexBox>
      </FlexBox>
      <AchievementItemDialog open={open} handleClose={handleClose} />
    </RootBox>
  )
}

export default AchievementCard;
