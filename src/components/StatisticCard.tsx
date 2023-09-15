import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import SVG from "./SVG";

interface StatisticCardProps {
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

const CardTitle = styled(Typography)(() => ({
  fontFamily: "BalooSemiBold",
  color: "#EFEFEF",
  margin: 0,
  alignSelf: "center",
}));

const CustomDivider = styled(Divider)(() => ({
  backgroundColor: "#272B30",
  margin: "2px 0px"
}))

const StatisticCard: React.FC<StatisticCardProps> = ({ items }) => {
  return (
    <CardCustom>
      {items.map((item, index) => (
        <>
          {item?.title && <CardTitle>{item.title}</CardTitle>}
          {item?.value && <CardTitle sx={{ fontSize: 32 }}>{item.value}</CardTitle>}
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
          {index < items.length-1 ? <CustomDivider /> : null }
        </>
      ))}
    </CardCustom>
  );
};

export default StatisticCard;
