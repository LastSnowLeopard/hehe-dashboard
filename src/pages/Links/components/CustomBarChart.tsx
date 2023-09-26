import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Filter from './Filter';

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
}));

const RootChip = styled(Chip)(() => ({
  backgroundColor: "transparent",
  borderWidth: "2px",
  borderStyle: "solid",
  borderRadius: "8px",
  borderColor: "#272B30",
  padding: "8px 0px",
}))

const data = [
  {
    name: 'Sep 1',
    profit: 1
  },
  {
    name: 'Sep 2',
    profit: 2
  },
  {
    name: 'Sep 3',
    profit: 5
  },
  {
    name: 'Sep 4',
    profit: 3
  },
  {
    name: 'Sep 5',
    profit: 6
  },
  {
    name: 'Sep 6',
    profit: 4
  },
  {
    name: 'Sep 7',
    profit: 5
  },
  {
    name: 'Sep 8',
    profit: 3
  },
  {
    name: 'Sep 9',
    profit: 1
  },
  {
    name: 'Sep 10',
    profit: 1
  },
  {
    name: 'Sep 11',
    profit: 0.2
  },
];

const CustomBarChart: React.FC = () => {
  return (
    <RootBox>
      <Box display={"flex"} gap={1} marginBottom={3} justifyContent={"space-between"}>
        <Box display={"flex"} gap={1}>
          <RootTypography color={"#6F767E"}>New partners by</RootTypography>
          <Filter />
        </Box>
        <Box display={"flex"} gap={1}>
          <RootChip label="September" />
          <RootChip label="2023" />
        </Box>
      </Box>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
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
          <CartesianGrid horizontal={false} vertical={false}/>
          {/* <XAxis dataKey="name" /> */}
          <YAxis />
          <Bar type="monotone" dataKey="profit" barSize={20} fill="#FDE048" radius={[3, 3, 3, 3]} />
        </BarChart>
      </ResponsiveContainer>
    </RootBox>
  )
}

export default CustomBarChart
