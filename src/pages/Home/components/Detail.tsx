import { Fragment } from "react";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@/components/CardContent";

interface DetailProps {
  items: {
    title?: string;
    value: string;
    increase: boolean;
    rate: number;
  }[];
}

const CardCustom = styled(Card)(() => ({
  borderRadius: 12,
  backgroundColor: "#1A1D1F",
  backgroundImage: "none",
  padding: "16px 32px",
}));

const Detail: React.FC<DetailProps> = ({ items }) => {
  return (
    <CardCustom>
      {items.map((item, index) => (
        <Fragment>
          <CardContent item={item} key={index} />
          {index < items.length - 1 && <Divider sx={{margin: "5px 0px"}} />}
        </Fragment>
      ))}
    </CardCustom>
  );
};

export default Detail;
