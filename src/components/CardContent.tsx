import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SVG from "./SVG";

interface CardContentProps {
  item: {
    title?: string,
    value: string,
    increase: boolean,
    rate: number
  }
}

const CardTitle = styled(Typography)(() => ({
  fontFamily: "BalooSemiBold",
  color: "#EFEFEF",
  margin: 0,
  alignSelf: "center",
}));

const CardContent: React.FC<CardContentProps> = ({ item }) => {
  return (
    <div>
      <CardTitle>{item?.title}</CardTitle>
      <CardTitle sx={{ fontSize: 32 }}>{item.value}</CardTitle>
      <Box display={"flex"} alignItems={"center"}>
        {item?.increase ? (
          <SVG width={16} height={16} id="up-arrow-green" />
        ) : (
          <SVG width={16} height={16} id="down-arrow-orange" />
        )}
        <CardTitle sx={{ color: item?.increase ? "#83BF6E" : "#FF6A55" }}>
          {item?.rate}%
        </CardTitle>
      </Box>
    </div>
  );
};

export default CardContent;
