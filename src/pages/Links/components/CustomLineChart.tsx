import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const RootBox = styled(Box)(({ theme }) => ({
  borderRadius: 12,
  backgroundColor: "#1A1D1F",
  padding: "12px 24px",
  height: "100%",
  [theme.breakpoints.down('sm')]: {
    padding: "12px",
  }
}));

const RootTypography = styled(Typography)(() => ({
  fontFamily: "BalooSemiBold",
  fontSize: 20
}))

const data = [
  {
    name: 'Sep 1',
    profit: 1000
  },
  {
    name: 'Sep 2',
    profit: 750
  },
  {
    name: 'Sep 3',
    profit: 1200
  },
  {
    name: 'Sep 4',
    profit: 600
  },
  {
    name: 'Sep 5',
    profit: 1500
  },
  {
    name: 'Sep 6',
    profit: 900
  },
  {
    name: 'Sep 7',
    profit: 1980
  },
  {
    name: 'Sep 8',
    profit: 500
  },
  {
    name: 'Sep 9',
    profit: 900
  },
  {
    name: 'Sep 10',
    profit: 896
  },
  {
    name: 'Sep 11',
    profit: 759
  },
  {
    name: 'Sep 12',
    profit: 1569
  },
];

const CustomLineChart: React.FC = () => {
  return (
    <RootBox>
      <Box display={"flex"} gap={1} marginBottom={3}>
        <RootTypography color={"#6F767E"}>Profit</RootTypography>
        <RootTypography>240 busd</RootTypography>
      </Box>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid horizontal={true} vertical={false}/>
          <XAxis dataKey="name" />
          <YAxis />
          <Line type="monotone" dataKey="profit" strokeWidth={5} stroke="#FDE048" dot={false} style={{padding: "32px"}} />
        </LineChart>
      </ResponsiveContainer>
    </RootBox>
  )
}

export default CustomLineChart
