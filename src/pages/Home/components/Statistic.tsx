import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@/components/CardContent";

interface StatisticProps {
  item: {
    title?: string,
    value: string,
    increase: boolean,
    rate: number
  }
}

const CardCustom = styled(Card)(() => ({
  borderRadius: 12,
  backgroundColor: "#1A1D1F",
  backgroundImage: "none",
  padding: "16px 32px",
}));

const Statistic: React.FC<StatisticProps> = ({ item }) => {
  return (
    <CardCustom>
      <CardContent item={item} />
    </CardCustom>
  );
};

export default Statistic;
